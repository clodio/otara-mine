import { Game } from './game';
import { gameState, Gem } from './state';
import { CellState, GRID_WIDTH, GRID_HEIGHT } from './grid';
import { Direction, getReflection } from './physics';

const MAX_STEPS = 100; // Prevents infinite loops

function getEmitterDetails(emitterId: string): { pos: { x: number; y: number }, dir: Direction } | null {
    const idNum = parseInt(emitterId.substring(1)) - 1;
    switch (emitterId[0]) {
        case 'T': return { pos: { x: idNum, y: -1 }, dir: Direction.DOWN };
        case 'B': return { pos: { x: idNum, y: GRID_HEIGHT }, dir: Direction.UP };
        case 'L': return { pos: { x: -1, y: idNum }, dir: Direction.RIGHT };
        case 'R': return { pos: { x: GRID_WIDTH, y: idNum }, dir: Direction.LEFT };
        default: return null;
    }
}

function getExitId(pos: { x: number, y: number }): string {
    if (pos.y < 0) return `T${pos.x + 1}`;
    if (pos.y >= GRID_HEIGHT) return `B${pos.x + 1}`;
    if (pos.x < 0) return `L${pos.y + 1}`;
    if (pos.x >= GRID_WIDTH) return `R${pos.y + 1}`;
    return 'Error';
}

function move(pos: { x: number; y: number }, dir: Direction): void {
    switch (dir) {
        case Direction.UP: pos.y--; break;
        case Direction.DOWN: pos.y++; break;
        case Direction.LEFT: pos.x--; break;
        case Direction.RIGHT: pos.x++; break;
    }
}

/**
 * Gets adjacent cell positions (up, down, left, right)
 */
function getAdjacentCells(pos: { x: number, y: number }): { x: number, y: number }[] {
    return [
        { x: pos.x, y: pos.y - 1 }, // Up
        { x: pos.x, y: pos.y + 1 }, // Down
        { x: pos.x - 1, y: pos.y }, // Left
        { x: pos.x + 1, y: pos.y }, // Right
    ];
}

/**
 * Checks if a position contains a BLACK_HOLE gem
 */
function isBlackHole(pos: { x: number, y: number }, gemMap: Map<string, Gem>, game: Game): boolean {
    if (pos.x < 0 || pos.x >= GRID_WIDTH || pos.y < 0 || pos.y >= GRID_HEIGHT) {
        return false;
    }
    const gemKey = `${pos.y},${pos.x}`;
    const gem = gemMap.get(gemKey);
    if (!gem) return false;
    
    const gemDef = (game as any).getGemDefinition(gem.name);
    return gemDef && gemDef.name === 'BLACK_HOLE';
}

/**
 * Calculates the refracted direction when passing by a BLACK_HOLE
 * Returns the new direction after refraction (90 degrees along the edge)
 */
function getRefractionDirection(currentPos: { x: number, y: number }, currentDir: Direction, blackHolePos: { x: number, y: number }): Direction | null {
    // Vector from BLACK_HOLE to current position
    const dx = currentPos.x - blackHolePos.x;
    const dy = currentPos.y - blackHolePos.y;
    
    // Deflect 90 degrees along the perimeter of the BLACK_HOLE
    // The deflection is perpendicular to the approach direction, guiding around the black hole
    
    if (currentDir === Direction.UP) {
        // Coming from below, deflect based on horizontal offset
        if (dx < 0) return Direction.RIGHT; 
        if (dx > 0) return Direction.LEFT; 
    } else if (currentDir === Direction.DOWN) {
        // Coming from above, deflect based on horizontal offset
        if (dx < 0) return Direction.RIGHT; 
        if (dx > 0) return Direction.LEFT; 
    } else if (currentDir === Direction.LEFT) {
        // Coming from right, deflect based on vertical offset
        if (dy < 0) return Direction.DOWN;    
        if (dy > 0) return Direction.UP;  
    } else if (currentDir === Direction.RIGHT) {
        // Coming from left, deflect based on vertical offset
        if (dy < 0) return Direction.DOWN;    
        if (dy > 0) return Direction.UP;  
    }
    
    return null;
}

/**
 * Traces a light wave's path through a logic grid.
 * @param grid The logic grid with CellState values.
 * @param gemMap A map from "y,x" coordinates to the Gem occupying that cell.
 * @param emitterId The starting emitter ID (e.g., 'T1').
 * @param game The game instance, used to get gem definitions.
 * @returns An object with the path result and the visual path.
 */
export function tracePath(
    grid: CellState[][], 
    gemMap: Map<string, Gem>, 
    emitterId: string,
    game: Game
) {
    const startDetails = getEmitterDetails(emitterId);
    if (!startDetails) {
        return { exitId: 'Error', colors: [], path: [], absorbed: false };
    }

    const currentPos = { ...startDetails.pos };
    let currentDir = startDetails.dir;
    
    // Path points are cell centers for drawing
    const path: {x: number, y: number}[] = [];
    const hitColors = new Set<string>();
    const hitGems = new Set<string>();
    
    // Track BLACK_HOLE refraction positions to prevent multiple refractions by the same laser
    const refractedByBlackHoles = new Set<string>();
    // Track pendings refraction to apply at next iteration
    let pendingRefractionDir: Direction | null = null;
    let pendingRefractionTarget: { x: number, y: number } | null = null;

    for (let step = 0; step < MAX_STEPS; step++) {
        move(currentPos, currentDir);
        
        // Add point for drawing
        // For the very first point, start from the edge of the board.
        if (path.length === 0) {
             path.push({ 
                x: startDetails.pos.x + (startDetails.dir === Direction.RIGHT ? 1 : startDetails.dir === Direction.LEFT ? 0 : 0.5),
                y: startDetails.pos.y + (startDetails.dir === Direction.DOWN ? 1 : startDetails.dir === Direction.UP ? 0 : 0.5)
            });
        }

        if (
            currentPos.x < 0 || currentPos.x >= GRID_WIDTH ||
            currentPos.y < 0 || currentPos.y >= GRID_HEIGHT
        ) {
            // Exited the board
            path.push({
                x: currentPos.x + (currentDir === Direction.LEFT ? 1 : currentDir === Direction.RIGHT ? 0 : 0.5),
                y: currentPos.y + (currentDir === Direction.UP ? 1 : currentDir === Direction.DOWN ? 0 : 0.5)
            });
            return { exitId: getExitId(currentPos), colors: [...hitColors], path, absorbed: false };
        }

        const cellState = grid[currentPos.y][currentPos.x];

        // Apply pending refraction when we reach the target cell.
        // If there's a reflective surface here, reflection prevails (refraction canceled).
        if (pendingRefractionTarget && currentPos.x === pendingRefractionTarget.x && currentPos.y === pendingRefractionTarget.y) {
            if (cellState === CellState.EMPTY && pendingRefractionDir !== null) {
                currentDir = pendingRefractionDir;
                pendingRefractionDir = null;
                pendingRefractionTarget = null;
                path.push({ x: currentPos.x + 0.5, y: currentPos.y + 0.5 });
                continue; // Skip interactions; the beam bends here and keeps going next step.
            }
            pendingRefractionDir = null;
            pendingRefractionTarget = null;
        }
        
        // Check for BLACK_HOLE refraction when in an EMPTY cell
        // Detect if adjacent to BLACK_HOLE to queue refraction at specific position
        if (cellState === CellState.EMPTY && pendingRefractionDir === null) {
            // Check all adjacent cells for BLACK_HOLE
            const adjacentCells = getAdjacentCells(currentPos);
            
            for (const adjPos of adjacentCells) {
                if (isBlackHole(adjPos, gemMap, game)) {
                    // Refraction key to track if already refracted by this BLACK_HOLE
                    const refractionKey = `${adjPos.y},${adjPos.x}`;
                    
                    // Only queue refraction if we haven't already refracted past this BLACK_HOLE
                    if (!refractedByBlackHoles.has(refractionKey)) {
                        const refractedDir = getRefractionDirection(currentPos, currentDir, adjPos);
                        if (refractedDir !== null && refractedDir !== currentDir) {
                            // Mark this BLACK_HOLE as the source of refraction
                            refractedByBlackHoles.add(refractionKey);
                            
                            // Calculate the refraction target position based on the ray's current direction
                            // This is where the ray will be when refraction should be applied
                            let targetPos: { x: number, y: number };
                            switch (currentDir) {
                                case Direction.UP:
                                    targetPos = { x: currentPos.x, y: currentPos.y - 1 };
                                    break;
                                case Direction.DOWN:
                                    targetPos = { x: currentPos.x, y: currentPos.y + 1 };
                                    break;
                                case Direction.RIGHT:
                                    targetPos = { x: currentPos.x + 1, y: currentPos.y };
                                    break;
                                case Direction.LEFT:
                                    targetPos = { x: currentPos.x - 1, y: currentPos.y };
                                    break;
                            }
                            
                            // Queue the refraction for when we reach the target position
                            pendingRefractionDir = refractedDir;
                            pendingRefractionTarget = targetPos;
                            break;
                        }
                    }
                }
            }
            continue; // Continue through EMPTY cell without further processing
        }

        // Add the current cell center as a path node before reflection
        path.push({ x: currentPos.x + 0.5, y: currentPos.y + 0.5 });
        
        // Something was hit, add gem color if not already hit
        const gemKey = `${currentPos.y},${currentPos.x}`;
        const hitGem = gemMap.get(gemKey);
        if (hitGem && !hitGems.has(hitGem.id)) {
            hitGems.add(hitGem.id);
            // This is the key change: use the game instance to get the definition
            const gemDef = (game as any).getGemDefinition(hitGem.name); 
            if (gemDef && gemDef.baseGems) {
                gemDef.baseGems.forEach((c: string) => hitColors.add(c));
            }
        }
        
        // Direct absorption or BLACK_HOLE hit
        if (cellState === CellState.ABSORB) {
            return { exitId: 'Absorbed', colors: [], path, absorbed: true };
        }
        
        // Check if we hit a BLACK_HOLE directly
        if (hitGem) {
            const hitGemDef = (game as any).getGemDefinition(hitGem.name);
            if (hitGemDef && hitGemDef.name === 'BLACK_HOLE') {
                // Direct BLACK_HOLE hit = absorption
                return { exitId: 'Absorbed', colors: [], path, absorbed: true };
            }
        }

        const newDir = getReflection(cellState, currentDir);
        if (newDir === null) {
            // Hit a triangle edge-on, passes through.
            continue;
        }
        
        currentDir = newDir;
    }

    // Loop detected or laser trapped inside grid
    return { exitId: 'Trapped', colors: [...hitColors], path, absorbed: false };
}
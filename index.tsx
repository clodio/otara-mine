
import { Game } from './src/game';
import { UI } from './src/ui';

declare global {
    interface Window {
        game: Game;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const ui = new UI();
    const game = new Game(ui);
    
    // Make game instance accessible for debugging
    window.game = game; 

    const partyId = new URLSearchParams(window.location.search).get('party_id');
    if (partyId) {
        game.startFromPartyId(partyId);
    }
});

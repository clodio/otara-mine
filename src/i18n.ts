

export type Language = 'de' | 'en' | 'fr';

const translations = {
    de: {
        lang: {
            name: "Deutsch",
            flag: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 3"><path d="M0 0h5v3H0z"/><path d="M0 1h5v2H0z" fill="#D00"/><path d="M0 2h5v1H0z" fill="#FFCE00"/></svg>`,
            switch: "Sprache wechseln",
        },
        mainMenu: {
            startGame: "Spiel starten",
            byline: "von Dirk Aporius und Google Studio AI",
            basedOn: "basiert auf dem <a href=\"https://boardgamegeek.com/boardgame/424152/orapa-mine\" target=\"_blank\" rel=\"noopener\">Brettspiel</a>",
        },
        difficulty: {
            title: "Schwierigkeitsgrad",
            TRAINING: "Training",
            TRAINING_desc: "Ideal zum Lernen des Spiels, mit dem Verlauf der Lichtstrahlen.",
            NORMAL: "Normal",
            NORMAL_desc: "Die Grundlagen. Lerne die farbigen und weissen Steine kennen.",
            MEDIUM: "Mittel",
            MEDIUM_desc: "Eine neue Herausforderung. Ein transparenter Prisma-Stein lenkt das Licht ab, ohne es zu färben.",
            HARD: "Schwer",
            HARD_desc: "Expertenmodus. Neben dem transparenten kommt ein schwarzer, Licht absorbierender Stein in Spiel.",
            STAR_NORMAL: "Star Normal",
            STAR_NORMAL_desc: "Eine neue Herausforderung mit speziellen Stern-Steinen.",
            STAR_HARD: "Star Hard",
            STAR_HARD_desc: "Die ultimative Herausforderung mit allen speziellen Stern-Steinen und einem schwarzen Loch.",
            CUSTOM: "Eigenes Level",
            CUSTOM_desc: "Wähle deine eigenen Steine und erstelle eine neue Herausforderung."
        },
        customCreator: {
            title: "Eigenes Level erstellen",
            selectColor: "1. Farbe wählen",
            selectShape: "2. Form wählen",
            addGem: "Edelstein hinzufügen +",
            levelSet: "Level-Set (deine Auswahl)",
            startLevel: "Level starten",
            alert: {
                selectColorAndShape: "Bitte wähle zuerst eine Farbe und eine Form aus."
            }
        },
        customDesigner: {
            title: "Eigene Form entwerfen",
            instruction: "Klicke auf die Zellen, um ihren Typ zu ändern (Leer, Block, Diagonale). Entwerfe einen Edelstein innerhalb des 4x4-Rasters.",
            preview: "Vorschau (optimierte Grösse):",
            finish: "Design fertigstellen",
        },
        gameScreen: {
            tabs: {
                actions: "Aktionen",
                logbook: "Logbuch",
                rules: "Regeln",
            },
            interactionMode: "Aktionsmodus:",
            modeWave: "Strahl senden",
            modeQuery: "Feld abfragen",
            availableGems: "Verfügbare Edelsteine:",
            showPath: "Aktuellen Lichtweg anzeigen (F)",
            shareLabel: "Teilen:",
            shareToast: "Link kopiert"
        },
        endScreen: {
            winTitle: "Gewonnen!",
            lossTitle: "Verloren!",
            stats: "Du hast die Mine in {{count}} Abfragen gelöst.",
            statsLoss: "Du hast die Lösung nach {{count}} Abfragen nicht gefunden.",
            retry: "Bitte versuche es erneut.",
            solutionLabel: {
                correct: "Korrekte Lösung:",
                alternative: "Alternative Lösung gefunden! Deine Lösung (transparent):",
                yourInput: "Deine Eingabe (über der korrekten Lösung):",
            },
            ratingLegendTitle: "Bewertung für {{difficulty}}",
            ratingLegend: {
                upTo: "bis {{end}} Abfragen",
                range: "{{start}} - {{end}} Abfragen",
                moreThan: "mehr als {{start}} Abfragen",
            }
        },
        buttons: {
            back: "Zurück",
            newLevel: "Neues Level",
            menu: "Menü",
            submitSolution: "Lösung einreichen",
            giveUp: "Aufgeben",
            remove: "Entfernen",
        },
        rules: {
            title: "Spielanleitung",
            objectiveTitle: "Ziel:",
            objective: "Finde die Position und Ausrichtung der versteckten Edelsteine.",
            item1: "Du hast zwei Methoden, um Informationen zu sammeln:",
            item2: "<strong>Strahl senden:</strong> Sende eine Lichtwelle von einem Emitter am Rand. Die austretende Farbe und Position verraten, welche Steine auf dem Weg getroffen wurden.",
            item3: "<strong>Feld abfragen:</strong> Frage ein einzelnes Feld direkt ab. Dies verrät dir die Grundfarbe des Steins in diesem Feld (oder ob es leer ist), aber nicht seine Form.",
            item4: "Ziehe Edelsteine aus der Werkzeugleiste auf das Feld. Du kannst sie verschieben und drehen.",
            item5: "Ein Klick auf einen platzierten Stein dreht ihn um 90°, ein langes Drücken spiegelt ihn (falls möglich).",
            item6: "Steine dürfen sich nicht überlappen oder Kante an Kante liegen.",
            item7: "Drücke 'n' für ein neues Level oder 'esc' um zum Menü zurückzukehren.",
            colorMixingTitle: "Farbmischung",
            colorMixingDesc: "Ein Lichtstrahl wird von farbigen Steinen abgelenkt und nimmt dabei deren Farbe an. Trifft er auf mehrere Steine, mischen sich die Farben:",
            basicRules: "Spielmethoden",
            panel: {
                item1: "<strong>Strahl senden:</strong> Klicke auf einen Emitter am Rand, um eine Lichtwelle zu senden. Dies gibt dir Hinweise auf den Pfad und die getroffenen Farben.",
                item2: "<strong>Feld abfragen:</strong> Wechsle den Aktionsmodus und klicke auf ein Feld, um dessen Grundfarbe zu erfahren.",
                item3: "Ziehe die Edelsteine auf das Feld, um die Lösung nachzubauen.",
                item4: "Klicke auf einen platzierten Stein, um ihn zu drehen. Langes Drücken spiegelt ihn.",
                item5: "Steine dürfen sich nicht überlappen oder Kante an Kante liegen.",
            }
        },
        tooltips: {
            absorbs: "Absorbiert Licht.",
            blackHole: "Absorbiert direktes Licht. Lenkt nahes Licht einmal ab (Brechung). Kann Strahlen einfangen.",
            reflectsOnly: "Reflektiert nur, färbt nicht.",
            addsColor: "Fügt Farbe '{{color}}' hinzu."
        },
        colors: {
            red: 'Rot',
            yellow: 'Gelb',
            blue: 'Blau',
            white: 'Weiss',
            transparent: 'Transparent',
            black: 'Schwarz',
            purple: 'Lila',
            skyBlue: 'Himmelblau',
            green: 'Grün',
            lightRed: 'Hellrot',
            orange: 'Orange',
            lightYellow: 'Hellgelb',
            lightPurple: 'Hell-Lila',
            darkGray: 'Dunkelgrau',
            lightGreen: 'Hellgrün',
            lightOrange: 'Hell-Orange',
            gray: 'Grau',
        },
        shapes: {
            rightTriangle: "Rechtwinkliges Dreieck",
            parallelogram: "Parallelogramm",
            bigTriangle: "Grosses Dreieck",
            diamond: "Raute",
            smallTriangle: "Kleines Dreieck",
            absorber: "Absorber",
            lShape: "L-Form",
            tShape: "T-Form",
            square: "Quadrat",
            bar: "Stab",
            small: "Klein",
            custom: "Eigene Form",
        },
        log: {
            absorbed: "Absorbiert",
            trapped: "Der Strahl ist gefangen",
            noColor: "Keine Farbe",
            unknownMix: "Unbekannte Mischung",
            query: "Abfrage ({{x}},{{y}})",
            empty: "Leer",
        },
        validation: {
            exactOneRed: "Benötigt: <strong>genau 1 roten</strong> Stein",
            exactOneYellow: "Benötigt: <strong>genau 1 gelben</strong> Stein",
            exactOneBlue: "Benötigt: <strong>genau 1 blauen</strong> Stein",
            atLeastOneWhite: "Benötigt: <strong>mindestens 1 weissen</strong> Stein",
            maxTwoWhite: "Erlaubt: <strong>maximal 2 weisse</strong> Steine",
            maxTwoTransparent: "Erlaubt: <strong>maximal 2 transparente</strong> Steine",
            maxOneBlack: "Erlaubt: <strong>maximal 1 schwarzen</strong> Stein",
            levelIsValid: "Level ist valide",
        },
        ratings: {
            training: {
                "1": "Sehr gut", "2": "Gut", "3": "Normal", "4": "Verbesserungsfähig"
            },
            normal: {
                "1": "Ein wahrer Experte bei der Edelsteinsuche", "2": "Ein Profi, dem kaum einer was vormacht", "3": "Guter Edelsteinsucher", "4": "Juhu, alle Edelsteine gefunden!", "5": "Immerhin alle Edelsteine gefunden."
            },
            medium: {
                "1": "Meisterlich! Kaum eine Abfrage zu viel.", "2": "Sehr beeindruckend! Du kennst dich aus.", "3": "Starke Leistung! Du hast den Dreh raus.", "4": "Gut gemacht! Alle Schätze geborgen.", "5": "Geduld und Spucke führen zum Ziel!"
            },
            hard: {
                "1": "Legendär! Eine Leistung für die Geschichtsbücher.", "2": "Herausragend! Selbst Experten staunen.", "3": "Experten-Niveau! Du hast es wirklich drauf.", "4": "Ein hartes Stück Arbeit, aber erfolgreich!", "5": "Puh, das war knapp, aber gewonnen!"
            },
        }
    },
    en: {
        lang: {
            name: "English",
            flag: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30"><clipPath id="a"><path d="M0 0v30h60V0z"/></clipPath><clipPath id="b"><path d="M30 15h30v15H30zM0 0v15h30V0z"/></clipPath><g clip-path="url(#a)"><path d="M0 0v30h60V0z" fill="#012169"/><path d="M0 0l60 30m-60 0L60 0" stroke="#fff" stroke-width="6"/><path d="M0 0l60 30m-60 0L60 0" clip-path="url(#b)" stroke="#C8102E" stroke-width="4"/><path d="M0 15h60M30 0v30" stroke="#fff" stroke-width="10"/><path d="M0 15h60M30 0v30" stroke="#C8102E" stroke-width="6"/></g></svg>`,
            switch: "Change language",
        },
        mainMenu: {
            startGame: "Start Game",
            byline: "by Dirk Aporius and Google Studio AI",
            basedOn: "based on the <a href=\"https://boardgamegeek.com/boardgame/424152/orapa-mine\" target=\"_blank\" rel=\"noopener\">boardgame</a>",
        },
        difficulty: {
            title: "Difficulty",
            TRAINING: "Training",
            TRAINING_desc: "Ideal for learning the game, shows the path of light rays.",
            NORMAL: "Normal",
            NORMAL_desc: "The basics. Get to know the colored and white gems.",
            MEDIUM: "Medium",
            MEDIUM_desc: "A new challenge. A transparent prism gem deflects light without coloring it.",
            HARD: "Hard",
            HARD_desc: "Expert mode. In addition to the transparent gem, a black, light-absorbing gem comes into play.",
            STAR_NORMAL: "Star Normal",
            STAR_NORMAL_desc: "A new challenge with special star gems.",
            STAR_HARD: "Star Hard",
            STAR_HARD_desc: "The ultimate challenge with special star gems and blackhole.",
            CUSTOM: "Custom Level",
            CUSTOM_desc: "Choose your own gems and create a new challenge."
        },
        customCreator: {
            title: "Create Custom Level",
            selectColor: "1. Select Color",
            selectShape: "2. Select Shape",
            addGem: "Add Gem +",
            levelSet: "Level Set (Your Selection)",
            startLevel: "Start Level",
            alert: {
                selectColorAndShape: "Please select a color and a shape first."
            }
        },
        customDesigner: {
            title: "Design Custom Shape",
            instruction: "Click on the cells to change their type (Empty, Block, Diagonal). Design a gem within the 4x4 grid.",
            preview: "Preview (cropped size):",
            finish: "Finish Design",
        },
        gameScreen: {
            tabs: {
                actions: "Actions",
                logbook: "Logbook",
                rules: "Rules",
            },
            interactionMode: "Action Mode:",
            modeWave: "Send Ray",
            modeQuery: "Query Cell",
            availableGems: "Available Gems:",
            showPath: "Show current light path (F)",
            shareLabel: "Share:",
            shareToast: "Link copied"
        },
        endScreen: {
            winTitle: "You Win!",
            lossTitle: "You Lose!",
            stats: "You solved the mine in {{count}} queries.",
            statsLoss: "You did not find the solution after {{count}} queries.",
            retry: "Please try again.",
            solutionLabel: {
                correct: "Correct Solution:",
                alternative: "Alternative solution found! Your solution (transparent):",
                yourInput: "Your input (over the correct solution):",
            },
            ratingLegendTitle: "Rating for {{difficulty}}",
            ratingLegend: {
                upTo: "up to {{end}} queries",
                range: "{{start}} - {{end}} queries",
                moreThan: "more than {{start}} queries",
            }
        },
        buttons: {
            back: "Back",
            newLevel: "New Level",
            menu: "Menu",
            submitSolution: "Submit Solution",
            giveUp: "Give Up",
            remove: "Remove",
        },
        rules: {
            title: "How to Play",
            objectiveTitle: "Goal:",
            objective: "Find the position and orientation of the hidden gems.",
            item1: "You have two methods to gather information:",
            item2: "<strong>Send Ray:</strong> Send a light wave from an emitter on the edge. The exiting color and position reveal which gems were hit along the path.",
            item3: "<strong>Query Cell:</strong> Directly query a single cell. This tells you the base color of the gem in that cell (or if it's empty), but not its shape.",
            item4: "Drag gems from the toolbar onto the board. You can move and rotate them.",
            item5: "Clicking on a placed gem rotates it by 90°. A long press flips it (if possible).",
            item6: "Gems cannot overlap or be edge-to-edge.",
            item7: "Press 'n' for a new level or 'esc' to return to the menu.",
            colorMixingTitle: "Color Mixing",
            colorMixingDesc: "A light beam is deflected by colored gems, taking on their color. If it hits multiple gems, the colors mix:",
            basicRules: "Game Methods",
            panel: {
                item1: "<strong>Send Ray:</strong> Click an emitter on the edge to send a light wave. This gives clues about the path and colors hit.",
                item2: "<strong>Query Cell:</strong> Switch the action mode and click a cell to learn its base color.",
                item3: "Drag the gems onto the board to replicate the solution.",
                item4: "Click on a placed gem to rotate it. A long press flips it.",
                item5: "Gems cannot overlap or be edge-to-edge.",
            }
        },
        tooltips: {
            absorbs: "Absorbs light.",
            blackHole: "Absorbs direct light. Deflects nearby light once (refraction). Can trap beams.",
            reflectsOnly: "Only reflects, does not color.",
            addsColor: "Adds '{{color}}' color."
        },
        colors: {
            red: 'Red',
            yellow: 'Yellow',
            blue: 'Blue',
            white: 'White',
            transparent: 'Transparent',
            black: 'Black',
            purple: 'Purple',
            skyBlue: 'Sky Blue',
            green: 'Green',
            lightRed: 'Light Red',
            orange: 'Orange',
            lightYellow: 'Light Yellow',
            lightPurple: 'Light Purple',
            darkGray: 'Dark Gray',
            lightGreen: 'Light Green',
            lightOrange: 'Light Orange',
            gray: 'Gray',
        },
        shapes: {
            rightTriangle: "Right Triangle",
            parallelogram: "Parallelogram",
            bigTriangle: "Large Triangle",
            diamond: "Diamond",
            smallTriangle: "Small Triangle",
            absorber: "Absorber",
            lShape: "L-Shape",
            tShape: "T-Shape",
            square: "Square",
            bar: "Bar",
            small: "Small",
            custom: "Custom Shape",
        },
        log: {
            absorbed: "Absorbed",
            trapped: "The beam is trapped",
            noColor: "No Color",
            unknownMix: "Unknown Mix",
            query: "Query ({{x}},{{y}})",
            empty: "Empty",
        },
        validation: {
            exactOneRed: "Requires: <strong>exactly 1 red</strong> gem",
            exactOneYellow: "Requires: <strong>exactly 1 yellow</strong> gem",
            exactOneBlue: "Requires: <strong>exactly 1 blue</strong> gem",
            atLeastOneWhite: "Requires: <strong>at least 1 white</strong> gem",
            maxTwoWhite: "Allowed: <strong>maximum of 2 white</strong> gems",
            maxTwoTransparent: "Allowed: <strong>maximum of 2 transparent</strong> gems",
            maxOneBlack: "Allowed: <strong>maximum of 1 black</strong> gem",
            levelIsValid: "Level is valid",
        },
        ratings: {
            training: {
                "1": "Very good", "2": "Good", "3": "Average", "4": "Needs improvement"
            },
            normal: {
                "1": "A true gem-finding expert", "2": "A pro who can't be fooled", "3": "Good gem hunter", "4": "Yay, all gems found!", "5": "At least all gems were found."
            },
            medium: {
                "1": "Masterful! Hardly a query wasted.", "2": "Very impressive! You know your stuff.", "3": "Strong performance! You've got the hang of it.", "4": "Well done! All treasures recovered.", "5": "Patience and persistence lead to success!"
            },
            hard: {
                "1": "Legendary! A performance for the history books.", "2": "Outstanding! Even experts are amazed.", "3": "Expert level! You've really got it.", "4": "A tough job, but successful!", "5": "Phew, that was close, but you won!"
            },
        }
    }
    ,
    fr: {
        lang: {
            name: "Français",
            flag: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2"><path d="M0 0h3v2H0z" fill="#fff"/><path d="M0 0h1v2H0z" fill="#0055A4"/><path d="M2 0h1v2H2z" fill="#EF4135"/></svg>`,
            switch: "Changer de langue",
        },
        mainMenu: {
            startGame: "Commencer la partie",
            byline: "par Dirk Aporius et Google Studio AI",
            basedOn: "basé sur le <a href=\"https://boardgamegeek.com/boardgame/424152/orapa-mine\" target=\"_blank\" rel=\"noopener\">jeu de société</a>",
        },
        difficulty: {
            title: "Difficulté",
            TRAINING: "Entraînement",
            TRAINING_desc: "Idéal pour apprendre le jeu, affiche le trajet des rayons lumineux.",
            NORMAL: "Normal",
            NORMAL_desc: "Les bases. Découvrez les gemmes colorées et blanches.",
            MEDIUM: "Moyen",
            MEDIUM_desc: "Un nouveau défi. Une gemme prisme transparente dévie la lumière sans la colorer.",
            HARD: "Difficile",
            HARD_desc: "Mode expert. En plus de la gemme transparente, une gemme noire absorbant la lumière entre en jeu.",
            STAR_NORMAL: "Star Normal",
            STAR_NORMAL_desc: "Un nouveau défi avec des gemmes étoile spéciales.",
            STAR_HARD: "Star Difficile",
            STAR_HARD_desc: "Le défi ultime avec des gemmes étoile spéciales et un trou noir.",
            CUSTOM: "Niveau personnalisé",
            CUSTOM_desc: "Choisissez vos gemmes et créez un nouveau défi."
        },
        customCreator: {
            title: "Créer un niveau personnalisé",
            selectColor: "1. Choisir une couleur",
            selectShape: "2. Choisir une forme",
            addGem: "Ajouter une gemme +",
            levelSet: "Ensemble de niveaux (votre sélection)",
            startLevel: "Démarrer le niveau",
            alert: {
                selectColorAndShape: "Veuillez d'abord choisir une couleur et une forme."
            }
        },
        customDesigner: {
            title: "Concevoir une forme personnalisée",
            instruction: "Cliquez sur les cellules pour changer leur type (Vide, Bloc, Diagonale). Concevez une gemme dans la grille 4x4.",
            preview: "Aperçu (taille recadrée) :",
            finish: "Terminer la conception",
        },
        gameScreen: {
            tabs: {
                actions: "Actions",
                logbook: "Journal",
                rules: "Règles",
            },
            interactionMode: "Actions :",
            modeWave: "Envoyer un rayon",
            modeQuery: "Interroger une case",
            availableGems: "Gemmes disponibles :",
            showPath: "Afficher le trajet actuel de la lumière (F)",
            shareLabel: "Partager :",
            shareToast: "Lien copié"
        },
        endScreen: {
            winTitle: "Gagné !",
            lossTitle: "Perdu !",
            stats: "Vous avez résolu la mine en {{count}} requêtes.",
            statsLoss: "Vous n'avez pas trouvé la solution après {{count}} requêtes.",
            retry: "Veuillez réessayer.",
            solutionLabel: {
                correct: "Solution correcte :",
                alternative: "Solution alternative trouvée ! Votre solution (transparente) :",
                yourInput: "Votre saisie (par-dessus la solution correcte) :",
            },
            ratingLegendTitle: "Évaluation pour {{difficulty}}",
            ratingLegend: {
                upTo: "jusqu'à {{end}} requêtes",
                range: "{{start}} - {{end}} requêtes",
                moreThan: "plus de {{start}} requêtes",
            }
        },
        buttons: {
            back: "Retour",
            newLevel: "Nouveau niveau",
            menu: "Menu",
            submitSolution: "Valider la solution",
            giveUp: "Abandonner",
            remove: "Retirer",
        },
        rules: {
            title: "Règles du jeu",
            objectiveTitle: "Objectif :",
            objective: "Trouvez la position et l'orientation des gemmes cachées.",
            item1: "Vous avez deux méthodes pour obtenir des informations :",
            item2: "<strong>Envoyer un rayon :</strong> Envoyez une onde lumineuse depuis un émetteur sur le bord. La couleur et la position de sortie révèlent quelles gemmes ont été touchées.",
            item3: "<strong>Interroger une case :</strong> Interrogez directement une case. Cela vous indique la couleur de base de la gemme (ou si la case est vide), mais pas sa forme.",
            item4: "Faites glisser les gemmes de la barre d'outils sur le plateau. Vous pouvez les déplacer et les faire pivoter.",
            item5: "Un clic sur une gemme posée la fait pivoter de 90°, un appui long la retourne (si possible).",
            item6: "Les gemmes ne peuvent pas se chevaucher ni être côte à côte.",
            item7: "Appuyez sur 'n' pour un nouveau niveau ou sur 'esc' pour revenir au menu.",
            colorMixingTitle: "Mélange des couleurs",
            colorMixingDesc: "Un faisceau est dévié par des gemmes colorées et prend leur couleur. S'il touche plusieurs gemmes, les couleurs se mélangent :",
            basicRules: "Méthodes de jeu",
            panel: {
                item1: "<strong>Envoyer un rayon :</strong> Cliquez sur un émetteur au bord pour envoyer une onde lumineuse. Cela donne des indices sur le trajet et les couleurs touchées.",
                item2: "<strong>Interroger une case :</strong> Changez de mode d'action et cliquez sur une case pour connaître sa couleur de base.",
                item3: "Faites glisser les gemmes sur le plateau pour reproduire la solution.",
                item4: "Cliquez sur une gemme posée pour la faire pivoter. Un appui long la retourne.",
                item5: "Les gemmes ne peuvent pas se chevaucher ni être côte à côte.",
            }
        },
        tooltips: {
            absorbs: "Absorbe la lumière.",
            blackHole: "Absorbe la lumière directe. Dévie la lumière proche une fois (réfraction). Peut piéger les faisceaux.",
            reflectsOnly: "Réfléchit seulement, ne colore pas.",
            addsColor: "Ajoute la couleur '{{color}}'."
        },
        colors: {
            red: 'Rouge',
            yellow: 'Jaune',
            blue: 'Bleu',
            white: 'Blanc',
            transparent: 'Transparent',
            black: 'Noir',
            purple: 'Violet',
            skyBlue: 'Bleu ciel',
            green: 'Vert',
            lightRed: 'Rouge clair',
            orange: 'Orange',
            lightYellow: 'Jaune clair',
            lightPurple: 'Violet clair',
            darkGray: 'Gris foncé',
            lightGreen: 'Vert clair',
            lightOrange: 'Orange clair',
            gray: 'Gris',
        },
        shapes: {
            rightTriangle: "Triangle rectangle",
            parallelogram: "Parallélogramme",
            bigTriangle: "Grand triangle",
            diamond: "Losange",
            smallTriangle: "Petit triangle",
            absorber: "Absorbeur",
            lShape: "Forme en L",
            tShape: "Forme en T",
            square: "Carré",
            bar: "Barre",
            small: "Petit",
            custom: "Forme personnalisée",
        },
        log: {
            absorbed: "Absorbé",
            trapped: "Le laser est piégé",
            noColor: "Sans couleur",
            unknownMix: "Mélange inconnu",
            query: "Requête ({{x}},{{y}})",
            empty: "Vide",
        },
        validation: {
            exactOneRed: "Requiert : <strong>exactement 1 gemme rouge</strong>",
            exactOneYellow: "Requiert : <strong>exactement 1 gemme jaune</strong>",
            exactOneBlue: "Requiert : <strong>exactement 1 gemme bleue</strong>",
            atLeastOneWhite: "Requiert : <strong>au moins 1 gemme blanche</strong>",
            maxTwoWhite: "Autorisé : <strong>au maximum 2 gemmes blanches</strong>",
            maxTwoTransparent: "Autorisé : <strong>au maximum 2 gemmes transparentes</strong>",
            maxOneBlack: "Autorisé : <strong>au maximum 1 gemme noire</strong>",
            levelIsValid: "Niveau valide",
        },
        ratings: {
            training: {
                "1": "Très bien", "2": "Bien", "3": "Moyen", "4": "À améliorer"
            },
            normal: {
                "1": "Un véritable expert des gemmes", "2": "Un pro qu'on ne peut pas tromper", "3": "Bon chasseur de gemmes", "4": "Youpi, toutes les gemmes trouvées !", "5": "Au moins, toutes les gemmes ont été trouvées."
            },
            medium: {
                "1": "Magistral ! Presque aucune requête de trop.", "2": "Très impressionnant ! Vous savez ce que vous faites.", "3": "Belle performance ! Vous avez pris le coup.", "4": "Bien joué ! Tous les trésors récupérés.", "5": "Patience et persévérance mènent au succès !"
            },
            hard: {
                "1": "Légendaire ! Une performance pour les livres d'histoire.", "2": "Remarquable ! Même les experts sont impressionnés.", "3": "Niveau expert ! Vous assurez.", "4": "Un dur labeur, mais réussi !", "5": "Ouf, c'était juste, mais gagné !"
            },
        }
    }
};

/**
 * Determines the initial language based on stored preference or browser language.
 * Priority:
 * 1. Language explicitly set by the user and stored in localStorage.
 * 2. Browser's language setting (if German).
 * 3. English as a fallback.
 */
function determineInitialLanguage(): Language {
    const savedLang = localStorage.getItem('orapa-lang');
    if (savedLang === 'de' || savedLang === 'en' || savedLang === 'fr') {
        return savedLang as Language;
    }

    const browserLang = navigator.language.slice(0, 2).toLowerCase();
    if (browserLang === 'de' || browserLang === 'fr') {
        return browserLang as Language;
    }

    return 'en';
}

let currentLang: Language = determineInitialLanguage();

const listeners: (() => void)[] = [];

export function onLanguageChange(callback: () => void) {
    listeners.push(callback);
}

function notifyListeners() {
    listeners.forEach(cb => cb());
    document.documentElement.lang = currentLang;
}

export function setLanguage(lang: Language) {
    if (lang === currentLang) return;
    currentLang = lang;
    localStorage.setItem('orapa-lang', lang);
    notifyListeners();
}

export function getLanguage(): Language {
    return currentLang;
}

export function t(key: string, replacements?: { [key: string]: string | number }): string {
    const keys = key.split('.');
    let result: any = translations[currentLang];
    
    // Primary language lookup
    for (const k of keys) {
        result = result?.[k];
        if (result === undefined) break;
    }
    
    // Fallback to German if key not found in current language
    if (result === undefined && currentLang !== 'de') {
        let fallbackResult: any = translations.de;
        for (const k of keys) {
            fallbackResult = fallbackResult?.[k];
            if (fallbackResult === undefined) return key; // Return key if not found in fallback either
        }
        result = fallbackResult;
    } else if (result === undefined) {
        return key;
    }
    
    if (typeof result !== 'string') return key;

    if (replacements) {
        Object.entries(replacements).forEach(([rKey, rValue]) => {
            const regex = new RegExp(`{{${rKey}}}`, 'g');
            result = result.replace(regex, String(rValue));
        });
    }

    return result;
}

// Set initial language on load
document.documentElement.lang = currentLang;
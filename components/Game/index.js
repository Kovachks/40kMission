import GamePrompt from '../GamePrompt';
import styles from './Game.module.css';

const Game = props => {
    const {
        achieveSecondary,
        back,
        forward,
        currentStep,
        disableRedraw,
        discardSecondary,
        endTurn,
        gameData,
        generateDeployment,
        generatePrimary,
        generateNewSecondary,
        generateSecondaries,
        generateSpecial,
        keepSecondaries,
        playerOne,
        playerTwo,
        setAttacker,
        startGame
    } = props;

    const steps = [
        {
            description: 'Generate Deployment',
            button1: {
                func: () => back(currentStep),
                text: 'Back'
            },
            button2: {
                func: () => generateDeployment(),
                text: 'Yes'
            }
        },
        {
            description: `Deployment Name: ${gameData.deployment.name}`,
            longDescriptionTitle: 'Deployment: ',
            deploymentImage: gameData.deployment.img,
            button1: {
                func: () => forward(currentStep),
                text: 'Continue'
            }
        },
        {
            description: 'Generate Primary',
            button1: {
                func: () => back(currentStep),
                text: 'Back'
            },
            button2: {
                func: () => generatePrimary(),
                text: 'Yes'
            }
        },
        {
            description: `Mission Name: ${gameData.primary.name}`,
            longDescriptionTitle: 'Mission Rule:',
            longDescription: gameData.primary.description,
            button1: {
                func: () => forward(currentStep),
                text: 'Continue'
            }
        },
        {
            description: `Generate Special Rule`,
            button1: {
                func: () => back(currentStep),
                text: 'Back'
            },
            button2: {
                func: () => generateSpecial(),
                text: 'Yes'
            }
        },
        {
            description: `Special Rule: ${gameData.special.name}`,
            longDescriptionTitle: 'Mission Rule:',
            longDescription: gameData.special.description,
            button1: {
                func: () => forward(currentStep),
                text: 'Continue'
            }
        },
        {
            description: 'Which player is the attacker',
            button1: {
                func: () => setAttacker('playerOne'),
                text: playerOne.name
            },
            button2: {
                func: () => setAttacker('playerTwo'),
                text: playerTwo.name
            }
        },
        {
            description: 'Who is first',
            button1: {
                func: () => startGame('playerOne'),
                text: playerOne.name
            },
            button2: {
                func: () => startGame('playerTwo'),
                text: playerTwo.name
            }
        },
        {
            description: `Generate Secondaries`,
            button1: {
                func: () => back(currentStep),
                text: 'Back'
            },
            button2: {
                func: () => generateSecondaries(gameData.currentTurn === 'playerOne' ? 0 : 1),
                text: 'Yes'
            }
        },
        {
            description: `Secondary Missions`,
            mission1: {
                ...gameData.displaySecondaries[0]
            },
            mission2: {
                ...gameData.displaySecondaries[1]
            },
            button1: {
                disableButton: disableRedraw,
                func: () => generateNewSecondary(0),
                text: `Redraw ${gameData.displaySecondaries[0].name}`
            },
            button2: {
                disableButton: disableRedraw,
                func: () => generateNewSecondary(1),
                text: `Redraw ${gameData.displaySecondaries[1].name}`
            },
            button3: {
                func: () => keepSecondaries(),
                text: 'Keep'
            }
        },
        {
            description: `Turn Results`,
            mission1: {
                ...gameData.displaySecondaries[0]
            },
            mission2: {
                ...gameData.displaySecondaries[1]
            },
            button1: {
                func: () => achieveSecondary(0),
                text: `Acheived ${gameData.displaySecondaries[0].name}`
            },
            button2: {
                func: () => achieveSecondary(1),
                text: `Acheived ${gameData.displaySecondaries[1].name}`
            },
            button3: {
                func: () => discardSecondary(0),
                text: `Discard ${gameData.displaySecondaries[0].name}`,
            },
            button4: {
                func: () => discardSecondary(1),
                text: `Discard ${gameData.displaySecondaries[1].name}`,
            },
            button5: {
                func: () => endTurn(),
                text: 'End Turn'
            }
        }
    ]

    return (
        <div className={styles.GameContainer}>
            {currentStep === 9 &&
            <GamePrompt {...steps[6]} />
            }
            {currentStep === 10 &&
            <GamePrompt {...steps[7]} />
            }
            {currentStep === 11 &&
            <GamePrompt {...steps[8]} />
            }
            {currentStep === 12 &&
             <GamePrompt {...steps[9]} />   
            }
            {currentStep === 13 &&
            <GamePrompt {...steps[10]} />
            }

        
            {currentStep === 3 &&
            <GamePrompt {...steps[0]} />
            }
            {currentStep >= 4 &&
            <GamePrompt {...steps[1]}  disableButton={currentStep !== 4} />
            }
            {currentStep === 5 &&
            <GamePrompt {...steps[2]} />
            }
            {currentStep >= 6 &&
            <GamePrompt {...steps[3]} disableButton={currentStep !== 6} />
            }
            {currentStep === 7 &&
            <GamePrompt {...steps[4]} />
            }
            {currentStep >= 8 &&
            <GamePrompt {...steps[5]} disableButton={currentStep !== 8} />
            }
        </div>
    )

};

export default Game;
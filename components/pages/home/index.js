import styles from './Home.module.css';
import { deployments, primaryMissions, secondaryMissions, specials } from '@/schemas/missions.js'
import { useState } from 'react';
import PlayerContainer from '@/components/PlayerContainer';
import PlayerStats from '@/components/PlayerStats';
import Game from '@/components/Game';

const Home = () => {
    const [step, setStep] = useState(1);
    const [attacker, setAttacker] = useState('');
    const [disableRedraw, setDisableRedraw] = useState(false);
    const [gamePrimaries, setGamePrimaries] = useState(primaryMissions);
    const [gameDeployments, setGameDeployments] = useState(deployments);
    const [gameSpecials, setGameSpecials] = useState(specials);
    const [playerOne, setPlayerOne] = useState({
        cp: 0,
        faction: '',
        name: '',
        primaryPoints: 0,
        player: 'playerOne',
        secondaryPoints: 0
    });
    const [playerTwo, setPlayerTwo] = useState({
        cp: 0,
        faction: '',
        name: '',
        player: 'playerTwo',
        primaryPoints: 0,
        secondaryPoints: 0,
    });
    const [gameData, setGameData] = useState({
        currentPlayer: '',
        gameStarted: false,
        currentTurn: '',
        primary: {},
        secondaries: [
            {
                player: 'playerOne',
                secondaries: structuredClone(secondaryMissions),
                turnSecondaries: []
            },
            {
                player: 'playerTwo',
                secondaries: structuredClone(secondaryMissions),
                turnSecondaries: []
            }
        ],
        special: {},
        deployment: {},
        displaySecondaries: [{}, {}],
        turn: 1
    });

    const back = step => {
        setStep(step - 1)
    };

    const forward = step => {
        setStep(step + 1)
    };

    const handlePlayerCreation = playerDetails => {
        if (step === 1) {
            setPlayerOne({
                ...playerOne,
                ...playerDetails
            });
            setStep(2);
        } else {
            setPlayerTwo({
                ...playerTwo,
                ...playerDetails
            })
            setStep(3);
        }
    };

    const generateDeployment = () => {
        const cloneDeployments = structuredClone(gameDeployments);
        const length = cloneDeployments.length;
        const randomIndex = Math.floor(Math.random() * length);

        const deployment = cloneDeployments.splice(randomIndex, 1)[0];

        setGameData({
            ...gameData,
            deployment: {
                ...deployment
            }
        });
        setGameDeployments(cloneDeployments);
        forward(step);
    };

    const generatePrimary = () => {
        const clonePrimaries = structuredClone(gamePrimaries);
        const length = clonePrimaries.length;
        const randomIndex = Math.floor(Math.random() * length);

        const primary = clonePrimaries.splice(randomIndex, 1)[0];

        setGameData({
            ...gameData,
            primary: {
                ...primary
            }
        });
        setGamePrimaries(clonePrimaries);
        forward(step);
    };

    const generateSpecial = () => {
        const cloneSpecials = structuredClone(gameSpecials);
        const length = cloneSpecials.length;
        const randomIndex = Math.floor(Math.random() * length);

        const special = cloneSpecials.splice(randomIndex, 1)[0];
        console.log(special)
        setGameData({
            ...gameData,
            special: {
                ...special
            }
        });
        setGameSpecials(cloneSpecials);
        forward(step);
    };

    const handleAttacker = name => {
        setAttacker(name);
        forward(step);
    };

    const startGame = name => {
        setGameData({
            ...gameData,
            currentTurn: name
        });
        forward(step);
    };

    const generateSecondaries = player => {
        console.log(player)
        const playerIndex = gameData.currentTurn === 'playerOne' ? 0 : 1;
        const cloneGameData = structuredClone(gameData);
        console.log(cloneGameData)
        if (!cloneGameData.secondaries[playerIndex].turnSecondaries.length) {
            const cloneSecondaries = structuredClone(cloneGameData.secondaries[player].secondaries);
            console.log(cloneSecondaries)
            const length1 = cloneSecondaries.length;
            const randomIndex1 = Math.floor(Math.random() * length1);
            const firstSecondary = cloneSecondaries.splice(randomIndex1, 1)[0];

            const length2 = cloneSecondaries.length;
            const randomIndex2 = Math.floor(Math.random() * length2);
    
            const secondSecondary = cloneSecondaries.splice(randomIndex2, 1)[0];
    
            const displaySecondaries = [
                firstSecondary,
                secondSecondary
            ];
            console.log(displaySecondaries);
            cloneGameData.secondaries[playerIndex].secondaries = cloneSecondaries;
            console.log(cloneGameData)
            setGameData({
                ...cloneGameData,
                displaySecondaries: [...displaySecondaries]
            });
            forward(step);
        } else {
            const turnSecondariesLastIndex = cloneGameData.secondaries[playerIndex].turnSecondaries.length - 1;
            const lastTurn = cloneGameData.secondaries[playerIndex].turnSecondaries[turnSecondariesLastIndex];
            console.log(lastTurn);
            const displaySecondaries = lastTurn.filter(item => item.achieved === 0 && item.discard === 0);
            console.log(displaySecondaries)
            for (let i = 0; i <= 2; i++) {
                const cloneSecondaries = structuredClone(cloneGameData.secondaries[player].secondaries);
                const length = cloneSecondaries.length;
                const randomIndex = Math.floor(Math.random() * length);
    
                const generatedSecondary = cloneSecondaries.splice(randomIndex, 1)[0];
                displaySecondaries.push(generatedSecondary)
                cloneGameData.secondaries[playerIndex].secondaries = cloneSecondaries;
                setGameData({
                    ...cloneGameData,
                    displaySecondaries: [...displaySecondaries]
                });
                forward(step);
            }
        }
    };

    const generateNewSecondary = index => {
        const playerIndex = gameData.currentTurn === 'playerOne' ? 0 : 1;
        const cloneSecondaries = structuredClone(gameData.secondaries[playerIndex].secondaries);
        const cloneDisplaySecondaries = structuredClone(gameData.displaySecondaries);

        const length = cloneSecondaries.length;
        const randomIndex = Math.floor(Math.random() * length);

        const newSecondary = cloneSecondaries.splice(randomIndex, 1)[0];

        cloneDisplaySecondaries[index] = newSecondary;

        const cloneGameData = structuredClone(gameData);

        setGameData({
            ...cloneGameData,
            displaySecondaries: [...cloneDisplaySecondaries]
        });
        setDisableRedraw(true);
    };

    const keepSecondaries = () => {
        setDisableRedraw(false);
        const playerIndex = gameData.currentTurn === 'playerOne' ? 0 : 1;
        console.log(playerIndex);
        const cloneGameData = structuredClone(gameData);

        const cloneTurnSecondaries = structuredClone(cloneGameData.secondaries[playerIndex].turnSecondaries);
        console.log(cloneTurnSecondaries);
        console.log(gameData);
        cloneTurnSecondaries.push(gameData.displaySecondaries);

        cloneGameData.secondaries[playerIndex].turnSecondaries = cloneTurnSecondaries;

        console.log(cloneGameData);
        setGameData({
            ...cloneGameData
        });
        forward(step);
    };

    const achieveSecondary = index => {
        const playerIndex = gameData.currentTurn === 'playerOne' ? 0 : 1;
        const cloneGameData = structuredClone(gameData);
        if (cloneGameData.secondaries[playerIndex].turnSecondaries.length) {
            const turn = cloneGameData.secondaries[playerIndex].turnSecondaries.length - 1;
            console.log(turn)
            cloneGameData.secondaries[playerIndex].turnSecondaries[turn][index].achieved = cloneGameData.secondaries[playerIndex].turnSecondaries.length;
            console.log(cloneGameData)
            
            setGameData({
                ...cloneGameData,
            });    
        }
    };

    const discardSecondary = (index) => {
        const playerIndex = gameData.currentTurn === 'playerOne' ? 0 : 1;
        const cloneGameData = structuredClone(gameData);
        if (cloneGameData.secondaries[playerIndex].turnSecondaries.length) {
            const turn = cloneGameData.secondaries[playerIndex].turnSecondaries.length - 1;
            cloneGameData.secondaries[playerIndex].turnSecondaries[turn][index].discard = true;
            setGameData({
                ...cloneGameData,
            });    
        }   
    };

    const endTurn = () => {
        console.log(gameData)
        const cloneGameData = structuredClone(gameData);
        if (cloneGameData.currentTurn === 'playerOne') {
            cloneGameData.currentTurn = 'playerTwo';
        } else {
            cloneGameData.currentTurn = 'playerOne';
        };
        console.log(cloneGameData);
        setGameData({
            ...cloneGameData,
            displaySecondaries: [{}, {}]
        })
        back(12);
    };


    return (
        <div className={`${styles.HomeContainer} min-h-screen` }>
            <PlayerStats {...playerOne} secondaries={gameData.secondaries[0].turnSecondaries} location="left" attacker={attacker} currentTurn={gameData.currentTurn} />
            <PlayerStats {...playerTwo} secondaries={gameData.secondaries[1].turnSecondaries} location="right" attacker={attacker} currentTurn={gameData.currentTurn} />
            {step === 1 &&
                <PlayerContainer 
                    handleSubmit={handlePlayerCreation}
                />
            }
            {step === 2 &&
                <PlayerContainer 
                    handleSubmit={handlePlayerCreation}
                />
            }
            {step >= 3 &&
                <Game 
                    achieveSecondary={achieveSecondary}
                    back={back}
                    currentStep={step}
                    disableRedraw={disableRedraw}
                    discardSecondary={discardSecondary}
                    endTurn={endTurn}
                    forward={forward}
                    gameData={gameData}
                    generateDeployment={generateDeployment}
                    generatePrimary={generatePrimary}
                    generateNewSecondary={generateNewSecondary}
                    generateSecondaries={generateSecondaries}
                    generateSpecial={generateSpecial}
                    keepSecondaries={keepSecondaries}
                    playerOne={playerOne}
                    playerTwo={playerTwo}
                    setAttacker={handleAttacker}   
                    startGame={startGame}
                />
            }
        </div>
    )

};

export default Home;
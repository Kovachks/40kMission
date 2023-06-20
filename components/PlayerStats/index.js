import styles from './PlayerStats.module.css';

const PlayerStats = props => {
    const {
        attacker,
        cp,
        currentTurn,
        faction,
        location,
        name,
        player,
        primaryPoints,
        secondaries,
        secondaryPoints
    } = props;

    const isCurrentTurn = currentTurn === player;
    const isAttacker = attacker === player;
    const styleBlock = {
        [location]: 0
    };

    return (
        <div>
            <div className={`${styles.PlayerStatsContainer} ${isCurrentTurn ? `${styles.CurrentTurn}` : ''}`} style={{...styleBlock}}>
                <p className={styles.PlayerTitle}>Player {location === 'left' ? 'One' : 'Two'}</p>
                {attacker &&
                    <p className={isAttacker ? styles.Attacker : styles.Defender}>{isAttacker ? 'Attacker' : 'Defender'}</p>        
                }
                <p>Name: {name}</p>
                <p>Faction: {faction}</p>
                <p>CP: {cp}</p>
                <p>Primary Points: {primaryPoints}</p>
                <p>Seconary Points: {secondaryPoints}</p>
            </div>
            {secondaries && secondaries.length > 0 && location === 'left' &&
            <div className={`${styles.AllSecondaries} ${styles.LeftAllSecondaries}`}>
                {secondaries && secondaries.map((secondary, index) => {
                    console.log(index + 1);
                    console.log(secondary[0].achieved)
                    return (
                        <div className={styles.SecondariesContainer}>
                            <p className={styles.TurnMarker}>Turn {index + 1}</p>
                            <div className={styles.SecondaryContainer}>
                            <div style={{color: secondary[0].achieved && secondary[0].achieved === index + 1 ? 'green' : 'black'}}>{secondary[0].name}</div>
                            </div>
                            <div className={styles.SecondaryContainer}>
                            <div style={{color: secondary[1].achieved && secondary[0].achieved === index + 1 ? 'green' : 'black'}}>{secondary[1].name}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
            }
            {secondaries && secondaries.length > 0 && location === 'right' &&
            <div className={`${styles.AllSecondaries} ${styles.RightAllSecondaries}`}>
                {secondaries && secondaries.map((secondary, index) => {
                    console.log(secondary)
                    return (
                        <div className={styles.SecondariesContainer}>
                            <p className={styles.TurnMarker}>Turn {index + 1}</p>
                            <div className={styles.SecondaryContainer}>
                                <div style={{color: secondary[0].achieved && secondary[0].achieved === index + 1 ? 'green' : 'black'}}>{secondary[0].name}</div>
                            </div>
                            <div className={styles.SecondaryContainer}>
                                <div style={{color: secondary[1].achieved ? 'green' : 'black'}}>{secondary[1].name}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
            }
        </div>
    )
};

export default PlayerStats
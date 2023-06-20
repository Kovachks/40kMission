import { useState } from 'react';
import Button from '../Button';
import Input from '../Input';
import styles from './PlayerContainer.module.css';

const PlayerContainer = props => {
    const { handleSubmit } = props;
    const [playerDetails, setPlayerDetails] = useState({
        faction: '',
        name: ''
    });

    const handeDetailChange = e => {
        const {name, value} = e.target;

        setPlayerDetails({
            ...playerDetails,
            [name]: value
        });
    };
    
    return (
        <div className={styles.PlayerContainer}>
            <div className={styles.PlayerInputContainer}>
                <label>Name: </label>
                <input
                    name={'name'}
                    placeholder='Name'
                    value={playerDetails.name}
                    onChange={e => handeDetailChange(e)}
                />
            </div>
            <div className={styles.PlayerInputContainer}>
                <label>Faction: </label>
                <input
                    name={'faction'}
                    placeholder='Faction'
                    value={playerDetails.faction}
                    onChange={e => handeDetailChange(e)}
                />
            </div>
            <Button 
                handleSubmit={() => handleSubmit(playerDetails)}
                text='Continue'
            />
        </div>
    )
};

export default PlayerContainer
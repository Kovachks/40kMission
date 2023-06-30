import { useState } from 'react';
import Button from '../Button';
import styles from './PlayerContainer.module.css';
import factions from '@/schemas/factions';

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
                <select className={styles.FactionSelect} name="faction" onChange={e => handeDetailChange(e)} style={{width: '100%'}}>
                    <option disabled="true">Select A Faction</option>
                    {factions.map((faction, index) => <option key={index} data-id={faction}>{faction}</option>)}
                </select>
            </div>
            <Button 
                handleSubmit={() => handleSubmit(playerDetails)}
                text='Continue'
            />
        </div>
    )
};

export default PlayerContainer
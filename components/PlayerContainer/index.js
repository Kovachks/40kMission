import { useState } from 'react';
import Button from '../Button';
import styles from './PlayerContainer.module.css';
import factions from '@/schemas/factions';
import { Box, MenuItem, Select, TextField, InputLabel } from '@mui/material';

const PlayerContainer = (props) => {
  const { handleSubmit } = props;
  const [playerDetails, setPlayerDetails] = useState({
    faction: '',
    name: '',
  });

  const handeDetailChange = (e) => {
    const { name, value } = e.target;

    setPlayerDetails({
      ...playerDetails,
      [name]: value,
    });
  };

  return (
    <Box className="primary-box text-center p-3 pt-5 ">
      <TextField
        className="mb-3 mr-3 md:mr-0"
        variant="outlined"
        name={'name'}
        label="Name"
        value={playerDetails.name}
        onChange={(e) => handeDetailChange(e)}
      />
      <div className={styles.PlayerInputContainer}>
        <InputLabel id="faction-select-label">Faction</InputLabel>
        <Select
          labelId="faction-select-label"
          className={styles.FactionSelect}
          name="faction"
          label="Faction"
          onChange={(e) => handeDetailChange(e)}
          style={{ width: '100%' }}
        >
          <MenuItem disabled selected>
            Select A Faction
          </MenuItem>
          {factions.map((faction, index) => (
            <MenuItem key={index} id={faction} value={faction}>
              {faction}
            </MenuItem>
          ))}
        </Select>
      </div>
      <Button
        disabled={!playerDetails.faction || !playerDetails.name}
        handleSubmit={() => handleSubmit(playerDetails)}
        text="Continue"
      />
    </Box>
  );
};

export default PlayerContainer;

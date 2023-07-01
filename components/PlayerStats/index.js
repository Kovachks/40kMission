import { Grid } from '@mui/material';
import classNames from 'classnames';

const PlayerStats = (props) => {
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
    secondaryPoints,
  } = props;

  const isCurrentTurn = currentTurn === player;
  const isAttacker = attacker === player;

  const containerClasses = classNames(
    'primary-box p-3',
    {
      'border-red-500': isCurrentTurn,
    }
  );

  const secondarisBorder = classNames('border-solid border-1 border-black');

  return (
    <>
      <div className={containerClasses}>
        <p className="font-bold text-center underline">
          Player {location === 'left' ? 'One' : 'Two'}
        </p>
        {attacker && (
          <p
            className={
              isAttacker ? 'decoration-red-500' : 'decoration-green-500'
            }
          >
            {isAttacker ? 'Attacker' : 'Defender'}
          </p>
        )}
        <p>Name: {name}</p>
        <p>Faction: {faction}</p>
        <p>CP: {cp}</p>
        <p>Primary Points: {primaryPoints}</p>
        <p>Seconary Points: {secondaryPoints}</p>
      </div>
      {secondaries && secondaries.length > 0 && location === 'left' && (
        <div className="ml-3 top-20">
          {secondaries &&
            secondaries.map((secondary, index) => {
              return (
                <div key={index} className={secondarisBorder}>
                  <p className="underline">Turn {index + 1}</p>
                  <div className={secondarisBorder}>
                    <div
                      style={{
                        color:
                          secondary[0].achieved &&
                          secondary[0].achieved === index + 1
                            ? 'green'
                            : 'black',
                      }}
                    >
                      {secondary[0].name}
                    </div>
                  </div>
                  <div className={secondarisBorder}>
                    <div
                      style={{
                        color:
                          secondary[1].achieved &&
                          secondary[0].achieved === index + 1
                            ? 'green'
                            : 'black',
                      }}
                    >
                      {secondary[1].name}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      )}
      {secondaries && secondaries.length > 0 && location === 'right' && (
        <div className="mr-3 top-20">
          {secondaries &&
            secondaries.map((secondary, index) => {
              return (
                <div key={index} className={secondarisBorder}>
                  <p className="underline">Turn {index + 1}</p>
                  <div className={secondarisBorder}>
                    <div
                      style={{
                        color:
                          secondary[0].achieved &&
                          secondary[0].achieved === index + 1
                            ? 'green'
                            : 'black',
                      }}
                    >
                      {secondary[0].name}
                    </div>
                  </div>
                  <div className={secondarisBorder}>
                    <div
                      style={{
                        color: secondary[1].achieved ? 'green' : 'black',
                      }}
                    >
                      {secondary[1].name}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </>
  );
};

export default PlayerStats;

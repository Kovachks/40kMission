import Image from 'next/image';
import Button from '../Button';
import styles from './GamePrompt.module.css';

const GamePrompt = props => {
    const {
        deploymentImage,
        description,
        disableButton,
        longDescription,
        longDescriptionTitle,
        mission1,
        mission2,
        button1,
        button2,
        button3,
        button4,
        button5
    } = props;

    return (
        <div className={styles.GamePromptContainer}>
            <p className={styles.Description}>{description}</p>
            {longDescriptionTitle &&
            <div className={styles.Description}>
                {longDescriptionTitle}
            </div>
            }
            {longDescription &&
            <div className={styles.LongDescription}>
                {longDescription}
            </div>
            }
            {mission1 &&
            <div className={styles.Mission1}>
                <div className={styles.Description}>{mission1.name}</div>
                <div className={styles.longDescription}>{mission1.description}</div>
            </div>
            }
            {mission2 &&
            <div className={styles.Mission2}>
                <div className={styles.Description}>{mission2.name}</div>
                <div className={styles.longDescription}>{mission2.description}</div>
            </div>
            }
            {deploymentImage &&
            <div className={styles.NextImageContainer}>
                <Image 
                    className={styles.DeploymentImage}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                    src={deploymentImage}
                />
            </div>
            }
            {button1 && !disableButton &&
            <Button
                text={button1.text}
                handleSubmit={() => button1.func()}
            />
            }
            {button2 && !disableButton &&
            <Button
                text={button2.text}
                handleSubmit={() => button2.func()}
            />
            }
            {button3 && !disableButton &&
            <Button
                text={button3.text}
                handleSubmit={() => button3.func()}
            />
            }
            {button4 && !disableButton &&
            <Button
                text={button4.text}
                handleSubmit={() => button4.func()}
            />
            }
            {button5 && !disableButton &&
            <Button
                text={button5.text}
                handleSubmit={() => button5.func()}
            />
            }
        </div>
    )
};

export default GamePrompt;
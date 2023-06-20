import styles from './Button.module.css';

const Button = props => {
    const {
        handleSubmit,
        text
    } = props;

    return (
        <button className={styles.Button} onClick={() => handleSubmit()} >{text}</button>
    )
};

export default Button;
import styles from './Button.module.css';

const Button = props => {
    const {
        disabled,
        handleSubmit,
        text
    } = props;

    return (
        <button disabled={disabled} className={`${styles.Button} ${disabled ? styles.Disabled : ''}`} onClick={() => handleSubmit()} >{text}</button>
    )
};

export default Button;
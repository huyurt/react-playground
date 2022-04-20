import styles from './ErrorModal.module.css';
import Button from "./Button";
import Card from "./Card";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={props.onConfirm}/>
      <Card className={styles.modal}>
        <div className={styles.header}>
          <h2>{props.title}</h2>
        </div>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <div className={styles.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </div>
      </Card>
    </div>
  );
};

export default ErrorModal;

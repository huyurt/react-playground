import React from "react";
import ReactDOM from "react-dom";
import styles from './ErrorModal.module.css';
import Button from "./Button";
import Card from "./Card";

const ErrorModal = (props) => {

  const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={props.onConfirm}/>;
  };

  const ModalOverlay = (props) => {
    return (
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
    );
  }

  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm}/>, document.getElementById('backdrop-root'))}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />, document.getElementById('overlay-root'))}
    </React.Fragment>
  );
};

export default ErrorModal;

import { Fragment } from "react";
import { createRoot } from 'react-dom/client';
import classes from './Modal.module.css';

const Backdrop = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onClose}/>
  )
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
}

const overlaysElement = document.getElementById('overlays');
const root = createRoot(overlaysElement);

const Modal = (props) => {
  return (
    <Fragment>
      {root.render(<Backdrop onClose={props.onClose}/>)}
      {root.render(<ModalOverlay>{props.children}</ModalOverlay>)}
    </Fragment>
  );
}

export default Modal;

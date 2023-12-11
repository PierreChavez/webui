import React from 'react';
import styles from './Modal.module.css';
import Overlay from '../../atoms/Overlay/Overlay';
import ModalHeader from '../../molecules/ModalHeader/ModalHeader';

const Modal = () => (
  <Overlay>
    <div className={styles.Modal}>
      <ModalHeader title={title} onClose={onClose} />
      {children}
    </div>
  </Overlay>
);

export default Modal;

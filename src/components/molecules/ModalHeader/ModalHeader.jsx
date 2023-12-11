import React from 'react';
import styles from './ModalHeader.module.css';
import Text from '../../atoms/Text/Text';
import Button from '../../atoms/Button/Button';

const ModalHeader = ({ title, onClose }) => (
  <div className={styles.ModalHeader}>
    <Text>{title}</Text>
    <Button onClick={onClose}>Close</Button>
  </div>
);

export default ModalHeader;

import React from 'react';
import styles from './Input.module.css';

const Input = ({ type, id, onChange, placeholder, value }) => (
  <input className={styles.input} type={type} id={id} onChange={onChange} value={value} placeholder={placeholder} />
);
export default Input;
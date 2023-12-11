import React from 'react';
import styles from './Input.module.css';

const Input = ({ type, id, onChange, value }) => (
  <input className={styles.input} type={type} id={id} onChange={onChange} value={value} style={{ color: 'var(--primary-color)', backgroundColor: 'var(--background-color)' }}/>
);
export default Input;
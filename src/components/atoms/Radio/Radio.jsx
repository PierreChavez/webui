import React from 'react';
import styles from './Radio.module.css';

const Radio = ({ name, value, checked, onChange, children }) => (
  <label className={styles.Radio}>
    <input type="radio" name={name} value={value} checked={checked} onChange={onChange} />
    {children}
  </label>
);

export default Radio;

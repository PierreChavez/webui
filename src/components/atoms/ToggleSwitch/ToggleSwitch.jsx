import React from 'react';
import styles from './ToggleSwitch.module.css';

const ToggleSwitch = ({ checked, onChange=((checked=false)=>{console.log('is checked:', checked)} )}) => (
  <label className={styles.ToggleSwitch}>
    <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} />
    <span className={styles.slider + ' ' + styles.round}></span>
  </label>
);

export default ToggleSwitch;

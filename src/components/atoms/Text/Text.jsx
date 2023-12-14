import React from 'react';
import styles from './Text.module.css';

const Text = ({ children, style, type='Default' }) => (
  <div className={`${styles.Text} ${styles[type]}`} style={{...style}}>
    <p>{children}</p>
  </div>
);

export default Text;

import React from 'react';
import styles from './Text.module.css';

const Text = ({ children }) => (
  <div className={styles.Text}>
    <p>{children}</p>
  </div>
);

export default Text;

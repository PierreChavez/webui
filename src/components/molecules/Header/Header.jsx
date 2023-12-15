import React from 'react';
import styles from './Header.module.css';

const Header = ({ title, children}) => (
  <header className={styles.Header}>
    <h1>{title}</h1>
    {children}
  </header>
);

export default Header;

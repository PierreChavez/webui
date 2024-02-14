import React from 'react';
import styles from './Header.module.css';

const Header = ({ children}) => (
  <header className={styles.Header}>
    {children}
  </header>
);

export default Header;

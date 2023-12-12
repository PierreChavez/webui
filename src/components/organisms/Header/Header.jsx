// Header.js
import React from 'react';
import styles from './Header.module.css';

const Header = ({ title, children }) => (
  <header className={styles.header} style={{ color: 'var(--primary-color)', backgroundColor: 'var(--secondary-color)' }}>
    <div>
      <h1>{title}</h1>
    </div>
    {
      children
    }
  </header>
);

export default Header;
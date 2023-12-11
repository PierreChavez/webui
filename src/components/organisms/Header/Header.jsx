// Header.js
import React from 'react';
import SearchForm from '../../molecules/SearchForm/SearchForm';
import styles from './Header.module.css';

const Header = ({ onSearchSubmit }) => (
  <header className={styles.header} style={{ color: 'var(--primary-color)', backgroundColor: 'var(--secondary-color)' }}>
    <h1>My Website</h1>
  </header>
);

export default Header;
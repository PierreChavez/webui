import React from 'react';
import styles from './Menu.module.css';

const Menu = ({children}) => (
  <ul className={styles.Menu}>
    {children}
  </ul>
);

export default Menu;

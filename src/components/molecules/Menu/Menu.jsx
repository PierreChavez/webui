import React from 'react';
import styles from './Menu.module.css';

const Menu = ({mode, children}) => (
  <ul className={`${styles.Menu} ${styles[mode]}`}>
    {children}
  </ul>
);

export default Menu;

import React from 'react';
import styles from './MenuItem.module.css';

const MenuItem = ({children}) => (
  <li className={styles.MenuItem} tabIndex="0">
    {children}
  </li>
);

export default MenuItem;

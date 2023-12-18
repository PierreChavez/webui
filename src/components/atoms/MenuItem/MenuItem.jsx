import React from 'react';
import styles from './MenuItem.module.css';

const MenuItem = ({children}) => (
  <li className={styles.MenuItem}>
    {children}
  </li>
);

export default MenuItem;

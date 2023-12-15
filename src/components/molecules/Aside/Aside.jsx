import React from 'react';
import styles from './Aside.module.css';

const Aside = ({children}) => (
  <aside className={styles.Aside}>
    {children}
  </aside>
);

export default Aside;

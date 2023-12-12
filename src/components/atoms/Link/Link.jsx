import React from 'react';
import styles from './Link.module.css';

const Link = ({ href, children }) => (
  <a href={href} className={styles.Link}>{children}</a>
);

export default Link;

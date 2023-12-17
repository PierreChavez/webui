import React from 'react';
import styles from './Link.module.css';

const Link = ({ href, children, style }) => (
  <a href={href} className={styles.Link} style={{...style}}>{children}</a>
);

export default Link;

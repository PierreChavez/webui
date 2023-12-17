import React from 'react';
import Link from '../Link/Link';
import styles from './BreadcrumbItem.module.css';

const BreadcrumbItem = ({ children, href }) => (
  <span className={styles.BreadcrumbItem}>
  <Link href={href} style={{pointerevents: 'none' }}>{children}</Link>
</span>
);

export default BreadcrumbItem;

import React from 'react';
import BreadcrumbItem from '../../atoms/BreadcrumbItem/BreadcrumbItem';
import styles from './Breadcrumb.module.css';

const Breadcrumb = ({ items, separator }) => (
  <div className={styles.Breadcrumb}>
    {items.map((item, index) => (
      <>
        {index !== 0 && <span className={styles.separator}>{separator}</span> }
        <BreadcrumbItem key={index} href={item.href}>
          {item.text}
        </BreadcrumbItem>
      </>
    ))}
  </div>
);

export default Breadcrumb;

import React, { Children } from 'react';
import styles from './Breadcrumb.module.css';

const Breadcrumb = ({ items, separator, children }) => {

  const childrenWithSpacer = Children.toArray(children).reduce((acc, child, index) => {
    if (index !== 0) {
      acc.push(<span className={styles.separator} key={`spacer-${index}`}>{separator}</span>);
    }
    acc.push(child);
    return acc;
  }, []);

  return (<div className={styles.Breadcrumb}>
    {childrenWithSpacer}
  </div>);
};

export default Breadcrumb;

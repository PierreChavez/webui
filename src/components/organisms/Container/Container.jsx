import React, { Children } from 'react';
import styles from './Container.module.css';

const Container = ({ children }) => {

  const asideWidth = Children.toArray(children).find(child => {
   return child.type.name === 'Aside';
  })?.props.width || false;

  return (<div className={styles.Container} style={{'--aside-width': asideWidth }} >
    {children}
  </div>);
};

export default Container;

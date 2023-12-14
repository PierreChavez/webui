import React, { Children, cloneElement } from 'react';
import styles from './Stack.module.css';

const Stack = ({ gap, direction, wrap, spacer,fill, alignItems = 'center', children }) => {

  const childrenWithSpacer = Children.toArray(children).reduce((acc, child, index) => {
    if (index !== 0) {
      acc.push(<span className={styles.spacer} key={`spacer-${index}`} style={fill && { width: '100%', textAlign: 'center'}} >{spacer}</span>);
    }
    fill ? acc.push(cloneElement(child, { style: { width: '100%', ...child.props.style } })) :
    acc.push(child);
    return acc;
  }, []);


  return (
    <div className={styles.Stack} style={{ '--gap': gap, 'flexDirection': direction, 'flexWrap': (wrap ? 'wrap' : 'nowrap'), 'alignItems': alignItems }}>
      {childrenWithSpacer}
    </div>
  );
};

export default Stack;

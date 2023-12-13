import React from 'react';
import styles from './Stack.module.css';

const Stack = ({ gap, direction, wrap, spacer, alignItems = 'center', fill, children }) => {

  const childrenWithSpacer = React.Children.toArray(children).reduce((acc, child, index) => {
    if (index !== 0) {
      spacer && acc.push(<span key={`spacer-${index}`}>{spacer}</span>);
    }

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

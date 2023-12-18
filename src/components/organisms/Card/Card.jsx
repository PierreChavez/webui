import React from 'react';
import CardHeader from '../../molecules/CardHeader/CardHeader';
import styles from './Card.module.css';

const Card = ({ title, thumbnail, children, style }) => (
  <div className={styles.Card} style={{ ...style}}>
    {(title || thumbnail) && <CardHeader title={title} thumbnail={thumbnail} />}
    <div className={styles.CardBody}>
      {children}
    </div>
  </div>
);

export default Card;

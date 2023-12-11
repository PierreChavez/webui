import React from 'react';
import styles from './Card.module.css';
import Text from '../../atoms/Text/Text';
import CardHeader from '../../molecules/CardHeader/CardHeader';

const Card = ({ title, thumbnail, children }) => (
  <div className={styles.Card}>
    {(title || thumbnail) && <CardHeader title={title} thumbnail={thumbnail} />}
    <div className={styles.CardBody}>
      {children}
    </div>
  </div>
);

export default Card;

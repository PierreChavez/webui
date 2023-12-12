import React from 'react';
import styles from './Card.module.css';
import CardHeader from '../../molecules/CardHeader/CardHeader';

const Card = ({ title, thumbnail, children }) => (
  <div className={styles.Card} style={{ color: 'var(--primary-color)', backgroundColor: 'var(--secondary-color)', borderColor: 'var(--border-color)' }}>
    {(title || thumbnail) && <CardHeader title={title} thumbnail={thumbnail} />}
    <div className={styles.CardBody}>
      {children}
    </div>
  </div>
);

export default Card;

import React from 'react';
import styles from './CardHeader.module.css';
import Text from '../../atoms/Text/Text';
import Image from '../../atoms/Image/Image';

const CardHeader = ({ title, thumbnail }) => (
  <div className={styles.CardHeader}>
    {title && <Text>{title}</Text>}
    {thumbnail && <Image src={thumbnail} alt={title} />}
  </div>
);

export default CardHeader;

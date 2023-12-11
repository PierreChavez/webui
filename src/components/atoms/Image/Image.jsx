import React from 'react';
import styles from './Image.module.css';

const Image = ({ src, alt }) => (
  <div className={styles.Image}>
    <img src={src} alt={alt} />
  </div>
);

export default Image;

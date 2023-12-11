import React from 'react';
import Header from '../../organisms/Header/Header';
import LoginModal from '../../organisms/LoginModal/LoginModal';
import styles from './PageTemplate.module.css';

const PageTemplate = ({ onSearchSubmit, children }) => (
  <div className={styles.pageTemplate} style={{ color: 'var(--primary-color)', backgroundColor: 'var(--background-color)' }}>
    <Header onSearchSubmit={onSearchSubmit} />
    <main>{children}</main>
  </div>
);

export default PageTemplate;
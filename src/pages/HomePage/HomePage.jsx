import React from 'react';
import PageTemplate from '../../components/templates/PageTemplate/PageTemplate';
import styles from './HomePage.module.css';

const HomePage = ({ onSearchSubmit }) => (
<div className={styles.homePage}>
  <PageTemplate onSearchSubmit={onSearchSubmit}>
    <h2>Welcome to our website!</h2>
    <p>This is the home page.</p>
  </PageTemplate>
  </div>
);

export default HomePage;

import React from 'react';
import PageTemplate from '../../components/templates/PageTemplate/PageTemplate';
import styles from './HomePage.module.css';
import Card from '../../components/organisms/Card/Card';
import LoginModal from '../../components/organisms/LoginModal/LoginModal';

const HomePage = ({ onSearchSubmit }) => (
  <div className={styles.homePage}>
    <PageTemplate onSearchSubmit={onSearchSubmit}>
      <h2>Welcome to our website!</h2>
      <p>This is the home page.</p>
      <Card title="Title">
        <p>Card Content</p>
      </Card>

    </PageTemplate>
  </div>
);

export default HomePage;

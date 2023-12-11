import React from 'react';
import styles from './LoginPage.module.scss';
import LoginModal from './organisms/LoginModal';
import PageTemplate from './templates/PageTemplate';

const LoginPage = ({ onSearchSubmit, onLoginSubmit }) => (
  <div className={styles.loginPage}>
  <PageTemplate onSearchSubmit={onSearchSubmit}>
    <LoginModal onLoginSubmit={onLoginSubmit} />
  </PageTemplate>
  </div>
);

export default LoginPage;
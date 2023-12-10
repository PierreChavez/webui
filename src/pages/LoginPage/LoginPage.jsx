import React from 'react';
import LoginModal from './organisms/LoginModal';
import PageTemplate from './templates/PageTemplate';

const LoginPage = ({ onSearchSubmit, onLoginSubmit }) => (
  <PageTemplate onSearchSubmit={onSearchSubmit}>
    <LoginModal onLoginSubmit={onLoginSubmit} />
  </PageTemplate>
);

export default LoginPage;
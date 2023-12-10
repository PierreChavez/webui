import React from 'react';
import LoginForm from './molecules/LoginForm';

const LoginModal = ({ onLoginSubmit }) => (
  <div>
    <h2>Login</h2>
    <LoginForm onSubmit={onLoginSubmit} />
  </div>
);

export default LoginModal;
import React from 'react';
import LoginForm from '../../molecules/LoginForm/LoginForm';
import styles from './LoginModal.module.css';

const LoginModal = ({ onLoginSubmit }) => (
  <div className={styles.loginModal} style={{ color: 'var(--primary-color)', backgroundColor: 'var(--background-color)' }}>
    <h2>Login</h2>
    <LoginForm onSubmit={onLoginSubmit} />
  </div>
);

export default LoginModal;
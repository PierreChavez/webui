import React from 'react';
import PageTemplate from '../../components/templates/PageTemplate/PageTemplate';

const HomePage = ({ onSearchSubmit }) => (
  <PageTemplate onSearchSubmit={onSearchSubmit}>
    <h2>Welcome to our website!</h2>
    <p>This is the home page.</p>
  </PageTemplate>
);

export default HomePage;

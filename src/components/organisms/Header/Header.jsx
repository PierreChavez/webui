// Header.js
import React from 'react';
import SearchForm from '../../molecules/SearchForm/SearchForm';

const Header = ({ onSearchSubmit }) => (
  <header>
    <h1>My Website</h1>
    <SearchForm onSubmit={onSearchSubmit} />
  </header>
);

export default Header;
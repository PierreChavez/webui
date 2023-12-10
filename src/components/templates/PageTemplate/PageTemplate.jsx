import React from 'react';
import Header from '../../organisms/Header/Header';

const PageTemplate = ({ onSearchSubmit, children }) => (
  <div>
    <Header onSearchSubmit={onSearchSubmit} />
    <main>{children}</main>
  </div>
);

export default PageTemplate;
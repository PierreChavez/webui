import React from 'react';
import HomePage from './pages/HomePage/HomePage';

const handleSearchSubmit = (searchTerm) => {
  console.log(`Search submit: ${searchTerm}`);
};

function App() {
  return (
    <div className="App">
      <HomePage onSearchSubmit={handleSearchSubmit} />
    </div>
  );
}

export default App;
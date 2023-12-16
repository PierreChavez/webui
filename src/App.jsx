import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import ThemeProvider from './providers/ThemeProvider';
import './themes/themes.module.css';

function App() {

  return (
    <div className="App fullHeight" style={{ color: 'var(--primary-color)', backgroundColor: 'var(--background-color)' }}>
      <ThemeProvider>
        <HomePage />
      </ThemeProvider>
    </div>
  );
}

export default App;
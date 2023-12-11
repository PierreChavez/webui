import React, { useEffect, useState } from 'react';
import HomePage from './pages/HomePage/HomePage';
import ThemeSwitcher from './themes/ThemeSwitcher';
import './themes/themes.module.css';


const handleSearchSubmit = (searchTerm) => {
  console.log(`Search submit: ${searchTerm}`);
};


function App() {

  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const handleToggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="App fullHeight" style={{ color: 'var(--primary-color)', backgroundColor: 'var(--background-color)' }}>
            <ThemeSwitcher theme={theme} onToggle={handleToggle} />
      <HomePage onSearchSubmit={handleSearchSubmit} />
    </div>
  );
}

export default App;
import React, { useEffect, useState } from 'react';
import HomePage from './pages/HomePage/HomePage';
import ThemeSwitcher from './themes/ThemeSwitcher';
import './themes/themes.module.css';


const handleSearchSubmit = (searchTerm) => {
  console.log(`Search submit: ${searchTerm}`);
};


function App() {

  const [theme, setTheme] = useState('light');
  const [isChecked, setIsChecked] = useState(false);


  useEffect(() => {
    handleToggle(isChecked);
    document.body.setAttribute('data-theme', theme);
    console.log(`Theme switched to ${theme}`);
  }, [theme, isChecked]);

  const handleToggle = (checked) => {
    setTheme(checked ? 'dark' : 'light');
    setIsChecked(checked);
  };

  return (
    <div className="App fullHeight" style={{ color: 'var(--primary-color)', backgroundColor: 'var(--background-color)' }}>
      <ThemeSwitcher isChecked={isChecked} theme={theme} onToggle={handleToggle} />
      <HomePage onSearchSubmit={handleSearchSubmit} />
    </div>
  );
}

export default App;
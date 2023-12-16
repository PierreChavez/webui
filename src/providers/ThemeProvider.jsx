import React, { useEffect, useState } from 'react';
import ThemeContext from '../contexts/ThemeContext';

const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [theme, setTheme] = useState('light');

    const toggleTheme = (checked) => {
        setTheme(checked ? 'dark' : 'light');
        setIsDarkMode(checked);
    };

    useEffect(() => {
        toggleTheme(isDarkMode)
        document.body.setAttribute('data-theme', theme);
        console.log(`Theme switched to ${theme}`);
    }, [theme, isDarkMode]);

    return (
        <ThemeContext.Provider value={{ theme,isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
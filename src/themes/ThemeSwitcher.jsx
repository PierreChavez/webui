import React, { useContext } from 'react';
import ToggleSwitch from '../components/atoms/ToggleSwitch/ToggleSwitch';
import ThemeContext from '../contexts/ThemeContext';

const ThemeSwitcher = () => {
    const { isDarkMode,theme, toggleTheme } = useContext(ThemeContext);

    return (<div>
        <span>Dark mode: </span>
        <ToggleSwitch checked={isDarkMode} theme={theme} onChange={toggleTheme} />
    </div>);
};

export default ThemeSwitcher;
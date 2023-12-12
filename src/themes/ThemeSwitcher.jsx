import React from 'react';
import ToggleSwitch from '../components/atoms/ToggleSwitch/ToggleSwitch';

const ThemeSwitcher = ({ theme, onToggle }) => (
    <div>
        <button onClick={onToggle}>
            Switch to {theme === 'light' ? 'dark' : 'light'} theme
        </button>
        <span>Dark mode: </span>
        <ToggleSwitch checked={theme === 'dark'} onChange={onToggle} />
    </div>
);

export default ThemeSwitcher;
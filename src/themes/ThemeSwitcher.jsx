import React from 'react';
import ToggleSwitch from '../components/atoms/ToggleSwitch/ToggleSwitch';

const ThemeSwitcher = ({ theme,isChecked, onToggle }) => (
    <div>
        <button onClick={onToggle}>
            Switch to {theme} theme
        </button>
        <span>Dark mode: </span>
        <ToggleSwitch checked={isChecked} onChange={onToggle} />
    </div>
);

export default ThemeSwitcher;
import React, { useState } from 'react';

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <header className="header-card card">
      <h1>Samantha Nicole E. Bogo</h1>
      <h2>IT Student | Web Systems and Technologies</h2>
      <div className="toggle-container">
        <button id="themeToggle" onClick={toggleTheme}>
          Dark/Light Mode
        </button>
      </div>
    </header>
  );
}
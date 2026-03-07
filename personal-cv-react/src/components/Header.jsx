function Header({ darkMode, onToggleDarkMode }) {
  return (
    <header>
      <h1>Samantha Nicole E. Bogo</h1>
      <p>IT | WEB SYSTEM</p>
      <div className="toggle-container">
        <button type="button" onClick={onToggleDarkMode}>
          {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      </div>
    </header>
  );
}

export default Header;


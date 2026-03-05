import { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <Header />
      
      {/* Toggle button container */}
      <div className="toggle-container">
        <button onClick={() => setDarkMode(!darkMode)}>
          Toggle Dark Mode
        </button>
      </div>

      <main>
        <About />
        <Education />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;

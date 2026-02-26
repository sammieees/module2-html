import { useState } from 'react';

function Skills() {
  const [visible, setVisible] = useState(true);

  return (
    <section>
      <button onClick={() => setVisible(!visible)}>
        {visible ? 'Hide Skills' : 'Show Skills'}
      </button>
      {visible && (
        <section id="skillsSection">
          <h2>Skills</h2>
          <ul>
            <li>HTML</li>
            <li>css</li>
            <li>JavaScript</li>
          </ul>
        </section>
      )}
    </section>
  );
}

export default Skills;


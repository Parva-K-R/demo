import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleClick = () => {
    setGreeting(`Hi ${name}!`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome!</h1>
        <input 
          type="text" 
          placeholder="Enter your name" 
          value={name}
          onChange={handleChange} 
          className="input"
        />
        <button onClick={handleClick} className="button">Greet</button>
        {greeting && <p className="greeting">{greeting}</p>}
      </header>
    </div>
  );
}

export default App;

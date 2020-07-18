import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <header className="App-header">

        <img src={logo} className={show ? 'App-logo animation-paused' : 'App-logo'} alt="logo" />
        <button onClick={() => setShow(v => !v)}>{show ? 'Stop Animation' : 'Stop Animation'}</button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

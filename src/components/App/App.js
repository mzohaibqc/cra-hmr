import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { toggleAnimation } from 'actions/app.actions';
import logo from './logo.svg';
import './App.css';

function App() {
  const animated = useSelector((state) => state.app.animated);
  const dispatch = useDispatch();

  const toggle = useCallback(() => {
    dispatch(toggleAnimation());
  }, [dispatch]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={animated ? 'App-logo' : 'App-logo animation-paused'} alt="logo" />
        <button type="button" onClick={toggle}>
          {animated ? 'Stop Animation' : 'Start Animation'}
        </button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

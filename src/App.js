import React from 'react';
import logo from './logo.svg';
import './App.css';
import Texto from "./Texto";

function App() {

  const mensajes = ["Lorem ipsum", "Dolor", "Sit amet"];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {
            mensajes.map((pal,index) => <Texto key={index} msg={pal}/>)
          }
          
        </a>
      </header>
    </div>
  );
}

export default App;

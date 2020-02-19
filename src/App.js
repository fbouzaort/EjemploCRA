import React, { Component } from "react";
// import ManejoTareas from "./components/ManejoTareas";
import Login from "./components/Login";
import "./App.scss";

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>To-Do List!</p>
        </header>
        {/* <ManejoTareas /> */}
        <Login />
      </div>
    );
  }
}

export default App;

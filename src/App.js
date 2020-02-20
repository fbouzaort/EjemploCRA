import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import ManejoTareas from "./components/ManejoTareas";
import Login from './components/Login';
import PageNotFound from './components/PageNotFound';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>To-Do List!</p>
        </header>
        <Switch>
          <Route path="/tareas" component={ManejoTareas} exact/>
          <Route path="/login" component={Login} exact/>
          <Route component={PageNotFound}/>
        </Switch>
      </div>
    );
  }
}

export default App;

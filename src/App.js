import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Toggle from './components/ToggleRenderProps'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Render Props</h1>
        </header>
        <br />
        <Toggle render={ ({on,toggle})=> (
          <div className="Parent">
            <button onClick={toggle}>{on?'Hide':'Show'}</button>
            {on && <h1>Hello Ponmudi</h1>}
          </div>
         )} />
         <Toggle render={ ({on,toggle})=> (
          <div className="Parent">
            <br />
            <button onClick={toggle}>Show/Hide Message</button>
            {on && <h1>Hello world</h1>}
          </div>
         )} />
      </div>
    );
  }
}

export default App;

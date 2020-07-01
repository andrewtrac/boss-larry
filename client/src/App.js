import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Question from './components/Question';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>BOSS LARRY WANTS TO INTERVIEW YOU</h1>
        <img className="duck" src="images/rubberDuck.png"></img>
        <Question/>
      </div>
    );
  }
}

export default App;

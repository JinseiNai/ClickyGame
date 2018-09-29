import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Nav from './components/Navbar/Navbar';
import Jumbotron from './components/Jumbotron/Jumbotron';
import Game from './components/MainContent/Game';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
        <div>
          <Nav />
          <Jumbotron />
          <Game />
          <Footer />
        </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import HomePage from './components/HomePage.js'
import AboutMe from './components/AboutMe'


class App extends Component {
  render() {
    return (
      // <Router>
      //   <Switch>
      //     <Route path='/portfolio/' component={HomePage} exact />
      //     <Route path='/portfolio/AboutMe' component={AboutMe} exact />
      //   </Switch>
      // </Router>
      <Router>
      <Switch>
        <Route path='/' component={HomePage} exact />
        <Route path='/AboutMe' component={AboutMe} exact />
      </Switch>
    </Router>
      // <div className="App">
      //   <header className="App-header">
      //     <HomePage />
      //     <AnimationTest />
      //   </header>
      // </div>
    );
  }
}

export default App;

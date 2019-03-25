import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import AnimationTest from './components/AnimationTest.js'

import HomePage from './components/HomePage.js'
import AboutMe from './components/AboutMe'
import Work from './components/Work.js'
import Contact from './components/Contact'


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/portfolio/' component={HomePage} exact />
          <Route path='/portfolio/AboutMe' component={AboutMe} exact />
          <Route path='/portfolio/Work' component={Work} exact />
          <Route path='/portfolio/Contact' component={Contact} exact />
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

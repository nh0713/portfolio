import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Route, Switch} from 'react-router-dom'

import HomePage from './components/HomePage.js'
import AboutMe from './components/AboutMe'
import TextbookFriends from './components/TextbookFriends';


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' component={HomePage} exact />
          <Route path='/portfolio/#/AboutMe' component={AboutMe} exact />
          <Route path='/portfolio/#/TextbookFriends' component={TextbookFriends} exact />
        </Switch>
      </Router>
    //   <Router>
    //   <Switch>
    //     <Route path='/' component={HomePage} exact />
    //     <Route path='/AboutMe' component={AboutMe} exact />
    //     <Route path='/TextbookFriends' component={TextbookFriends} exact />
    //   </Switch>
    // </Router>
    );
  }
}

export default App;

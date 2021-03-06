import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Route, Switch} from 'react-router-dom'

import HomePage from './components/HomePage.js'
import AboutMe from './components/AboutMe'
import TextbookFriends from './components/TextbookFriends';
import Grailz from './components/Grailz';
import AttFriends from './components/AttFriends';
import FantasyFootball from './components/FantasyFootball';
import DesignPractice from './components/DesignPractice';
import AmazonCAT from './components/AmazonCAT';

class App extends Component {
  componentDidMount() {
    // Decode entities in the URL
    // Sometimes a URL like #/foo#bar will be encoded as #/foo%23bar
    // https://github.com/ReactTraining/react-router/issues/394
    window.location.hash = window.decodeURIComponent(window.location.hash);
    const scrollToAnchor = () => {
      const hashParts = window.location.hash.split('#');
      if (hashParts.length > 2) {
        const hash = hashParts.slice(-1)[0];
        document.querySelector(`#${hash}`).scrollIntoView();
      }
    };
    scrollToAnchor();
    window.onhashchange = scrollToAnchor;
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' component={HomePage} exact />
          <Route path='/AboutMe' component={AboutMe} exact />
          <Route path='/TextbookFriends' component={TextbookFriends} exact />
          <Route path='/Grailz' component={Grailz} exact />
          <Route path='/AttFriends' component={AttFriends} exact />
          <Route path='/FantasyFootball' component={FantasyFootball} exact />
          <Route path='/DesignPractice' component={DesignPractice} exact />
          <Route path='/AmazonCAT' component={AmazonCAT} exact />
        </Switch>
      </Router>
    );
  }
}

export default App;

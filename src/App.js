import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Route, Switch} from 'react-router-dom'

import HomePage from './components/HomePage.js'
import AboutMe from './components/AboutMe'
import TextbookFriends from './components/TextbookFriends';


class App extends Component {
  componentDidMount() {
    // Decode entities in the URL
    // Sometimes a URL like #/foo#bar will be encoded as #/foo%23bar
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
        </Switch>
      </Router>
    );
  }
}

export default App;

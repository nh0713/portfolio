import React, { Component } from 'react';
import '../App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class About extends Component {
    constructor(props) {
        super(props);
        this.state = {items: ['hello', 'world', 'click', 'me']};
      }

    render() {
        const items = this.state.items.map((item, i) => (
            <div key={item} onClick={() => this.handleRemove(i)}>
              {item}
            </div>
          ));

        return (
            <div>
                <header className="header">
                    {/* <a href="" class="logo">Logo</a> */}
                    <input className="menu-btn" type="checkbox" id="menu-btn" />
                    <label className="menu-icon"><span className="navicon"></span></label>
                    <ul className="menu">
                        <Link to='/'>
                            <li><a href="">Home</a></li>
                        </Link>
                        <Link to='/AboutMe'>
                            <li><a href="">About Me</a></li>
                        </Link>
                        <li><a href="/#work">Work</a></li>
                        <li><a href="/#contact">Contact</a></li>
                    </ul>
                </header>
                <div className='aboutMeAnimation'>
                    <ReactCSSTransitionGroup
                    transitionName="test"
                    transitionAppear={true}
                    transitionAppearTimeout={2000}
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                        {items[0]}
                    </ReactCSSTransitionGroup>
                </div>
                {/* <div className='aboutMeAnimation'>
                    <ReactCSSTransitionGroup
                        transitionName="test"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={300}>>
                        <h2>Hi</h2>
                    </ReactCSSTransitionGroup>
                </div> */}
            </div>
        );
    }
}

export default About;
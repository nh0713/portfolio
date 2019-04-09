import React, { Component } from 'react';
import '../App.css';

import { Container, Row, Col, Button } from "react-bootstrap";

import { Link } from 'react-router-dom'

import Footer from './Footer.js'

class AttFriends extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    
    render() {
        return (
            <div>
                <header className="header">
                    <input className="menu-btn" type="checkbox" id="menu-btn" />
                    <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
                    <ul className="menu">
                        <Link to='/'>
                            <li>Home</li>
                        </Link>
                        <Link to='/AboutMe'>
                            <li>About Me</li>
                        </Link>
                        <Link to='/#work'>
                            <li>Work</li>
                        </Link>
                        <Link to='/#contact'>
                            <li>Contact</li>
                        </Link>
                    </ul>
                </header>
                <Container fluid className="outerContainer">
                    <Container className='projectDetails'>
                        <h2>Background</h2>
                        <p>Coming Soon</p>
                        <h2>Purpose</h2>
                        <p>Coming Soon</p>
                        <h2>What I Learned</h2>
                        <p>Coming Soon</p>
                        <h2>Try AT&T Friends</h2>
                        <div className='iframeContainer'>
                            <iframe width="438" height="930" src="//invis.io/D4MZBWNG6CV" frameborder="0" allowfullscreen></iframe>
                        </div>
                    </Container>
                </Container>
            </div>
        );
    }
}

export default AttFriends
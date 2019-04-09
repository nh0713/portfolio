import React, { Component } from 'react';
import '../App.css';

import { Container, Row, Col, Button } from "react-bootstrap";

import { Link } from 'react-router-dom'

import Footer from './Footer.js'

class Grailz extends Component {
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
                        <h2>Purpose</h2>
                        <p>As a final project for an iOS Development class I took, I created a sneaker release app with 3 other people. We built the app using Swift and pulled live data from an open API (no longer open). </p>
                        <h2>My Role</h2>
                        <p>For this project, I was responsible for the sneaker release list screen and the sneaker details screen. One of our stretch goals, that was not completed due to time restrictions, was the functionality to allow users to vote on specific shoes. In the shoe details page, there are two buttons. One with a fire icon and one with trash icon. The intention behind this functionality was to allow users to vote and see which shoes would be popular. </p>
                        <h2>What I Learned</h2>
                        <p>Throughout this project, I not only learned a lot about mobile development, but I also learned about team development. Before this project, I had worked on most of my coding projects by myself. Furthermore, I learned how to interact with git in a team, and do pull requests and merges.</p>
                        <h2>Screenshots of final project</h2>
                        <p>Coming Soon</p>
                        <a href='https://github.com/skarahx/grailz'>
                        <Button>View Code</Button>
                        </a>
                    </Container>
                    <Footer />
                </Container>
            </div>
        );
    }

}

export default Grailz
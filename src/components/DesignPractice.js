import React, { Component } from 'react';
import '../App.css';

import { Container, Row, Col, Button } from "react-bootstrap";

import { Link } from 'react-router-dom'

import r8 from '../assets/r8Designmin.png';

import Footer from './Footer.js'

class Grailz extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <nav className="header">
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
                </nav>
                <Container fluid className="outerContainer">
                    {/* <Container className="projectDetails">
                        <h2>Purpose</h2>
                        <p>Text</p>
                    </Container> */}
                    <Container className='hobbiesContainer'> 
                    <div className='imgContainer'>
                        <img src={r8} alt='R8'></img>
                    </div>
                    </Container>
                </Container>
            </div>
        );
    }

}

export default Grailz
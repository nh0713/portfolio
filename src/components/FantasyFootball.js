import React, { Component } from 'react';
import '../App.css';

import { Container, Row, Col, Button } from "react-bootstrap";

import { Link } from 'react-router-dom'

import Footer from './Footer.js'
import ImgCarousel from './ImgCarousel.js'

class FantasyFootball extends Component {
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
                        <p>I created this web application as a final project for a class. The purpose of this web application was to allow people to compare stats of NFL players for Fantasy Football. Users can compare two different players and can filter both on a specific week or stat. It pulled JSON data from an API, however, unfortunately the API is no longer free. As a result, the comparison function no longer works.</p>
                        {/* <h2>What I learned</h2>
                        <p></p> */}
                    </Container>
                    <ImgCarousel />
                </Container>
            </div>
        );
    }
}

export default FantasyFootball;

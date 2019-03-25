import React, { Component } from 'react';
import '../App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

// import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Link } from 'react-router-dom'


class About extends Component {
    render() {
        return (
            <div>
                <header class="header">
                    {/* <a href="" class="logo">Logo</a> */}
                    <input class="menu-btn" type="checkbox" id="menu-btn" />
                    <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
                    <ul class="menu">
                        <Link to='/'>
                            <li><a href="">Home</a></li>
                        </Link>
                        <Link to='/AboutMe'>
                            <li><a href="">About Me</a></li>
                        </Link>
                        {/* <Link to='/Work'> */}
                            <li><a href="/#work">Work</a></li>
                        {/* </Link> */}
                        <li><a href="">Contact</a></li>
                    </ul>
                </header>
            </div>
        );
    }
}

export default About;
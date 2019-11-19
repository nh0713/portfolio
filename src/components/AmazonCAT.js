import React, { Component } from 'react';
import '../App.css';

import { Container } from "react-bootstrap";

import Footer from './Footer.js'

import { Link } from 'react-router-dom'

import ProcessBook from '../assets/ProcessBook.pdf'



class AmazonCAT extends Component {
    constructor(props) {
        super(props);
      }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <nav className="header">
                    {/* <a href="" class="logo">Logo</a> */}
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
                    <Container className="projectDetails">
                        <object className="pdf" data={ProcessBook} type="application/pdf">   </object>
                    </Container>
                </Container>
                {/* <Footer /> */}
            </div>
        );
    }
}

export default AmazonCAT;
import React, { Component } from 'react';
import '../App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom'

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
                    <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
                    <ul className="menu">
                        <Link to='/portfolio/'>
                        {/* <Link to='/'> */}
                            <li><a href="">Home</a></li>
                        </Link>
                        <Link to='/portfolio/AboutMe'>
                        {/* <Link to='/AboutMe'> */}
                            <li><a href="">About Me</a></li>
                        </Link>
                        <li><a href="/portfolio/#work">Work</a></li>
                        <li><a href="/portfolio/#contact">Contact</a></li>
                    </ul>
                </header>
                <Container fluid className='outerDiv'>
                    <Container className='aboutMeAnimation'>
                        <div className='fadeInOne'>
                            <h1>Hi!</h1>
                        </div>
                        <div className='fadeInTwo'>
                            <h1>I am intersted in Front-End Development and UX Design</h1>
                        </div>
                        <div className='fadeInThree'>
                            <h1>Get to know me!</h1>
                        </div>
                    </Container>
                </Container>
                <Container fluid>
                        <h1>3</h1>
                </Container>
            </div>
        );
    }
}

export default About;
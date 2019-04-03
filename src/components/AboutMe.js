import React, { Component } from 'react';
import '../App.css';

import { Container, Row, Col, Button, Card } from "react-bootstrap";


import AnchorLink from 'react-anchor-link-smooth-scroll'

import Footer from './Footer.js'

import { Link } from 'react-router-dom'

import hcde from '../images/hcde.eps';
import att from '../images/att.svg';
import football from '../images/football.jpg';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {items: ['hello', 'world', 'click', 'me']};
      }

      componentDidMount() {
        window.scrollTo(0, 0);
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
                        <Link to='/'>
                            <li><a href="">Home</a></li>
                        </Link>
                        <Link to='/AboutMe'>
                            <li><a href="">About Me</a></li>
                        </Link>
                        <li><a href="/portfolio/#/#work">Work</a></li>
                        <li><a href="/portfolio/#/#contact">Contact</a></li>
                    </ul>
                </header>
                <div className='outerDiv'>
                    <Container fluid className='aboutMeAnimation'>
                        <div className='fadeInOne'>
                            <h1>Hi! My name is Nathan</h1>
                        </div>
                        <div className='fadeInTwo'>
                            <h1>I am intersted in Front-End Development and UX Design</h1>
                        </div>
                        <div className='fadeInThree'>
                            <h1>Get to know me!</h1>
                        </div>
                        {/* <Container fluid className='fadeInFour'>
                            <Row>
                                <Col>
                                    <AnchorLink offset={() => 70} href='#myJourney'><img src={hcde} alt='My Journey' /></AnchorLink>
                                </Col>
                                <Col>
                                    <AnchorLink offset={() => 70} href='#workExperience'><img src={att} alt='Work Experience' /></AnchorLink>
                                </Col>
                                <Col>  
                                    <AnchorLink offset={() => 70} href='#hobbies'><img src={football} alt='Hobbies' /></AnchorLink>
                                </Col>
                            </Row>
                        </Container> */}
                        <div className='fadeInFour'>
                            <Container className='aboutMeContent'>
                                <h2>My Journey</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc id cursus metus aliquam. Gravida quis blandit turpis cursus in hac habitasse. Cursus in hac habitasse platea dictumst quisque sagittis. Nullam vehicula ipsum a arcu cursus vitae congue. Tincidunt tortor aliquam nulla facilisi cras fermentum. Dui faucibus in ornare quam viverra. Facilisi nullam vehicula ipsum a arcu cursus. At augue eget arcu dictum. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Auctor elit sed vulputate mi sit.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc id cursus metus aliquam. Gravida quis blandit turpis cursus in hac habitasse. Cursus in hac habitasse platea dictumst quisque sagittis. Nullam vehicula ipsum a arcu cursus vitae congue. Tincidunt tortor aliquam nulla facilisi cras fermentum. Dui faucibus in ornare quam viverra. Facilisi nullam vehicula ipsum a arcu cursus. At augue eget arcu dictum. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Auctor elit sed vulputate mi sit.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc id cursus metus aliquam. Gravida quis blandit turpis cursus in hac habitasse. Cursus in hac habitasse platea dictumst quisque sagittis. Nullam vehicula ipsum a arcu cursus vitae congue. Tincidunt tortor aliquam nulla facilisi cras fermentum. Dui faucibus in ornare quam viverra. Facilisi nullam vehicula ipsum a arcu cursus. At augue eget arcu dictum. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Auctor elit sed vulputate mi sit.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc id cursus metus aliquam. Gravida quis blandit turpis cursus in hac habitasse. Cursus in hac habitasse platea dictumst quisque sagittis. Nullam vehicula ipsum a arcu cursus vitae congue. Tincidunt tortor aliquam nulla facilisi cras fermentum. Dui faucibus in ornare quam viverra. Facilisi nullam vehicula ipsum a arcu cursus. At augue eget arcu dictum. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Auctor elit sed vulputate mi sit.</p>  
                                <h2>Work Experience</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc id cursus metus aliquam. Gravida quis blandit turpis cursus in hac habitasse. Cursus in hac habitasse platea dictumst quisque sagittis. Nullam vehicula ipsum a arcu cursus vitae congue. Tincidunt tortor aliquam nulla facilisi cras fermentum. Dui faucibus in ornare quam viverra. Facilisi nullam vehicula ipsum a arcu cursus. At augue eget arcu dictum. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Auctor elit sed vulputate mi sit.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc id cursus metus aliquam. Gravida quis blandit turpis cursus in hac habitasse. Cursus in hac habitasse platea dictumst quisque sagittis. Nullam vehicula ipsum a arcu cursus vitae congue. Tincidunt tortor aliquam nulla facilisi cras fermentum. Dui faucibus in ornare quam viverra. Facilisi nullam vehicula ipsum a arcu cursus. At augue eget arcu dictum. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Auctor elit sed vulputate mi sit.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc id cursus metus aliquam. Gravida quis blandit turpis cursus in hac habitasse. Cursus in hac habitasse platea dictumst quisque sagittis. Nullam vehicula ipsum a arcu cursus vitae congue. Tincidunt tortor aliquam nulla facilisi cras fermentum. Dui faucibus in ornare quam viverra. Facilisi nullam vehicula ipsum a arcu cursus. At augue eget arcu dictum. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Auctor elit sed vulputate mi sit.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc id cursus metus aliquam. Gravida quis blandit turpis cursus in hac habitasse. Cursus in hac habitasse platea dictumst quisque sagittis. Nullam vehicula ipsum a arcu cursus vitae congue. Tincidunt tortor aliquam nulla facilisi cras fermentum. Dui faucibus in ornare quam viverra. Facilisi nullam vehicula ipsum a arcu cursus. At augue eget arcu dictum. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Auctor elit sed vulputate mi sit.</p>  
                                <h2>Hobbies</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc id cursus metus aliquam. Gravida quis blandit turpis cursus in hac habitasse. Cursus in hac habitasse platea dictumst quisque sagittis. Nullam vehicula ipsum a arcu cursus vitae congue. Tincidunt tortor aliquam nulla facilisi cras fermentum. Dui faucibus in ornare quam viverra. Facilisi nullam vehicula ipsum a arcu cursus. At augue eget arcu dictum. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Auctor elit sed vulputate mi sit.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc id cursus metus aliquam. Gravida quis blandit turpis cursus in hac habitasse. Cursus in hac habitasse platea dictumst quisque sagittis. Nullam vehicula ipsum a arcu cursus vitae congue. Tincidunt tortor aliquam nulla facilisi cras fermentum. Dui faucibus in ornare quam viverra. Facilisi nullam vehicula ipsum a arcu cursus. At augue eget arcu dictum. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Auctor elit sed vulputate mi sit.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc id cursus metus aliquam. Gravida quis blandit turpis cursus in hac habitasse. Cursus in hac habitasse platea dictumst quisque sagittis. Nullam vehicula ipsum a arcu cursus vitae congue. Tincidunt tortor aliquam nulla facilisi cras fermentum. Dui faucibus in ornare quam viverra. Facilisi nullam vehicula ipsum a arcu cursus. At augue eget arcu dictum. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Auctor elit sed vulputate mi sit.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc id cursus metus aliquam. Gravida quis blandit turpis cursus in hac habitasse. Cursus in hac habitasse platea dictumst quisque sagittis. Nullam vehicula ipsum a arcu cursus vitae congue. Tincidunt tortor aliquam nulla facilisi cras fermentum. Dui faucibus in ornare quam viverra. Facilisi nullam vehicula ipsum a arcu cursus. At augue eget arcu dictum. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Auctor elit sed vulputate mi sit.</p>  
                            </Container>
                            <Footer />
                        </div>
                    </Container>
                </div>
            </div>
        );
    }
}

export default About;
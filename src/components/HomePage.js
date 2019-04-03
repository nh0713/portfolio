import React, { Component } from 'react';
import '../App.css';

import textbookFriends from '../images/textbookFriends.PNG';
import grailz from '../images/grailz.png';
import attFriends from '../images/attFriends.png';
import shredderz from '../images/shredderz.png';
import HomeFantasyFootball from '../images/HomeFantasyFootball.PNG'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Link } from 'react-router-dom'

import Footer from './Footer.js'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class HomePage extends Component {
    render() {
        return(
            <div>
                <header className="header">
                    <input className="menu-btn" type="checkbox" id="menu-btn" />
                    <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
                    <ul className="menu">
                        <li><AnchorLink offset={() => 70} href="#home">Home</AnchorLink></li>
                        <Link to='/AboutMe'>
                            <li>About Me</li>
                        </Link>
                        <li><AnchorLink offset={() => 70} href="#work">Work</AnchorLink></li>
                        <li><AnchorLink offset={() => 70} href="#contact">Contact</AnchorLink></li>
                    </ul>
                </header>
                <Container fluid id='home' className='imgBanner'> 
                    <Container className="rowContainer">
                        <Row>
                            <Col className='bannerCol' lg={12}>
                                <ReactCSSTransitionGroup
                                transitionName="bannerAppearTop"
                                transitionAppear={true}
                                transitionAppearTimeout={2000}
                                transitionEnterTimeout={500}
                                transitionLeaveTimeout={300}>
                                    <h1>Nathan Han</h1>
                                </ReactCSSTransitionGroup>
                                <ReactCSSTransitionGroup
                                transitionName="bannerAppearBottom"
                                transitionAppear={true}
                                transitionAppearTimeout={2000}
                                transitionEnterTimeout={500}
                                transitionLeaveTimeout={300}>
                                    <h2>UX Designer | Developer | Product Manager</h2> 
                                </ReactCSSTransitionGroup>
                            </Col>
                        </Row>
                    </Container>
                </Container>
                <Container fluid id='work' className='recentProjects'>
                    <h2>Recent Projects</h2>
                    <Row>
                        <Col lg={6} className='textbookFriendsImage'>
                        <a href="https://nh0713.github.io/hcde498-firstpage/">
                            <img src={textbookFriends} alt="Textbook Friends"></img>
                        </a>
                        </Col>
                        <Col lg={6}>
                        <div className='details'>
                            <h4>Textbook Friends</h4>
                            <h5>React | Firebase | HTML | CSS | Javascript | Bootstrap</h5>
                            <p>Website that allows college students to buy and sell textbooks locally.</p>
                            <Link to='/TextbookFriends'>
                                <Button>Read More</Button>
                            </Link>
                        </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6}>
                            <a href='https://github.com/skarahx/grailz'>
                                <img src={grailz} alt="Grailz"></img>
                            </a>
                        </Col>
                        <Col lg={6}>
                        <div className='details'>
                            <h4>Grailz</h4>
                            <h5>Swift | REST/JSON</h5>
                            <p>App that displays upcoming sneaker release dates and details.</p>
                            <Link to='/Grailz'>
                                <Button>Read More</Button>
                            </Link>
                        </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6}>
                            <a href='https://invis.io/3UMZBWMMR8D'>
                                <img src={attFriends} alt="AT&T Friends"></img>
                            </a>
                        </Col>
                        <Col lg={6}>
                            <div className='details'>
                                <h4>AT&T Friends</h4>
                                <h5>Invision | Adobe Illustrator | Product Management | Teamwork</h5>
                                <p>Prototype app designed assist recent college grads in buying telecommunication and entertainment services for the first time.</p>
                                <Link to='/AttFriends'>
                                    <Button>Read More</Button>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6}>
                            <img src={shredderz} alt="Shredderz"></img>
                        </Col>
                        <Col lg={6}>
                            <div className='details'>
                                <h4>Shredderz</h4>
                                <h5>User Research | UX Design | Teamwork</h5>
                                <p>Prototype app designed to assist snowboarders improve their skills and share their progress</p>
                                <Button href='https://shredderz.wixsite.com/hcdeshredderz'>Read More</Button>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6}>
                            <img src={HomeFantasyFootball} alt="Fantasy Football Player Comparison Tool Home Screenshot" className='textbookFriendsImage'></img>
                        </Col>
                        <Col lg={6}>
                            <div className='details'>
                                <h4>Fantasy Football Player Comparison Tool</h4>
                                <h5>Python | HTML | CSS | JSON/REST</h5>
                                <p>Web app that compares season stats for NFL players</p>
                                <Link to='FantasyFootball'>
                                    <Button>Read More</Button>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
                {/* <CarouselHomePage /> */}
                <Container fluid id='contact' className='contact'>
                    <h2>
                        Contact Me
                    </h2>
                    <Row>
                        <Col>
                            <a href='https://www.linkedin.com/in/nathan-han/'>
                                <i className="fab fa-linkedin fa-5x"></i>
                            </a>
                        </Col>
                        <Col>
                            <a href='https://github.com/nh0713'>
                                <i className="fab fa-github-square fa-5x"></i>
                            </a>
                        </Col>
                        <Col>
                            <a href='mailto:nathan0713@gmail.com'>
                                <i className="fas fa-envelope-square fa-5x" alt='email'></i>
                            </a>
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </div>
        );
    }
}

export default HomePage;
import React, { Component } from 'react';
import '../App.css';

import { Container, Row, Col, Button, Card } from "react-bootstrap";

import Footer from './Footer.js'

import { Link } from 'react-router-dom'

import sports from '../images/basketball.jpg';
import stickShift from '../images/stickShift.jpg';
import videoGames from '../images/videoGames.jpg';
import code from '../images/code.jpg';
import resume from '../images/resume.png';



class About extends Component {
    constructor(props) {
        super(props);
        this.state = {visited: false};
      }

      componentDidMount() {
        window.scrollTo(0, 0);
        this.setState({
            visited: true
        });
      }

    render() {
        console.log(this.state.visited);

        return (
            <div>
                <header className="header">
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
                </header>
                <div className='outerDiv'>
                    <Container fluid className='aboutMeAnimation'>
                        <div className='fadeInOne'>
                            <h1>Hi! My name is Nathan</h1>
                        </div>
                        <div className='fadeInTwo'>
                            <h1>I am interested in Front-End Development and UX Design</h1>
                        </div>
                        <div className='fadeInThree'>
                            <h1>Get to know me!</h1>
                        </div>
                        <div className='fadeInFour'>
                            <Container>
                                <div>
                                    <h2>My Journey</h2>
                                    <p>My first project in Web Development, was a simple fantasy football player comparison web app. It pulled data from an open API and allowed users to compare the stats of current NFL players. Because this was my first project in Front-End Development, both the functionality and design are very simple. For my next project, I created a much more complicated website. It is called Textbook Friends and it allows college students to buy and sell their unused textbooks locally. For this project, I developed both the Front-End, and the Back-End. For the Back-End, I had to learn Firebase entirely on my own. My next and current project is building and improving my own portfolio. I am excited to learn more about Front-End Development, and I look forward to new opportunities where I can apply my skills.</p>
                                </div>
                                <h2>Hobbies</h2>
                                <Container className='hobbiesContainer'>
                                    <div className='imgContainer'>
                                        <img src={sports} alt='Sports'></img>
                                        <div className='middle'>
                                            <div className='text'>I like to play all kinds of sports! Recently, I participated in a Flag Football League.</div>
                                        </div>
                                    </div>
                                    <div className='imgContainer'>
                                        <img src={stickShift} alt='Stick Shift'></img>
                                        <div className='middle'>
                                            <div className='text'>I recently learned how to drive manual...Now I'm obsessed with cars.</div>
                                        </div>
                                    </div>
                                    <div className='imgContainer'>
                                        <img src={videoGames} alt='Video Games'></img>
                                        <div className='middle'>
                                            <div className='text'>Currently, I play a lot of Apex Legends and Fortnite. But I love all games!</div>
                                        </div>
                                    </div>
                                    <div className='imgContainer'>
                                        <img src={code} alt='Code'></img>
                                        <div className='middle'>
                                            <div className='text'>I actively pursue opportunities to improve my skills.</div>
                                        </div>
                                    </div>
                                </Container>
                                {/* <a href={resume}>
                                    <Button>View Resume</Button>
                                </a> */}
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
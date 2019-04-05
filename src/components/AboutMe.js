import React, { Component } from 'react';
import '../App.css';

import { Container, Row, Col, Button, Card } from "react-bootstrap";

import Footer from './Footer.js'

import { Link } from 'react-router-dom'

import att from '../images/att.png';
import cwk from '../images/cwk.png';
import ftl from '../images/ftl.jpg';


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
                                    <p>I am currently in my last quarter at the University of Washington, studying Human Centered Design and Engineering (HCDE). However, my journey really begins in high school. As a high school student, I really had no passion or drive to pursue anything academic. I was more interested in sports and most of my friends in high school did not really have any plans of going to college. It wasn’t until I took a Game Design class, led by a Microsoft group called TEALS, that I realized what I was passionate about. In the class, we learned basic Computer Science concepts and it blew my mind. It was amazing to see what a few simple lines of code could do. Not only that, but my mentors were really supportive and showed me all of the opportunities that came with programming. I was motivated to pursue this, and I applied and was accepted into the University of Washington.</p>
                                    <p>Before arriving to HCDE, I struggled to find a major that suited what I was looking for. I enjoyed programming and technology, but I wanted to use the skills I learned to help people and impact their lives. In my Sophomore year, I learned about User Experience Design and HCDE. HCDE was exactly what I was looking for, it incorporates technology, but emphasizes the importance of the user. In HCDE I learned to ask important questions like, is the product that we are making truly what our users need, is our solution sustainable and accessible, and how do we make our products the most user friendly? I was learning more than just technical skills, but skills that would help me create experiences that met the needs of users. I am interested in Front-End Development because of how as a developer, you directly impact the experience of your users. </p>
                                    <p>My first project, was a simple fantasy football player comparison web app. It pulled data from an open API and allowed users to compare the stats of current NFL players. Because this was my first project in Front-End Development, both the functionality and design are very simple. For my next project, I created a much more complicated website. It is called Textbook Friends and it allows college students to buy and sell their unused textbooks locally. For this project, I developed both the Front-End, and the Back-End. For the Back-End, I had to learn Firebase entirely on my own. My next and current project is building and improving my own portfolio. I am excited to learn more about Front-End Development, and I look forward to new opportunities where I can apply my skills.</p>
                                </div>
                                <div>
                                    <h2>Work Experience</h2>
                                    <div className='companies'>
                                    <img src={att} alt='AT&T'></img>
                                        <img src={cwk} alt='Coding with Kids'></img>
                                        <img src={ftl} alt='Foot Locker'></img>
                                        {/* <h3>AT&T</h3> */}
                                        {/* <h3>Coding with Kids</h3> */}
                                        {/* <h3>Foot Locker</h3> */}
                                    </div>
                                </div>
                                
                                <h2>Hobbies</h2>
                                <h3>Sports</h3>
                                <h3>Cars</h3>
                                <h3>Video Games</h3>
                                <h3>...and of course Coding</h3>
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
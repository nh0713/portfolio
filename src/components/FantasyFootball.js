import React, { Component } from 'react';
import '../App.css';

import { Container} from "react-bootstrap";

import { Link } from 'react-router-dom'

import Footer from './Footer.js'
import ImgCarousel from './ImgCarousel.js'

class FantasyFootball extends Component {
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
                        <p>I created this web application as a final project for HCDE 310: Interactive Systems Design And Technology. The purpose of this web application was to allow people to compare stats of NFL players for Fantasy Football. Users can compare two different players and can filter both on a specific week or stat. It pulled JSON data from an API, however, unfortunately the API is no longer free. As a result, the comparison function no longer works.</p>
                        <h2>What I learned</h2>
                        <p>Although the web app is no longer functioning, I still learned a lot through creating this project. Firstly, I learned how to make API calls, and then how to parse the data. Secondly, I learned how to output and filter data based off of user input. Although the final project is not the most visually appealing, I learned valuable skills that I was able to incorporte into subsequent projects like Grailz, the sneaker release app.</p>
                        <h2>Screenshots of final project and output after user input</h2>
                    </Container>
                    <ImgCarousel />
                    <Footer />
                </Container>
            </div>
        );
    }
}

export default FantasyFootball;

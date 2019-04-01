import React, { Component } from 'react';
import '../App.css';

import textbookFriends from '../images/textbookFriends-min.PNG';
import wireframes from '../images/wireframes.png';
import affinityDiagram from '../images/affinity.jpg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'

import Footer from './Footer.js'


class TextbookFriends extends Component {
    render() {
        return (
            <div>
                <header className="header">
                    <input className="menu-btn" type="checkbox" id="menu-btn" />
                    <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
                    <ul className="menu">
                        <Link to='/portfolio/'>
                            <li><a href="">Home</a></li>
                        </Link>
                        <Link to='/portfolio/AboutMe'>
                        {/* <Link to='/AboutMe'> */}
                            {/* <li><a href="/AboutMe">About Me</a></li> */}
                            <li><a href="">About Me</a></li>
                        </Link>
                        <li><a href="/portfolio/#work">Work</a></li>
                        <li><a href="/portfolio/#contact">Contact</a></li>
                    </ul>
                </header>
                <Container fluid className="outerContainer">
                    <Container className="projectDetails">
                        <ProjectBackground />
                        <Purpose />
                        {/* <CompetitiveAnalysis />
                        <Wireframes />
                        <UserResearch />
                        <h2>Affinity Diagram</h2>
                        <img src={affinityDiagram} alt='Affinity Diagram'></img>
                        <h2>Hi-Fi Prototypes</h2>
                        <Row className="btnHiFiRow">
                            <Col sm={12} md={6}>
                                <a href='https://xd.adobe.com/view/efd755c5-8fe3-4192-6e6a-bba3d2d3018f-99e6/'><Button>Hi-Fi 1</Button></a>
                            </Col>
                            <Col sm={12} md={6}>
                                <a href='https://xd.adobe.com/view/8878ce01-ba9e-4b5a-a100-170d953204ec'><Button>Hi-Fi 2</Button></a>
                            </Col>
                        </Row>

                        <ABTesting />
                        <WhatILearned />
                        <a href='https://nh0713.github.io/hcde498-firstpage/'>
                            <Button>Try Textbook Friends</Button>
                        </a>
                    </Container> */}
                    <Footer />
                </Container>
            </div>
        );
    }
}

class ProjectBackground extends Component {
    render() {
        return (
            <div>
                <h2>Project Background</h2>
                <p>
                    Textbook Friends is a website that allows college students to buy and sell their textbooks locally. For this project, I had two and a half weeks to build it.  It is built using React, HTML, CSS, Bootstrap, and Firebase.
                </p>
            </div>
        );
    }
}

class Purpose extends Component {
    render() {
        return (
            <div>
                <h2>Purpose</h2>
                <p>
                    Buying textbooks is expensive; even buying used textbooks can be expensive. Buying and selling locally has multiple advantages over buying used textbooks online.
                </p>
                <ul>
                    <li>Buyer does not have to pay for shipping, seller does not have to go through the hassle of shipping.  Simple meetup near campus or agreed location</li>
                    <li>Usually cheaper than online used textbooks</li>
                    <li>Seller takes 100% of sale, unlike other online selling websites (ex: Ebay)</li>
                    <li>Receive textbooks faster</li>
                </ul>
            </div>
        );
    }
}

class CompetitiveAnalysis extends Component {
    render() {
        return (
            <div>
                <div className='compAnalyzed'>
                    <h2>Competitive Analysis</h2>
                    <h3>
                        Facebook Group (UW textbook Exchange)
                    </h3>
                    <ul>
                        <h5>Pros</h5>
                        <li>
                            Able to contact the seller through messenger
                        </li>
                        <li>
                            Able to make transactions right on facebook
                        </li>
                        <li>
                            Item posting has price and pictures for buyers to see
                        </li>
                    </ul>
                    <ul>
                        <h5>Cons</h5>
                        <li>
                            There are posts that are unrelated to textbooks such as tutoring jobs and lost item postings
                        </li>
                        <li>
                            Unorganized, users have to scroll down endlessly without knowing what they will find
                        </li>
                        <li>
                            Lack of search options
                        </li>
                    </ul>
                    <ul>
                        <h5>What Textbook Friends improves</h5>
                        <li>
                            Provides organized and quick way of finding the textbook of interest
                        </li>
                        <li>
                            <strong>Stretch Goal (in development):</strong> Buyers will be notified when the textbook they want, is posted
                        </li>
                    </ul>
                </div>
                <div className='compAnalyzed'>
                    <h3>
                        University Bookstore
                    </h3>
                    <ul>
                        <h5>Pros</h5>
                        <li>Books are categorized into specific classes within the school</li>
                    </ul>
                    <ul>
                        <h5>Cons</h5>
                        <li>Even the used textbooks are expensive for college students</li>
                        <li>Buys back used textbooks at a very low price point</li>
                        <li>Long lines</li>
                    </ul>
                    <ul>
                    <h5>What Textbook Friends improves</h5>
                        <li>Student to student exchange will lower the price for buyers</li>
                        <li>Student will gain more profit from selling textbooks to another student rather than the bookstore</li>
                    </ul>
                </div>
                <div className='compAnalyzed'>
                    <h3>Textbook.com</h3>
                    <ul>
                    <h5>Pros</h5>
                        <li>Allows online transactions and all items are shipped through UPS</li>
                        <li>Gives option to buy e-books</li>
                    </ul>
                    <ul>
                        <h5>Cons</h5>
                        <li>
                            Users do not get to see the actual condition of the book until they receive the book in person
                        </li>
                        <li>Higher prices</li>
                    </ul>
                    <ul>
                        <h5>What Textbook Friends improves</h5>
                        <li>To sell a textbook, users must post the condition of the textbook as well as a photo</li>
                    </ul>
                </div>
                <div className='compAnalyzed'>
                    <h3>Amazon</h3>
                    <ul>
                        <h5>Pros</h5>
                        <li>Reliable</li>
                        <li>Has reviews of the book</li>
                        <li>Quick and easy purchasing experience</li>
                        <li>Allows refunds when delivery goes wrong or if the book is returned</li>
                    </ul>
                    <ul>
                        <h5>Cons</h5>
                        <li>Higher prices</li>
                        <li>Shipping takes a few days and may cost extra</li>
                    </ul>
                    <ul>
                        <h5>What Textbook Friends improves</h5>
                        <li>Textbook Friends allows local transactions and hand-off which eliminates shipping fees</li>
                        <li>Recieve textbooks in the same day</li>
                    </ul>
                </div>
            </div>
        );
    }
}

class Wireframes extends Component {
    render() {
        return (
            <div>
                <h2>Wireframes</h2>
                <img src={wireframes} alt='Wireframes'></img>
            </div>
        )
    }
}

class UserResearch extends Component {
    render() {
        return(
            <div>
                <h2>User Research</h2>
                <h3>Survey</h3>
                <p>
                    In order to gain a more holistic understanding of target users and their needs, I created an online survey using Google Forms.  With the limited amount of time I had for this project, I recieved a total of 10 responses. 
                </p>
                <ul>
                    <h4>Overall findings from survey</h4>
                    <li>Students prefer buying used textbooks, mainly for the cheaper prices</li>
                    <li>Some students prefer new textbooks, mainly due to concerns over damages and condition</li>
                    <li>Although most students felt comfortable meeting a stranger to buy a textbook, some students felt uneasy and cautious about meeting a stranger</li>
                    <li>
                        Students prefer the University Bookstore for:
                        <ul>
                            <li>Fast and easy purchase experience</li>
                            <li>Convenient</li>
                            <li>Close by</li>
                            <li>Can see textbook in person</li>
                        </ul>
                    </li>
                    <li>
                        Students also prefer Amazon for similar reasons
                    </li>
                    <li>Students value recieving their textbooks quickly</li>

                </ul>
                <h3>Interviews</h3>
                <h4>Interview 1</h4>
                <p>
                    The first participant I interviewed was a fifth year UW student who commutes to campus. The interview was semi-structured with six questions, but deviated when I wanted to further explore certain topics discussed by the interviewee.  Overall, similar to our survey, much of the interviewee’s responses were expected. Despite this, there were still some interesting findings from the interview.  During our discussion of selling textbooks, the interviewee mentioned that he prefers the University Bookstore buyback service.  When I mentioned that he might be able to get more money if he sold it himself, he responded by saying that the buyback service was just more convenient.  This may be a topic worth exploring deeper, since convenience is one of the most important things to students.  Moving forward, we may want to think about how we can motivate students to sell their own textbooks despite it being slightly less convenient than buyback.  
                </p>
                <h4>Interview 2</h4>
                <p>
                    The second participant interviewed, was a fourth year UW student that lives near campus. Like the first interview, this interview was semistructured and the main goal of the interview being to gain more insight into college students and their experiences and needs when buying and selling textbooks. Agian, the results from this interview closely aligned with the results of the survey. Participant 2 mentioned that they obtain their textbooks from the University Bookstore because of how close and convenient it is. However, the price of the textbooks felt expensive to the interviewee. He mentioned, “price of textbooks on top of tuition is burdensome, and saving on textbooks itself can be much help”. The participant also mentioned that he usually tries to buy used books or rent textbooks to save some money, but that option is still a bit expensive and not always available. When asked about his opinion of our textbooks selling website, he said, “it would be great to have another resource that would allow me to get used books at a drastically lower price”. When asked about incidents of him selling textbooks he responded by saying, “I tried selling my books at the U-Book store and other book stores, but they offered around 5 dollars per book which I bought for more than $120 and I felt like that was unfair. Because I felt cheated I just kept my books instead of selling them”. This interview demonstrated the need for college students to have a platform to sell and buy used textbooks at reasonable prices.
                </p>
            </div>
        );
    }
}

class ABTesting extends Component {
    render() {
        return (
            <div>
                <h2>A/B Testing</h2>
                <p>
                    For each A/B testing session, participants were given the scenario that they were college students starting a new quarter and they were looking for used, affordable textbooks. The participants were required to search for a textbook of interest, pick a textbook from the search results and send an email to the seller. The three screens tested for this A/B test were the home/search screen, textbook search results page and textbook information/details page. Because Textbook Friends is a relatively simple tool, most participants did not struggle navigating the website. Nevertheless, participants still provided useful information that was implemented in the final design of the website.  First of all, participants did not like the color schemes of either prototypes. As a result, I changed the color scheme to blue, based off of the color psychology that blue influences a feeling of trust and honesty. Secondly, participants liked how in Hi-Fi 2, in the search results, it showed a thumbnail picture of the textbook.  Finally, participants felt that there was a lot of empty space. In order to address this, I included a feature on the home/search page that shows recent searches. I also created a landing page that provides users more information on the advantages of Textbook Friends.
                </p>
            </div>
        );
    }
}

class WhatILearned extends Component {
    render() {
        return (
            <div>
                <h2>What I learned</h2>
                <p>In order to allow user authentication and for users to post and search for textbooks, I had to learn Firebase on my own. It was not as difficult as I thought it would be, mostly because there are so many resources on the internet. Secondly, this was the first project where I was able to integrate both my UX background with my technical experience. I got to experiece what it was like to conduct User Research, and then actually develop a functiong tool that addressed my findings.</p>
            </div>
        );
    }
}

export default TextbookFriends;
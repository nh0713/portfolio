import React, { Component } from 'react';
import '../App.css';

import filledOut from '../images/FantasyFootballFilledOut.PNG'
import results1 from '../images/results1.png'
import results2 from '../images/FantasyFootballResults2.png'

import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';

class ImgCarousel extends Component {
    render() {
        return (
            <Container className='carouselContainer'>
                <Carousel>
                    <Carousel.Item>
                        <img src={filledOut} alt='Fantasy Football Web App'></img>
                        <Carousel.Caption>
                        {/* <h3>
                            Fantasy Football Web App
                        </h3> */}
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={results1} alt='Comparison Results 1'></img>
                        <Carousel.Caption>
                            {/* <h3>
                                Comparison Results 1
                            </h3> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={results2} alt='Comparison Results 2'></img>
                        <Carousel.Caption>
                            {/* <h3>
                                Comparison Results 2
                            </h3> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        );
    }
}

export default ImgCarousel;
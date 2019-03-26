import React, { Component } from 'react';
import '../App.css';

import LaserCut from '../images/LaserCut1.jpg'
import ThreeDPrint from '../images/3DPrint.jpg'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class CarouselHomePage extends Component {
    render() {
        return (
            <Container className='carouselHomePageContainer'>
                <h2>
                    Other Work
                </h2>
                <Carousel>
                    <Carousel.Item>
                        <a href='https://medium.com/@nh0713/laser-cut-table-stand-38139ea72b91'>
                            <img src={LaserCut} alt='Laser Cut Tablet Stand'></img>
                        </a>
                        <Carousel.Caption>
                        <h3>
                            Laser Cut Tablet Stand
                        </h3>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href='https://medium.com/@nh0713/3d-printed-object-53519fbaf8e2' className="d-block w-100">
                            <img src={ThreeDPrint} alt='3D Printed Toiletries Stand/Container'></img>
                        </a>
                        <Carousel.Caption>
                            <h3>
                                3D Printed Toiletries Stand/Container
                            </h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        );
    }
}

export default CarouselHomePage;
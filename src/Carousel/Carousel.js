import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
const carousel = () => {
    return (
        <Container>   
            <Row>
                <Col>
                    <Carousel style={{ borderRadius: 30}}>
                        <Carousel.Item >
                            <img
                                className="d-block w-100"
                                src="holder.js/800x600?text=First slide&bg=373940"
                                alt="First slide"
                                style={{ borderRadius: 30}}
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="holder.js/800x600?text=Second slide&bg=282c34"
                                alt="Third slide"
                                style={{ borderRadius: 30}}
                            />

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="holder.js/800x600?text=Third slide&bg=20232a"
                                alt="Third slide"
                                style={{ borderRadius: 30}}
                            />

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="holder.js/800x600?text=Third slide&bg=20232a"
                                alt="Third slide"
                                style={{ borderRadius: 30}}
                            />

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="holder.js/800x600?text=Third slide&bg=20232a"
                                alt="Third slide"
                                style={{ borderRadius: 30}}
                            />

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="holder.js/800x600?text=Third slide&bg=20232a"
                                alt="Third slide"
                                style={{ borderRadius: 30}}
                            />

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </Container> 
    )
}

export default carousel 
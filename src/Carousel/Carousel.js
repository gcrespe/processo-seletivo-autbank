import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

const Carousel1 = (props) => {

    return (
        <Container>   
            <Row>
                <Col>
                    <Carousel>
                        <Carousel.Item >
                            <img
                                className="d-block w-100"
                                src="https://i.imgur.com/8OEjpnA.png"
                                alt="First slide"
                                style={{ borderRadius: 10}}
                            />
                            <Carousel.Caption>
                                <h3>Coleção Game of Thrones - <b>R$ 120</b></h3>
                                <p>Entre no mundo de Game of Thrones e tenha a máxima experiência com a edição de colecionador</p>
                                <button onClick={props.addGOT} style={{color: 'white', marginBottom: 20}} class='button'> COMPRAR </button>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://i.imgur.com/BoofSpC.png"
                                alt="Second Slide"
                                style={{ borderRadius: 10}}
                            />

                            <Carousel.Caption>
                                <h3>Trilogia Jogos Vorazes - <b>R$40</b></h3>
                                <p>Entre no mundo de Jogos Vorazes e conheça toda a trama por trás dessa história</p>
                                <button onClick={props.addJV} style={{color: 'white', marginBottom: 20}} class='button'> COMPRAR </button>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://i.imgur.com/r3sjuun.png"
                                alt="Third Slide"
                                style={{ borderRadius: 10}}
                            />

                            <Carousel.Caption>
                                <h3>Coleção Percy Jackson e os Olimpianos - <b>R$ 69</b></h3>
                                <p>Embarque na mitologia grega enquanto Percy Jackson vive diversas aventuras</p>
                                <button onClick={props.addPJ} style={{color: 'white', marginBottom: 20}} class='button'> COMPRAR </button>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://i.imgur.com/HIup7CO.png"
                                alt="Third slide"
                                style={{ borderRadius: 10}}
                            />

                            <Carousel.Caption>
                                <h3>Coleção Harry Potter - <b>R$ 85</b></h3>
                                <p>Ele recebe uma carta contendo um convite para ingressar em Hogwarts, uma famosa escola especializada em formar jovens bruxos.</p>
                                <button onClick={props.addHP} style={{color: 'white', marginBottom: 20}} class='button'> COMPRAR </button>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://i.imgur.com/AUrSPEE.png"
                                alt="Third slide"
                                style={{ borderRadius: 10}}
                            />

                            <Carousel.Caption>
                                <h3>Coleção Nietzsche - <b>R$ 45</b></h3>
                                <p>Nietzsche foi um dos maiores escritores da história, deixando diversos livros carregados de conhecimento para a história</p>
                                <button onClick={props.addNT} style={{color: 'white', marginBottom: 20}} class='button'> COMPRAR </button>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </Container> 
    );   
}

export default Carousel1 
import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Carousel from '../Carousel/Carousel'

const Home = (props) => {

    return(
        <Container style={{ width: '100vh'}}>

            <Row className="justify-content-md-center"> 
                <Col>
                {/* ------------------------ Carrosel de Livros------------------------*/}
                <Carousel 
                    addGOT = {props.addGOT}
                    addJV = {props.addJV}
                    addPJ = {props.addPJ}
                    addHP = {props.addHP}
                    addNT = {props.addNT}/>
                </Col>
            </Row>
        </Container>
    );
}

export default Home
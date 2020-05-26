import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Navbar from './Navbar/Navbar'
import Carousel from './Carousel/Carousel'
import 'holderjs';

function App() {
  return (
  <Container>
    <Row>
      <Col>
        <Navbar/>
      </Col>
    </Row>
    <Row>
      <Col>
        <Carousel/>
      </Col>
    </Row>
  </Container>
  );
}

export default App;

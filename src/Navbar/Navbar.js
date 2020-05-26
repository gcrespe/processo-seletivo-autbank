import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Figure from 'react-bootstrap/Figure'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

const navbar = () => {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto" sm>
            <Nav activeKey="/home">
                <Nav.Item style={{padding: 60}}>
                    <Button style={{width: 100}}>Home</Button> 
                </Nav.Item>
                <Figure style={{ padding: 30}}>
                  <a href="https://github.com/gcrespe">
                    <Figure.Image
                      width={80}
                      height={80}
                      alt="Logo"
                      src="https://i.imgur.com/K2EFpyR.png"
                    />
                  </a>  
                </Figure>
                <Nav.Item style={{ padding: 60}}>
                  <Button variant="light" style={{width: 100}}>Livros</Button>
                </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Container>
    )
}

export default navbar
import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'

const Pedidos = (props) => {

    let contador = 0; 
    let desconto = 0;
    function calculaDesconto(){
        if(props.quantGOT){
            contador = contador + 1;
        }
        if(props.quantJV){
            contador = contador + 1;
        }
        if(props.quantPJ){
            contador = contador + 1;
        }
        if(props.quantHP){
            contador = contador + 1;
        }
        if(props.quantNT){
            contador = contador + 1;
        }
        if(contador === 1){
            desconto = 0
        }
        if(contador === 2){
            desconto = 0.05
        }
        if(contador === 3){
            desconto = 0.1
        }
        if(contador === 4){
            desconto = 0.2
        }
        if(contador === 5){
            desconto = 0.25
        }
        return desconto
    }

    function calculaPrecoTotal(){
        if(desconto === 0){
            return (props.quantGOT*120 + props.quantJV*40 + props.quantPJ*69 + props.quantHP*85 + props.quantNT*45)
        }
        else return ((props.quantGOT*120 + props.quantJV*40 + props.quantPJ*69 + props.quantHP*85 + props.quantNT*45)
            -(props.quantGOT*120 + props.quantJV*40 + props.quantPJ*69 + props.quantHP*85 + props.quantNT*45)*desconto)
    }
    return(
        <Container style={{ width: '100vh'}}>
            <Row sm="12"> 
                <Col md="12" sm="3">
                    <Card>
                        <Card.Header>Pedido #{props.id+1}</Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                            <p>
                                <p>
                                    Game of Thrones: {props.quantGOT}
                                </p>
                                <p>
                                    Jogos Vorazes: {props.quantJV}
                                </p>
                                <p>
                                    Percy Jackson: {props.quantPJ}
                                </p>
                                <p>
                                    Harry Potter: {props.quantHP}
                                </p>
                                <p>
                                    Coleçao Nietzsche: {props.quantNT}
                                </p>
                                <p>
                                    Desconto: {calculaDesconto()*100}%
                                </p>
                            </p>
                            <footer className="blockquote-footer">
                                Preço total:  <cite title="Source Title">R$ {calculaPrecoTotal()} </cite>
                            </footer>
                            </blockquote>
                        </Card.Body>
                    </Card>
                    <Row className="justify-content-md-center"> 
                        <Col md="auto" >
                            <button className='button1' style={{marginTop: '50px'}}>
                                FINALIZAR
                            </button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Pedidos
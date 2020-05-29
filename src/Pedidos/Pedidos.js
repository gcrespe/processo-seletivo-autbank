import React, {useState} from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'

const Pedidos = (props) => {

    const [show, setShow] = useState(false);

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
            <Row sm="6"> 
                <Col md="12" sm="12">
                <Alert show={show} variant="success">
                    <Alert.Heading>Pedido Finalizado</Alert.Heading>
                        <p>
                            Seu pedido foi contabilizado e irá partir para a entrega após a postagem
                        </p>
                        <hr />
                    <div className="d-flex justify-content-end">
                    <Button onClick={() => setShow(false)} variant="outline-success">
                        Fechar
                    </Button>
                    </div>
                </Alert>
                    <Card>
                        <Card.Header>Pedido #1</Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                            <p style={{marginLeft: '20px'}}>
                                <Row sm="12">
                                    <p>
                                        Game of Thrones: {props.quantGOT}
                                    </p>
                                </Row>
                                <Row sm="12">
                                    <p>
                                        Jogos Vorazes: {props.quantJV}
                                    </p>
                                </Row>
                                <Row sm="12">
                                    <p>
                                        Percy Jackson: {props.quantPJ}
                                    </p>
                                </Row> 
                                <Row sm="12">
                                    <p>
                                        Harry Potter: {props.quantHP}
                                    </p>
                                </Row>
                                <Row sm="12">
                                    <p>
                                        Coleçao Nietzsche: {props.quantNT}
                                    </p>
                                </Row>
                                <Row sm="12"    >
                                    <p>
                                        Desconto: {calculaDesconto()*100}%
                                    </p>
                                </Row>
                            </p>
                            <footer className="blockquote-footer">
                                Preço total:  <cite title="Source Title">R$ {calculaPrecoTotal()} </cite>
                            </footer>
                            </blockquote>
                        </Card.Body>
                    </Card>
                    <Row className="justify-content-md-center"> 
                        <Col md="auto" >
                            {!show && <button className='button1' style={{marginTop: '50px'}} onClick={() => setShow(true)}>
                                FINALIZAR
                            </button>}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Pedidos
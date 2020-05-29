import React, {useState} from 'react';
import {BrowserRouter, Link} from 'react-router-dom';
import {Route} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Figure from 'react-bootstrap/Figure'
import Home from './Home/Home'
import Pedidos from './Pedidos/Pedidos'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  let [quantidadesGOT, setQuantidadesGOT] = useState(0)

  let [quantidadesJV, setQuantidadesJV] = useState(0)

  let [quantidadesPJ, setQuantidadesPJ] = useState(0)

  let [quantidadesHP, setQuantidadesHP] = useState(0)
  
  let [quantidadesNT, setQuantidadesNT] = useState(0)

  function atualizaGOT(){
    setQuantidadesGOT(quantidadesGOT = quantidadesGOT + 1);
    console.log('got',quantidadesGOT)
  }
  
  function atualizaJV(){
    setQuantidadesJV(quantidadesJV = quantidadesJV + 1);
    console.log('jv', quantidadesJV)
  }
  
  function atualizaPJ(){
    setQuantidadesPJ(quantidadesPJ = quantidadesPJ + 1);
    console.log('pj', quantidadesPJ)
  }

  function atualizaHP(){
    setQuantidadesHP(quantidadesHP = quantidadesHP + 1);
    console.log('hp', quantidadesHP)
  }

  function atualizaNT(){
    setQuantidadesNT(quantidadesNT = quantidadesNT + 1);
    console.log('hp', quantidadesNT)
  }
  return (
    <BrowserRouter>
      <div style={{overflow: 'hidden'}}>
        <Row className="justify-content-md-center"> 
          <Col md="auto" sm>
            {/* ------------------------ Navbar ------------------------*/}
            <Nav activeKey="/home" >
               {/* ------------------------ botao home ------------------------*/}
                  <Nav.Item style={{padding: 60}}>
                      <Link to="/home">
                        <button className="button">HOME</button>
                      </Link> 
                  </Nav.Item>
                   {/* ------------------------ icone central ------------------------*/}
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
                   {/* ------------------------ botao pedidos ------------------------*/}
                  <Nav.Item style={{ padding: 60}}>
                    <Link to="./pedidos">
                      <button className='button'>PEDIDO</button>
                    </Link>
                  </Nav.Item>
              </Nav>
          </Col>
        </Row>
        <Route path="/home" exact 
          render={(props) => 
            <>
            <Home 
              addGOT={() => atualizaGOT()}
              addJV={() => atualizaJV()}
              addPJ={() => atualizaPJ()}
              addHP={() => atualizaHP()}
              addNT={() => atualizaNT()}> </Home>
          </>}
        />
        <Route path="/pedidos" exact 
          render={(props) => 
            <Pedidos 
              quantGOT={quantidadesGOT}
              quantJV={quantidadesJV}
              quantPJ={quantidadesPJ}
              quantHP={quantidadesHP}
              quantNT={quantidadesNT}> 
              </Pedidos>}
        />
        
      </div>
    </BrowserRouter>

  );
}

export default App;

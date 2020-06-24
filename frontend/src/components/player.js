import React from 'react'
import ReactPlayer from 'react-player'
import { withRouter } from 'react-router-dom';
import '../styles/player.css'
import NavBarPlayer from './navBarPlayer.js'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'
import api from '../api/api';
class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userL: props.user,
      peli: props.getMovie,
      botonComentario: true,
      error:false,
      comentarios:[],
      input:""
    }

  }

  comentar=()=>{
    if (!this.state.userL) {
      this.setState({error:true})
    }else{
      const comentario={
        titulo:this.state.peli.titulo,
        username:this.state.userL.username,
        texto:this.state.input
      }
      console.log(comentario)
      api.createComment(comentario)
      .then(data=>api.getComments(this.state.peli.titulo))
      .then(data=>
        this.setState({comentarios:data,input:""}))
      .catch(e=>console.log(e))
      
    }
  } 
  comentarios = () => {
    const c = [1, 2, 3]
    const comment = <Card style={{ width: '45rem' }}
      bg={'Dark'.toLowerCase()}
      text={'white'}
      className="mb-2">
      <Card.Header>18/12/2020</Card.Header>
      <Card.Body>
        <Card.Title>Juan15</Card.Title>
        <Card.Text>
          La peli safa pero no digo que valga la pena
    </Card.Text>
      </Card.Body>
    </Card>
    return c.map((elem) => comment)
  }
  handleInput = (event) =>{
    this.setState({input:event.target.value})
  }  
  cargarComentarios=()=>{
    const movie= this.state.peli;
    api.getComments(movie.titulo)
    .then(data=>{
         console.log(data)
         this.setState({ comentarios:data,botonComentario:false})
         console.log(this.state);
    })
    .catch(error=>console.log(error));

  }
  render() {

    return (<div>{this.state.peli == null ? <div></div> : <div>
      <NavBarPlayer></NavBarPlayer>
      <div >
        <div className="movie">
          <h1>{this.state.peli.titulo}</h1>
        </div>
        <div className="centrarMovie">
          <div className="player-wrapper">
            <ReactPlayer
              url={this.state.peli.trailer}
              className='react-player'
              width='60%'
              height='75%'
              controls={true}
              playing={false}
            />
          </div>
        </div>
      </div>
      <div className="comentarios">
        {this.state.botonComentario ?
          <Button className="cargarComentarios" variant="primary" onClick={this.cargarComentarios }>
            Cargar Comentarios
            </Button>
          :

          <Container>
            <Row>
              <Col ></Col>
              <Col sm={5}>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label style={{color:"white"}}>Escriba un Comentario</Form.Label>
                  <Form.Control as="textarea" rows="3" value={this.state.input} onChange={this.handleInput}/>
                </Form.Group>
                <div style={{display:"flex",marginBottom: "10px"}}>
                <Button onClick={this.comentar}>Agregar</Button> 
                  {this.state.error ?  <Alert variant="danger" onClose={()=>this.setState({error:false})} dismissible>
                    el usuario no esta logeado 
                  </Alert> : null
                  }
            
                </div>
              </Col>
              <Col me="auto"></Col>
            </Row>
            <Row>
              <Col sm={2}></Col>
              <Col sm={8}>

                {this.state.comentarios.map((elem,i)=>{
         return <Card key={i.toString()} style={{ width: '45rem' }}
          bg={'Dark'.toLowerCase()}
          text={'white'}
          className="mb-2">
          <Card.Header>{elem.date}</Card.Header>
          <Card.Body>
            <Card.Title>{elem.username}</Card.Title>
            <Card.Text>
              {elem.texto}
        </Card.Text>
          </Card.Body>
        </Card>
         })}

              </Col>
              <Col md="auto"></Col>
            </Row>
          </Container>

        }
      </div>
    </div>}

    </div>)
  }
}

export default withRouter(Player);
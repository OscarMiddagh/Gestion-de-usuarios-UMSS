//Campo para la historia Tablero de Solicitudes

import React from "react";
//import "./App.css";

//import CrearRol from './componentes/Crear-Rol/CrearRol';
import axios from "axios"; 
import BarraNav from "../NavBar-Admin/NavBarAdmin";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";

const url = "https://gestiondeusuariosumss.herokuapp.com";



class App extends React.Component {
    state = {
      data: [],
      modalResponder: false,
      form: {
        idUsuario:"",
        idSolicitud: "",
        nombreUsuario: "",
        fecha: "",
        rolOrigen:"",
        rolDestino:"",
        motivo:"",
        comentario:"",
      }
    };
    notificacion ={
      mensaje:"hola",
      user:{
        id:9000006
      },
      fecha:"2020-12-10",
      respuesta:"APROBADO"
    }
  mostrarModalResponder=(registro)=>{          //cambia el estado de false a true
    this.setState({modalResponder: true, form: registro });
    document.getElementById("mensajeEnviado").hidden =true;
  }

  ocultarModalResponder=()=>{
    this.setState({modalResponder: false});
  }
  componentDidMount(){       //ciclo de vida
    axios.get(url+"/solicitudes")
    .then(response=>{
      console.log(response.data);
      this.setState({data:response.data});
    })
    .catch(console.log);
  }

  handleChange= e=>{        //cuando se escriba en inputs se cambien en el estado form
      this.setState({
      form:{
        ...this.state.form,
      [e.target.name]: e.target.value,
      }
    })
  }
  setNotificacion(resp,idUsuario){
    this.notificacion ={
      mensaje: document.getElementById("comentario").value,
      user:{
        id:idUsuario
      },
      respuesta:resp
    }
  }
  aprobar= async (idUsuario)=>{
   await axios.post(url + "/sol_aceptada/"+idUsuario,this.state.form.rolDestino)
    .then(async res=>{
      this.setNotificacion("Aprobado",idUsuario);
      await axios.post(url+"/enviar_notificacion",this.notificacion)
        .then(res=>{
          console.log("Notificacion enviada");
        })
        .catch();
    })
    .catch(console.log);
    this.ocultarModalResponder();
   // window.location.href = window.location.href;
  }
  rechazar = async (idUsuario) => {
    await axios.post(url + "/sol_rechazada/"+idUsuario)
      .then(async res=>{
        this.setNotificacion("Rechazado",idUsuario);
          await axios.post(url+"/enviar_notificacion",this.notificacion)
            .then(res=>{
              console.log("Notificacion enviada");
            })
            .catch();
      })
      .catch(console.log);
      this.ocultarModalResponder();
     // window.location.href = window.location.href;
  }
  render() {
    
    return (
      <>
      <BarraNav/>

      
      
      
      
        <Container>
        <div id="mensajeEnviado" className="alert alert-primary" role="alert" hidden={true}/>
          <div className="container"> <br></br>
          
                     
            <div className="justify-content-center align-items-center" id="form">
            <h3 align="center" id="titulo">SOLICITUDES PARA CAMBIAR DE ROL</h3><br/> 
          <Table>
            <table className="table" id="form">
              <tbody className="table-dark">
              {this.state.data.map((dato) => (   //por cada dato que se muestre lo siguiente, se debe colocar el nombre de la base de datos 
                <tr>                 
                  <td>{dato.nombreUsuario}</td>
                  <td>{dato.fecha}</td>
                  <td>
                    <Button className="float-right"
                      color="primary"
                      onClick={() => this.mostrarModalResponder(dato)}
                      >Responder
                    </Button>
                  </td>
                </tr>
                
              ))}
              </tbody>
              </table>
          </Table>
          <br></br>
            </div>
          </div>

        </Container>

        <Modal id="formContent" className="wrapper fadeInDown" isOpen={this.state.modalResponder} > 
        
        
          <ModalHeader >
          
           <div ><h3 text-align="center" font-family="Times"><b>Responder a solicitud de:</b></h3>
           
           </div>
         
          </ModalHeader>
          
          <ModalBody>
            <FormGroup>
              <label>
               Id:
              </label><br/>
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.idSolicitud}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Nombre: 
              </label>
              <input
                className="form-control"
                name="nombre"
                type="text"
                readOnly
                value={this.state.form.nombreUsuario}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Rol Actual: 
              </label>
              <input
                className="form-control"
                name="rolA"
                type="text"
                readOnly
                value={this.state.form.rolOrigen.nombreRol}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Rol Solicitado: 
              </label>
              <input
                className="form-control"
                name="rolS"
                type="text"
                readOnly
                value={this.state.form.rolDestino.nombreRol}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Fecha: 
              </label><br/>
              <input
                className="form-control" 
                name="fecha"
                type="text"
                readOnly
                value={this.state.form.fecha}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Mensaje de solicitud: 
              </label>
              <textarea
                className="form-control"
                name="mensajeS"
                readOnly
                value={this.state.form.motivo}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Comentario: 
              </label>
              <input
                id="comentario"
                minLength={20}
                maxLength={250}
                className="form-control"
                name="comentario"
                type="text"
                required
                placeholder="Ingrese su comentario"
               onChange={this.handleChange}
                
              />
            </FormGroup>
            
          </ModalBody>

          <ModalFooter>
            <Button color="secondary" onClick={this.ocultarModalResponder}>Cerrar</Button>
            <Button
              color="primary"
              onClick={() => this.aprobar(this.state.form.idUsuario)}> Aprobar
            </Button>
            <Button
              color="danger"
              onClick={()=>this.rechazar(this.state.form.idUsuario)}>Rechazar
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}
export default App;
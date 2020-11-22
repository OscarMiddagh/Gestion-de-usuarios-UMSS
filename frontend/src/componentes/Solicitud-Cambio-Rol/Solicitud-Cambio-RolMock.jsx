//Campo para la historia Tablero de Solicitudes
import React from "react";
//import "./App.css";
import axios from "axios"; 
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

class SolicitudCambioRol extends React.Component {
  state = {
    data: []
  };

  peticionGet=()=>{
    axios.get(url+"/"+987+"/sol_cambio_rol").then(response=>{
      console.log(response.data);
      this.setState({data:response.data});
    })
  }

  mostrarModalResponder=(registro)=>{          //cambia el estado de false a true
    this.setState({modalResponder: true, form: registro });
  }

  ocultarModalResponder=()=>{
    this.setState({modalResponder: false});
  }
  componentDidMount(){       //ciclo de vida
    axios.get(url)
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

  aprobar(){
      //colocar lo que hara el boton aprobar
  }

  render() {
    
    return (
      <>
        <Container>
       
          <Table>
            <thead>
              <tr>   
                <th>ID</th>
                <th>Nombre</th>
                <th>Fecha</th>
                <th>Acción</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (   //por cada dato que se muestre lo siguiente, se debe colocar el nombre de la base de datos 
                <tr>                 
                  <td>{dato.idSolicitud} </td>
                  <td>{dato.nombreUsuario}</td>
                  <td>{dato.fecha}</td>
                  <td>
                    <Button
                      color="primary"
                      onClick={() => this.mostrarModalResponder(dato)}
                      >Responder
                    </Button>
                  </td>
                </tr>
                
              ))}
            </tbody>
          </Table>
        </Container>
      </>
    );
  }
}
export default SolicitudCambioRol;
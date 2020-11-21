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

const url = "";

class App extends React.Component {
  state = {
    data: [],
    modalResponder: false,
    form: {
      id: "",
      Nombre: "",
      fecha: "",
      rolA:"",
      rolS:"",
      mensajeS:"",
      comentario:"",
    }
  };

  peticionGet=()=>{
    axios.get(url).then(response=>{
      this.setState({data:response.data});
    })
  }

  mostrarModalResponder=(registro)=>{          //cambia el estado de false a true
    this.setState({modalResponder: true, form: registro });
  }

  ocultarModalResponder=()=>{
    this.setState({modalResponder: false});
  }
  componentDiMount(){       //ciclo de vida
    this.peticionGet();
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
                  <td>{dato.id}</td>
                  <td>{dato.nombre}</td>
                  <td>{dato.fecha}</td>
                  <td>
                    <Button
                      color="primary"
                      onClick={() => this.mostrarModalResponder(elemento)}
                      >Responder
                    </Button>
                  </td>
                </tr>
                
              ))}
            </tbody>
          </Table>
        </Container>

        <Modal isOpen={this.state.modalResponder}>
          <ModalHeader>
           <div><h3>Responder</h3></div>
          </ModalHeader>


          <ModalBody>
            <FormGroup>
              <label>
               Id:
              </label>
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.id}
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
                value={this.state.form.nombre}
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
                value={this.state.form.rolA}
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
                value={this.state.form.rolS}
              />
            </FormGroup>
            <FormGroup>
              <label>
                fecha: 
              </label>
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
              <input
                className="form-control"
                name="mensajeS"
                type="text"
                readOnly
                value={this.state.form.mensajeS}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Comentario: 
              </label>
              <input
                className="form-control"
                name="comentario"
                type="text"
               onChange={this.handleChange}
                
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.aprobar(this.state.form)}> Aprobar
            </Button>
            <Button
              color="danger"
              onClick={() => this.cerrarModalResponder()}>Rechazar
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}
export default App;
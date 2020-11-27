//campo para la historia de Solicitud de Cambio de Rol
import React from 'react'
import axios from "axios";
import "./Solicitud-Cambio-Rol.css"
import {
  Input,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";
const url = "https://gestiondeusuariosumss.herokuapp.com/";

class SolicitudCambioRol extends React.Component {
  state = {
    data: [],
  };
  form = {
    motivo:"",
    rolDestino: {
      id:"",
      nombreRol:""
    }
  }
  setMotivo = (e) =>{
    this.form.motivo = e.target.value;
    console.log(this.form.motivo );
  }
  setRolDestino =(e)=>{
    this.form.rolDestino.id = e.target.value;
    this.form.rolDestino.nombreRol = document.getElementById(e.target.value).innerText;
    console.log(this.form.rolDestino );
  }
  limitarmotivo = async (e) => {
    document.getElementById("errorMotivo").style.visibility = "hidden";
    if (e.target.value.match("^[Ñña-zA-Z0-9]*$") != null) {
      await this.setState({
        form: {
          ...this.state.form,
          [e.target.name]: e.target.value,
        }
      });
      console.log(e.target.name);
    }
    else {    
      document.getElementById("errorMotivo").innerHTML = "No se aceptan espacios ni caracteres especiales";
      document.getElementById("errorMotivo").style.visibility = "visible";
    }
  }
  componentDidMount(){       //ciclo de vida
    axios.get(url+"/"+this.obtenerID()+"/sol_cambio_rol")
    .then(response=>{
      console.log(response.data);
      this.setState({data:response.data.roles});
    })
    .catch(console.log(this.props));
  }
  obtenerID(){
    return window.location.pathname.split('/')[1];
  }
  enviar=()=>{
    console.log(this.form);
    axios.post(url+"/"+this.obtenerID()+"/sol_cambio_rol",this.form)
    .then(console.log)
    .catch(console.log);
  }
  aprobar=(idUsuario)=>{
    axios.post(url + "/sol_aceptada/"+idUsuario,this.state.form.rolDestino)
    .then(console.log)
    .catch(console.log);
    this.ocultarModalResponder();
    window.location.href = window.location.href;
  }
  render(){
    console.log(window.location.pathname);
    return (
      <div class="contenido">
        <body class="hello">
        <form align="center">
        <h3 align="center">SOLICITUD DE CAMBIO DE ROL</h3>
        <br>
    </br>
    <br>
    </br>
    <div className="container">
        <div id="Mensaje" className="alert alert-success" role="alert" hidden={true}></div>
    </div>
    <h6 align="center">Motivo de solicitud:</h6>
    <textarea  class="centro" placeholder="Ingrese su mensaje" rows="6" minLength={20} maxLength={250} onChange={this.setMotivo} required>
    </textarea><small id="errorEmail" className="form-text text-danger" style={{visibility:"hidden"}}></small>
          <br>
            </br>
            <label for="cars" class="centro2">Roles disponibles:</label>
            <select id="roles" name="rol" onChange={this.setRolDestino}>
            <option disabled selected value>Elija un nuevo rol</option>
            {this.state.data.map((rol) => (   //por cada dato que se muestre lo siguiente, se debe colocar el nombre de la base de datos 
                
                <option id={rol.id} value={rol.id}>{rol.nombreRol}</option>                
            ))}      
            
            </select>
            <br>
            </br>
            <br>
            </br>
            <div class="row"> 
    <div class="col text-center">
            <input type="button" class="btn btn-primary" onClick={this.enviar} value="Enviar"/>
            </div>
            </div>
        </form>
    </body>
    </div>

     )
  }
}
function displayButton (event){
  alert("¡SU SOLICITUD HA SIDO ENVIADA CON EXITO!")
}

export default SolicitudCambioRol 
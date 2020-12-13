//campo para la historia de Solicitud de Cambio de Rol
import React from 'react'
import axios from "axios";
import BarraNav from "../NavBar-Usuario/NavBarUsuario";
import "./Solicitud-Cambio-Rol.css"
//import {
  //Input,
  //Button,
  //Container,
  //Modal,
  //ModalHeader,
  //ModalBody,
  //FormGroup,
  //ModalFooter,
////} from "reactstrap";

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
  usuario={
    nombreUsuario:"",
    rolActual:""
  }
  setMotivo = (e) =>{
    this.form.motivo = e.target.value;
  }
  setRolDestino =(e)=>{
    this.form.rolDestino.id = e.target.value;
    this.form.rolDestino.nombreRol = document.getElementById(e.target.value).innerText;
  }
  componentDidMount(){       //ciclo de vida
    axios.get(url+this.obtenerID()+"/sol_cambio_rol")
    .then(response=>{
      this.setState({data:response.data.roles});
      console.log(response.data)
      document.getElementById("nombreUsuario").innerText +="  "+  response.data.nombreUsuario;
      document.getElementById("nombreRol").innerText +="  "+ response.data.rolActual;
    })
    .catch(console.log);
  }
  obtenerID(){
    return window.location.pathname.split('/')[1];
  }
  enviar=async()=>{
    if(this.form.motivo !== "" &&this.form.motivo.length>=20 &&this.form.motivo.length<=250 && this.form.rolDestino.id!==""){
      await axios.get(url+"/enviado/"+this.obtenerID())
      .then(async res => {
        if(!res.data.respuesta ){        
            await axios.post(url+this.obtenerID()+"/sol_cambio_rol",this.form)
            .then(res=>{
              document.getElementById("mensajeExito").innerHTML ="Solicitud enviada exitosamente";
              document.getElementById("mensajeExito").hidden =false;
            })
            .catch(console.log);
          }else{
            document.getElementById("mensajeError").innerHTML ="Usted ya ha enviado una solicitud y esta pendiente a revision";
            document.getElementById("mensajeError").hidden =false;
          }
          this.vaciarCampos();
      })
    }else{
      console.log("No se puede enviar la solicitud \n"+ this.form)
    }


  }
  vaciarCampos=()=>{
    document.getElementById("motivoText").value ="";
    this.form.motivo = "";
    document.getElementById("roles").value="";
  }
  manejadorSubmit(e) {
    e.preventDefault();
  }
  render(){
    return (
      <div>
        <BarraNav/>
      <div className="contenido"> <br/>
          <h5 id="nombreUsuario">Usuario: {this.usuario.nombreUsuario}</h5>
          <h5 id="nombreRol">Rol:{this.usuario.rolActual}</h5>
          <br/>
          <br/>
          <div id="mensajeError" className="alert alert-danger" role="alert" hidden={true}/>
          <div id="mensajeExito" className="alert alert-success" role="alert" hidden={true}/>
          <form align="center" onSubmit={this.manejadorSubmit} id="formSolicitud"><br/>
            <h3 align="center" id="titulo">SOLICITUD DE CAMBIO DE ROL</h3><br/>
            <h5 align="center">Motivo de solicitud:</h5>
            <textarea id="motivoText" className="centro" placeholder="Ingrese su mensaje" rows="6" minLength={20} maxLength={250} onChange={this.setMotivo} required />
            <small id="errorEmail" className="form-text text-danger" style={{visibility:"hidden"}} />
            <label htmlFor="rol" className="centro2">Roles disponibles:</label> <br/>
            <select id="roles" name="rol" onChange={this.setRolDestino} required>
              <option disabled selected value="">Elija un nuevo rol:</option>
              {this.state.data.map((rol) => (   //por cada dato que se muestre lo siguiente, se debe colocar el nombre de la base de datos 
                  
                  <option id={rol.id} value={rol.id}>{rol.nombreRol}</option>                
              ))}
            </select>
            <br/>
            <input type="submit" className="btn btn-primary" onClick={this.enviar} value="Enviar"/>
          </form>
    </div>
    </div>
     )
  }
}

export default SolicitudCambioRol 
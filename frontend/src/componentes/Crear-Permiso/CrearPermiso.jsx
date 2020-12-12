//Campo para la historia Crear Permiso
import React from 'react'
import "./CrearPermiso.css"
//import axios from "axios";
//import {
  //Input,
  //Button,
  //Container,
  //Modal,
  //ModalHeader,
  //ModalBody,
  //FormGroup,
  //ModalFooter,
//} from "reactstrap";
//const url = "https://gestiondeusuariosumss.herokuapp.com/";
class CrearPermiso extends React.Component{
  
    state = {
        form: {
            id: "",
            nombrePermiso: "",
            descripcion: "" 

          }
      };

    limitarPermiso = async (e) => {
        document.getElementById("errorPermiso").style.visibility = "hidden";
        if (e.target.value.match("^[Ññíóáéú@.a-zA-Z]*$") != null) {
          //...
          await this.setState({
            form: {
              ...this.state.form,
              [e.target.name]: e.target.value,
            }
          });   
        }
        else {
          document.getElementById("errorPermiso").innerHTML = "Solo se permiten caracteres alfabeticos";
          document.getElementById("errorPermiso").style.visibility = "visible";
        }
      }
      vaciarCampos=()=>{
        document.getElementById("permisoText").value ="";
        this.form.nombrePermiso = "";
        document.getElementById("descripcionText").value ="";
        this.form.descripcion = "";
      }
      manejadorSubmit(e) {
        e.preventDefault();
      }
     /* 
      enviar=async()=>{
        if(this.form.nombrePermiso !== "" &&this.form.nombrePermiso.length>=5 &&this.form.nombrePermiso.length<=40){
          await axios.get(url+"/enviado/")
          .then(async res => {
            if(!res.data.respuesta ){        
                await axios.post(url+"/guardarPermiso",this.form)
                .then(res=>{
                  document.getElementById("mensajeExito").innerHTML ="Permiso creado exitosamente";
                  document.getElementById("mensajeExito").hidden =false;
                })
                .catch(console.log);
              }else{
                document.getElementById("mensajeError").innerHTML ="Ya existe el permiso actual";
                document.getElementById("mensajeError").hidden =false;
              }
              this.vaciarCampos();
          })
        }else{
          console.log("No se puede añadir el permiso \n"+ this.form)
        }
    
    
      }*/
    render(){
        return (
          <div className="contenido" id="div"> <br/>
              
              <form align="center" id="form" onSubmit={this.manejadorSubmit}>
              <h3 align="center" id="titulo">CREAR PERMISOS PARA ROL DE USUARIOS</h3>
              <div id="div">
              <label for="permisos" id="label">Nuevo Permiso :</label>
              <input id="permisoText" v-model="nombrePermiso" placeholder=" Nombre de permiso"  rows="3" name="nombrePermiso" minLength={5} maxLength={40} onChange={this.limitarPermiso} value={this.state.form.nombrePermiso} required />
              <small id="errorPermiso" className="form-text text-danger" style={{visibility:"hidden"}}></small>
              </div>
              <div id="div">
              <label for="descrip" id="label">Descripcion :</label>
              <textarea id="descripcionText" v-model="descripcion" placeholder="Añada una descripcion respecto al nuevo permiso." rows="4" minLength={20} maxLength={250} onChange={this.setDescripcion} required /> <br/>
              </div>
              <input type="submit" className="btn btn-primary" onClick={this.enviar} value="Agregar"/>
              </form>
              
              
        </div>
    
         )
      }
}
export default CrearPermiso;
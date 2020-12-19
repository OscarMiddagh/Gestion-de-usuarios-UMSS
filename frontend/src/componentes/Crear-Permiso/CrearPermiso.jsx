//Campo para la historia Crear Permiso
import React from 'react'
import "./CrearPermiso.css"
import BarraNav from "../NavBar-Admin/NavBarAdmin";
import axios from "axios";
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
const url = "https://gestiondeusuariosumss.herokuapp.com/";
class CrearPermiso extends React.Component{
  
    state = {
        
            id: "",
            nombrePermiso: "",
            descripcion: "" 

          
      };

    limitarPermiso = async (e) => {
        document.getElementById("errorPermiso").style.visibility = "hidden";
        if (e.target.value.match("^[Ññíóáéú@.a-zA-Z]*$") != null) {
          this.setState({
              [e.target.name]: e.target.value,
            })
          } else {
          document.getElementById("errorPermiso").innerHTML = "Solo se permiten caracteres alfabeticos";
          document.getElementById("errorPermiso").style.visibility = "visible";
        }
      }
  //vaciarCampos=()=>{
    //    document.getElementById("permisoText").value ="";
      //  this.state.nombrePermiso = "";
        //document.getElementById("descripcionText").value ="";
        //this.state.descripcion = "";
     // }
      
      limitaralfanumericos = (e) => {
        if (e.target.value.match("[0123456789]") != null) {
            this.setState({
            [e.target.name]: e.target.value
          })
        }
        else {
          alert("Intente escribir números, sin espacios");
        }
      }

      limitaralfabeticos = (e) => {
        if (e.target.value.match("^[ Ñña-zA-Z]*$") != null) {
            this.setState({
            [e.target.name]: e.target.value
          })
        }
        else {
          alert("Intente escribir letras, sin espacios");
        }
      }

      

      crearPermiso = async (e) =>{
      await axios.post(url + "/guardarPermiso",this.state)
      .then(response=>{
      console.log(response);
      })
      .catch(error=>{
      console.log(error)
     })
    }
      
    alertaPermiso() {
      alert("¡Permiso creado!")
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
      const {id,nombrePermiso,descripcion}=this.state
        return (
          <div>
          <BarraNav/>
          <div className="contenido" id="div"> <br/>
              
              <form align="center" id="form" onSubmit={this.crearPermiso}>
              <h3 align="center" id="titulo">CREAR PERMISOS PARA ROL DE USUARIOS</h3>
              <div id="div">
              <label htmlFor="identificador" id="label1"><b>Id del Permiso :</b></label><br></br>
              <input type="text" id="idText" v-model="id" placeholder=" Id"  rows="3" name="id" minLength={1} maxLength={10}  value={id} onChange={this.limitaralfanumericos} required />
              <small id="errorId" className="form-text text-danger" style={{visibility:"hidden"}}></small>
              </div>
              <div id="div">
              <label htmlFor="permisos" id="label2"><b>Nuevo Permiso :</b></label>
              <input type="text" id="permisoText" v-model="nombrePermiso" placeholder=" Nombre de permiso"  rows="3" name="nombrePermiso" minLength={5} maxLength={40} onChange={this.limitarPermiso} value={nombrePermiso} required />
              <small id="errorPermiso" className="form-text text-danger" style={{visibility:"hidden"}}></small>
              </div>
              <div id="div">
                <br></br>
              <h6 htmlFor="descrip" id="label3"><b>Descripcion :</b></h6>
              <textarea type="text"id="descripcionText" v-model="descripcion" name="descripcion" placeholder="Añada una descripcion respecto al nuevo permiso." rows="4" minLength={20} maxLength={250} value={descripcion} onChange={this.limitaralfabeticos} required /> <br/>
              </div>
              <div>
              <input type="button"  className="fadeIn fourth" onClick={(this.crearPermiso,this.alertaPermiso)}value=" CREAR PERMISO " />
            </div>
              </form>
              
              
        </div>
        </div>
    
         )
      }
}
export default CrearPermiso;
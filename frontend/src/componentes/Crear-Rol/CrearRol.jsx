//Campo para la historia Crear Rol
import React from 'react'
//import { useState } from "react";
import "./CrearRol.css"
import axios from "axios";
import {
  Table,
  
  Container,
} from "reactstrap";


const url= "https://gestiondeusuariosumss.herokuapp.com"
class CrearRol extends React.Component{
  
  state = {
    permisos:[],

nombreRol: '',



}


  limitaralfabeticos = (e) => {
    //document.getElementById("errorRol").style.visibility = "hidden";
    if (e.target.value.match("^[Ñña-zA-Z]*$") != null) {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
    else {
      alert("Intente escribir sin espacios ni simbolos especiales ");
      //document.getElementById("errorRol").innerHTML = "Solo se permiten caracteres alfabeticos";
      //document.getElementById("errorRol").style.visibility = "visible";
    }
  }

  

  componentDidMount(){
    axios.get(url + "/permisos")
    .then(response=>{
        console.log(response);
       this.setState({permisos: response.data})
       
   })
    .catch((error)=>{
        console.log(error);
    });
   }

   crearRol= async (e)=>{
    await axios.post(url + "/guardarRol",this.state)
    .then(response=>{
      console.log(response);
      
    })
  .catch(error=>{
      console.log(error)
  })
  }

  alertaRol() {
    alert("¡Rol creado!")
    
  }
  //handlerSubmit=(e) =>{
    // e.preventDefault()
    //console.log(this.state)
  //}

  //setPermisoState=(e)=>{
    //permisoState.map(d =>{
      //return{
        //select: false,
        //nombrePermiso: d.nombrePermiso,
      //}


    //})

  //}
  render(){
    const {nombreRol}=this.state
  return (
    <div style={{textAlign:"center"}} className="crear_rol" id="div"> <br />

      <form align="center" id="form" onSubmit={this.crearRol}>
      <h3 align="center" id="titulo">CREAR ROL DE USUARIO</h3>
        <div id="div">
          <label htmlFor="rol" id="label"><h6><b>Nuevo Rol :</b></h6></label><br></br>
          <input type="text"id="rolText" className="nombre" placeholder="Nombre de rol" rows="3" name="nombreRol" value={nombreRol} onChange={this.limitaralfabeticos} minLength={5} maxLength={20} />
        </div>

            <Container style={{textAlign:"center"}} >
        <div id="mensajeEnviado" className="alert alert-primary" role="alert" hidden={true}/>
          <div className="container">
            <h5 style={{textAlign:"center"}}> <b>Permisos disponibles</b></h5> 
            <hr></hr>          
            <div  className="justify-content-center align-items-center">
          <Table  >
            
              <table   className="formContent">
              <tbody aling="center" className="table-dark">
              {this.state.permisos.map((dato) => (   //por cada dato que se muestre lo siguiente, se debe colocar el nombre de la base de datos 
                <tr>                 
                  <td>{dato.nombrePermiso}</td>
                  <td>
                    <input type="checkbox" className="btn btn-primary" align="center"/>
                  
                  </td>
                </tr>
                
              ))}
              </tbody>
              </table>
              
          </Table>
            </div>
            <div >
            <input type="button"  className="fadeIn fourth" onClick={(this.crearRol,this.alertaRol)}value=" CREAR ROL " />
            <br></br>
            </div> 
          </div>

        </Container>
        <br></br>
        </form>
    </div>
  )
  }
}

export default CrearRol;

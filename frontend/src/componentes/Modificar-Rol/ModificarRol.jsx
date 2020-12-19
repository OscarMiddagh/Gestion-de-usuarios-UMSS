//Campo para la historia Modificar permiso de Rol 

import axios from 'axios';
import React from 'react'
import BarraNav from "../NavBar-Admin/NavBarAdmin";
import "./ModificarRol.css"
import {
  Table,
  
  Container,
} from "reactstrap";

const url= "https://gestiondeusuariosumss.herokuapp.com"

//const url = "https://gestiondeusuariosumss.herokuapp.com/roles";
class ModificarRol extends React.Component{

  state={
    roles:[],
    permisos:[]
  }


  obtenerPermisos(){
    axios.get(url + "/permisos")
    .then(response=>{
        console.log(response);
       this.setState({permisos: response.data})
       
   })
  }
 
peticionGet=()=>{
  axios.get("https://gestiondeusuariosumss.herokuapp.com/roles")
  .then (response=>{
    this.setState({data:response.data});
  })
  .catch((error)=>{
    console.log(error);
});
}  

peticionPost=async()=>{
  await axios.post ("https://gestiondeusuariosumss.herokuapp.com/roles", this.state.form)
    .then (response=>{
    this.peticionGet();
  })
  .catch((error)=>{
    console.log(error);
});
}

componentDidMount(){
 axios.get("https://gestiondeusuariosumss.herokuapp.com/roles")
 .then(response=>{
     console.log(response);
    this.setState({roles: response.data})
})
 .catch((error)=>{
     console.log(error);
 });
}

alertaModificar() {
  alert("¡Rol Modificado!")
  
}

    
    render(){
        return (
          <div>
            <BarraNav/>
          <div className="contenido" id="div"> <br/>
            
             <form align="center" id="form">
             <h3 align="center" id="titulo">MODIFICAR PERMISOS PARA ROL DE USUARIO</h3>
              <div id="div">
                 <label for="name-rol" id="label"><b>Rol de Usuario :</b></label>
                   <select name="roles" className="form-control" id="combobox">
                     {this.state.roles.map(elemento =>(
                       <option value={elemento.idRol}> {elemento.nombreRol} </option>
                       )
                       )}
                    </select>
              </div>
              <div id="div">
                 <label for="permisos" id="label"><b>Permisos de Rol :</b></label> <br></br>
                 <Container style={{textAlign:"center"}} >
        <div id="mensajeEnviado" className="alert alert-primary" role="alert" hidden={true}/>
          <div className="container">
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
            <input type="button"  className="fadeIn fourth" onClick={(this.peticionPost,this.alertaModificar)}value=" CAMBIAR " />
           
            </div> 
          </div>

        </Container>
              </div>
              
            </form>
              
              
        </div>
    </div>
         )
      }
}
export default ModificarRol;

//.enviar
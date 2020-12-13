//Campo para la historia Modificar permiso de Rol 

import axios from 'axios';
import React from 'react'
import BarraNav from "../NavBar-Admin/NavBarAdmin";
import "./ModificarRol.css"

//const url = "https://gestiondeusuariosumss.herokuapp.com/roles";
class ModificarRol extends React.Component{

  state={
    roles:[]

  };

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

    
    render(){
        return (
          <div>
            <BarraNav/>
          <div className="contenido" id="div"> <br/>
            
             <form align="center" id="form">
             <h3 align="center" id="titulo">MODIFICAR PERMISOS PARA ROL DE USUARIO</h3>
              <div id="div">
                 <label for="name-rol" id="label">Rol de Usuario :</label>
                   <select name="roles" className="form-control" id="combobox">
                     {this.state.roles.map(elemento =>(
                       <option value={elemento.idRol}> {elemento.nombreRol} </option>
                       )
                       )}
                    </select>
              </div>
              <div id="div">
                 <label for="permisos" id="label">Permisos de Rol :</label> <br></br>
                 <label for="permisos" id="label"></label>
                 <label htmlFor="" className="fadeIn fourth"> aqui va la lista de permisos por rol...<input type="checkbox"/></label>
              </div>
               <input type="submit" className="btn btn-primary" onClick={this.enviar} value="Cambiar"/>
            </form>
              
              
        </div>
    </div>
         )
      }
}
export default ModificarRol;
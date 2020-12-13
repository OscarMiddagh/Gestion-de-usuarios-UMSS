//Campo para la historia Modificar permiso de Rol 

import axios from 'axios';
import React from 'react'
import "./ModificarRol.css"

//const url = "https://gestiondeusuariosumss.herokuapp.com/roles";
class ModificarRol extends React.Component{

  state={
    roles:[]
  }
 
peticionGet=()=>{
  axios.get("https://gestiondeusuariosumss.herokuapp.com/roles").then (response=>{
    this.setState({data:response.data});
  })
  .catch((error)=>{
    console.log(error);
});
}  

peticionPost=async()=>{
  await axios.post ("https://gestiondeusuariosumss.herokuapp.com/roles", this.state.form).then (response=>{
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

    
    render(){
        return (
          <div className="contenido" id="div"> <br/>
              <h3 align="center" id="titulo">MODIFICAR PERMISOS PARA ROL DE USUARIO</h3>
              
             <form align="center" id="form">
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
               <input type="submit" className="btn btn-primary" onClick={this.peticionPost()} value="Cambiar"/> 
            </form>
              
              
        </div>
    
         )
      }
}
export default ModificarRol;

//.enviar
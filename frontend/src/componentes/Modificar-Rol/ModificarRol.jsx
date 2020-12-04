//Campo para la historia Modificar permiso de Rol 

import React from 'react'
class ModificarRol extends React.Component{
    
    render(){
        return (
          <div className="contenido" id="div"> <br/>
              <h3 align="center">MODIFICAR PERMISOS PARA ROL DE USUARIO</h3>
              
              <form align="center">
              <div id="div">
              <label for="permisos" id="label">Rol de Usuario :</label>
              <select id="" className=""  />
              </div>
              <div id="div">
              <label for="permisos" id="label">Permisos de Rol :</label> <br></br>

              <label for="permisos" id="label"></label>
              <input type="checkbox" id="permiso" name ="permiso" >
                  

              </input>
              </div>
             <input type="submit" className="btn btn-primary" onClick={this.enviar} value="Cambiar"/>
              </form>
              
              
        </div>
    
         )
      }
}
export default ModificarRol;
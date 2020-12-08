//Campo para la historia Crear Rol
import React from 'react'
import "./CrearRol.css"
class CrearRol extends React.Component{
    state = {
        form: {
            "rol": ""
          }
      };
    render(){
        return (
          <div className="contenido" id="div"> <br/>
              <h3 align="center">CREAR ROL</h3>
              
              <form align="center">
              <div id="div">
              <label for="rol" id="label">Nuevo Rol :</label>
              <input id="rolText" className="text1" placeholder=" Nombre de rol"  rows="3" name="rol" minLength={5} maxLength={40} />
              </div>
              <input type="submit" className="btn btn-primary" onClick={this.enviar} value="Agregar"/>
              </form>     
        </div>
         )
      }
}
export default CrearRol;

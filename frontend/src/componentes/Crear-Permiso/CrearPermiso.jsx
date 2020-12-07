//Campo para la historia Crear Permiso
import React from 'react'
import "./CrearPermiso.css"
class CrearPermiso extends React.Component{
    state = {
        form: {
            "permiso": ""
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
    render(){
        return (
          <div className="contenido" id="div"> <br/>
              <h3 align="center" id="titulo">CREAR PERMISOS PARA ROL DE USUARIOS</h3>
              
              <form align="center" id="form">
              <div id="div">
              <label for="permisos" id="label">Nuevo Permiso :</label>
              <input id="permisoText" className="text1" placeholder=" Nombre de permiso"  rows="3" name="permiso" minLength={5} maxLength={40} onChange={this.limitarPermiso} value={this.state.form.permiso} required />
              <small id="errorPermiso" className="form-text text-danger" style={{visibility:"hidden"}}></small>
              </div>
              <div id="div">
              <label for="descrip" id="label">Descripcion :</label>
              <textarea id="descripcionText" className="text2" placeholder="Añada una descripcion respecto al nuevo permiso." rows="4" minLength={20} maxLength={250} onChange={this.setDescripcion} required /> <br/>
              </div>
              <input type="submit" className="btn btn-primary" onClick={this.enviar} value="Agregar"/>
              </form>
              
              
        </div>
    
         )
      }
}
export default CrearPermiso;
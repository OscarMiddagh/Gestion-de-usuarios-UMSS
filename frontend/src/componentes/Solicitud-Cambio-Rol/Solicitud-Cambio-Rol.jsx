//campo para la historia de Solicitud de Cambio de Rol
import React from 'react'
import axios from "axios";
import "./Solicitud-Cambio-Rol.css"
const url = "https://gestiondeusuariosumss.herokuapp.com/solicitudes";

class SolicitudCambioRol extends React.Component {
  componentDidMount(){       //ciclo de vida
    axios.get(url)
    .then(response=>{
      console.log(response.data);
      this.setState({data:response.data});
    })
    .catch(console.log);
  }
  render(){
    return (
      <div class="contenido">
        <body class="hello">
        <form action="" method="post" align="center">
        <h3 align="center">SOLICITUD DE CAMBIO DE ROL</h3>
        <br>
    </br>
    <br>
    </br>
    <h6 align="center">Motivo de solicitud:</h6>
    <textarea  class="centro" placeholder="Ingrese su mensaje" rows="6" required>
        
        </textarea>
          <br>
            </br>
            <label for="cars" class="centro2">Roles disponibles:</label>
        
            <select id="cars" name="cars">
                <option value="admin">Admin</option>
                <option value="delivery">Delivery</option>
                <option value="vendedor">Vendedor</option>
                <option value="comprador">Comprador</option>
            </select>
            <br>
            </br>
            <br>
            </br>
            <div class="row"> 
    <div class="col text-center">
            <button type="submit" class="btn btn-primary" onclick={displayButton}>Enviar</button>
            </div>
            </div>
        </form>
    </body>
    </div>

     )
  }
}
function displayButton (event){
  alert("¡SU SOLICITUD HA SIDO ENVIADA CON EXITO!")
}

export default SolicitudCambioRol 
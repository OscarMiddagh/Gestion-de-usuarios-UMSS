//campo para la historia de Solicitud de Cambio de Rol
import React from 'react'
import axios from "axios"; 
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
        <body>
        <h3 align="center">SOLICITUD DE CAMBIO DE ROL</h3>
        <h6>Motivo de solicitud:</h6>
        <textarea>
            Necesito tener mas permisos para trabajar
          </textarea>
          <br>
            </br>
        <label for="cars">Roles disponibles:</label>
        <form action="" method="post">
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
            <button type="submit" class="btn btn-primary" onclick={displayButton}>Enviar</button>
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
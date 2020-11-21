//campo para la historia de Solicitud de Cambio de Rol
import React from 'react'
import "./Solicitud-Cambio-Rol.css"
const SolicitudCambioRol = () => {
  const SendRequest = (event) =>{
    event.preventDefault();
    try {
      //Aqui viene lo del axios.
      alert("Solicitud Enviada");
    } catch (error) {
      alert("Solicitud no enviada, reintente por favor");
    }
    
      
      
    }
  
  return (
    
    <form action="" align="center">
      <div>
    <body class="hello">
    <br>
        </br>
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
    
        <select id="cars" name="cars" class="centro3">
            <option value="admin" >Admin</option>
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
    <button class="button button-small button-light" onClick={SendRequest} value="Enviar">Enviar</button>
    
    </div> 
</div> 
        </body>
</div>
    </form>

  
  
  )
}

export default SolicitudCambioRol
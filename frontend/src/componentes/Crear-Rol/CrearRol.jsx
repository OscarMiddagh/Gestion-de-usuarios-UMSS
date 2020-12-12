//Campo para la historia Crear Rol
import React from 'react'
import { useState } from "react";
import "./CrearRol.css"

const CrearRol = () => {
  const [datos, setDatos] = useState({
    nombrerol: ''
  })
  
  
  const { nombrerol } = datos
  const limitaralfabeticos = (e) => {
    document.getElementById("errorRol").style.visibility = "hidden";
    if (e.target.value.match("^[Ñña-zA-Z]*$") != null) {
      setDatos({
        ...datos,
        [e.target.name]: e.target.value
      })
    }
    else {
      document.getElementById("errorRol").innerHTML = "Solo se permiten caracteres alfabeticos";
      document.getElementById("errorRol").style.visibility = "visible";
    }
  }

  return (
    <div className="contenido" id="div"> <br />
      <h3 align="center">CREAR ROL</h3>

      <form align="center">
        <div id="div">
          <label for="rol" id="label">Nuevo Rol :</label>
          <input id="nombrerol" className="text1" placeholder="Nombre de rol" rows="3" name="nombrerol" value={nombrerol} onChange={limitaralfabeticos} minLength={5} maxLength={20} required/>
          <small id="errorRol" className="form-text text-danger" style={{visibility:"hidden"}}></small>
        </div>
        <input type="submit" className="btn btn-primary" /*onClick={this.enviar}*/ value="Agregar Rol" />
      </form>
    </div>
  )
}

export default CrearRol;

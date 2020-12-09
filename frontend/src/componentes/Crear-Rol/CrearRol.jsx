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
    if (e.target.value.match("^[Ñña-zA-Z]*$") != null) {
      setDatos({
        ...datos,
        [e.target.name]: e.target.value
      })
    }
    else {
      alert("Solo se aceptan caracteres alfabeticos");
    }
  }

  return (
    <div className="contenido" id="div"> <br />
      <h3 align="center">CREAR ROL</h3>

      <form align="center">
        <div id="div">
          <label for="rol" id="label">Nuevo Rol :</label>
          <input id="rolText" className="text1" placeholder="Nombre de rol" rows="3" name="rol" value={nombrerol} onChange={limitaralfabeticos} minLength={5} maxLength={20} />
        </div>
        <input type="submit" className="btn btn-primary" /*onClick={this.enviar}*/ value="Agregar Rol" />
      </form>
    </div>
  )
}

export default CrearRol;

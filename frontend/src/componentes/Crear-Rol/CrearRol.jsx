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

      <form align="center" id="form">
      <h3 align="center" id="titulo">CREAR ROL</h3>
        <div id="div">
<<<<<<< HEAD
          <label htmlFor="rol" id="label">Nuevo Rol :</label>
          <input id="rolText" className="text1" placeholder="Nombre de rol" rows="3" name="nombrerol" value={nombrerol} onChange={limitaralfabeticos} minLength={5} maxLength={20} />
=======
          <label for="rol" id="label2">Nuevo Rol :</label>
          <input id="nombrerol" className="text1" placeholder="Nombre de rol" rows="3" name="nombrerol" value={nombrerol} onChange={limitaralfabeticos} minLength={5} maxLength={20} required/>
          <small id="errorRol" className="form-text text-danger" style={{visibility:"hidden"}}></small>
>>>>>>> 6c3a5687dd0e8d7586fb1b08ca6bdd1630a4322f
        </div>
        <input type="submit" className="btn btn-primary" /*onClick={this.enviar}*/ value="Agregar Rol" />
      </form>
    </div>
  )
}

export default CrearRol;

//Campo para la historia Registrar Usuario
import React from 'react'
import { useState } from "react";
import {
  Link
} from "react-router-dom";
import './Registro.css';

const Registro = () => {
  const [datos, setDatos] = useState({
    correo: '',
    contraseña: ''
  })
  const { correo, contraseña } = datos
  const limitarcorreo = (e) => {
    if (e.target.value.match("^[Ññíóáéú@.a-zA-Z0-9]*$") != null) {
      setDatos({
        ...datos,
        [e.target.name]: e.target.value
      })
    }
    else {
      alert("No se aceptan espacios ni caracteres especiales");
    }
  }
  const limitarpasswd = (e) => {
    if (e.target.value.match("^[Ñña-zA-Z0-9]*$") != null) {
      setDatos({
        ...datos,
        [e.target.name]: e.target.value
      })
    }
    else {
      alert("No se aceptan espacios ni caracteres especiales");
    }
  }
  return (
    
      <div className="body" id="div"> <br/>
       <h3 align="center">Crear una cuenta</h3>
       <h3 align="center">Informacio del Login</h3>
       
        <div id="div">
          <label for="email" >Correo</label> <br/>
          <input type="email" className="div" name="correo" id="email" aria-describedby="emailHelp" placeholder="Ingrese su correo" value={correo} onChange={limitarcorreo} required /> <br/>
          <label for="Contraseña" >Contraseña</label> <br/>
          <input type="password" className="div" name="contraseña" id="Contraseña" placeholder="Contraseña" value={contraseña} onChange={limitarpasswd} required minlength="8" />
          <label for="ConfContraseña" >Confirmar Contraseña</label>
          <input type="password" className="div" name="confirmarcontraseña" id="ConfContraseña" placeholder="Repetir Contraseña"/>
        </div>
        
        
       
        <div className="form-group">
          <button type="submit" className="btn btn-info">Registrarse</button>
        </div>
        
      </div>
    
  )
}

export default Registro
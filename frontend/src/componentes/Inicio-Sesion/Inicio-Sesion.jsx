//Campo para la historia Inicio de Sesion
import { useState } from "react";
import {
  Link
} from "react-router-dom";
import React from 'react'
import './Inicio-Sesion.css';

const InicioSesion = () => {
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
    <div className="conteiner mt-5">
      <div className="esqueleto">
        <div className="form-group">
          <label for="email" >Correo</label>
          <input type="text" className="form-control" name="correo" id="email" aria-describedby="emailHelp" placeholder="Ingrese su correo" value={correo} onChange={limitarcorreo} required />
        </div>
        <div className="form-group">
          <label for="Contraseña" >Contraseña</label>
          <input type="password" className="form-control" name="contraseña" id="Contraseña" placeholder="Contraseña" value={contraseña} onChange={limitarpasswd} required minlength="8" />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-info">Iniciar Sesion</button>
        </div>
        <Link type="submit" to="/Registro">
          Registro
        </Link>
      </div>
    </div>
  )
}

export default InicioSesion
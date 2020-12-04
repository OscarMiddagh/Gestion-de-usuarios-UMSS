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
          <label for="email">Correo</label><br/>
          <input type="email" className="div" name="correo" id="inflog" aria-describedby="emailHelp" placeholder="Ingrese su correo" value={correo} onChange={limitarcorreo} required /> <br/>
          <label for="Contraseña" >Contraseña</label> <br/>
          <input type="password" className="div" name="contraseña" id="inflog" placeholder="Contraseña" value={contraseña} onChange={limitarpasswd} required minlength="8" /><br/>
          <label for="ConfContraseña" >Confirmar Contraseña</label><br/>
          <input type="password" className="div" name="confirmarcontraseña" id="inflog" placeholder="Repetir Contraseña"/>
        </div>
       
        <h3 align="center">Informacion Personal</h3>
        
          <div id="div">
            <label for="name">Nombre(s)</label><br/>
            <input type="text" className="div" name="nombre" id="infper" placeholder="Ingrese su nombre"/><br/>
            <label for="firstsurname">Apellido Paterno</label><br/>
            <input type="text" className="div" name="apellidopaterno" id="infper" placeholder="Ingrese su apellido paterno"/><br/>
            <label for="secondsurname">Apellido Materno</label><br/>
            <input type="text" className="div" name="apellidomaterno" id="infper" placeholder="Ingrese su apellido materno"/><br/>
            <label for="Carnet">CI</label><br/>
            <input type="text" className="div" name="carnet" id="infper" placeholder="Ingrese su cédula de identidad"/><br/>
            <label for="Country">Pais</label><br/>
            <input type="text" className="div" name="country" id="infper" placeholder="Ingrese su País"/><br/>
            <label for="City">Ciudad</label><br/>
            <input type="text" className="div" name="city" id="infper" placeholder="Ingrese su Ciudad"/><br/>
            <label for="Direccion">Direccion</label><br/>
            <input type="text" className="div" name="direccion" id="infper" placeholder="Ingrese su dirección"/><br/>
            <label for="Telefono">Telefono Fijo</label><br/>
            <input type="text" className="div" name="telefono" id="infper" placeholder="Ingrese su numero de teléfono"/><br/>
            <label for="Celular">Telefono Movil</label><br/>
            <input type="text" className="div" name="celular" id="infper" placeholder="Ingrese su numero de celular"/><br/>
            <label for="Rol">Rol</label><br/>
            <select name="roles" id="Rol" placeholder="Seleccione un Rol"></select>
          </div>
        
       <form align="center">
        <div className="form-group">
          <button type="submit" className="btn btn-info">Registrarse</button>
        </div>
        </form>
      </div>
    
  )
}

export default Registro
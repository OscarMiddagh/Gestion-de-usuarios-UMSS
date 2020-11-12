//Campo para la historia Inicio de Sesion
import {Link
} from "react-router-dom";
import React from 'react'


const InicioSesion = () => {
  return (
    <div className="container mt-5">
      <label>
        Correo
      </label>
      <textarea >
        introduzca su correo
      </textarea>
      <div className="container mt-5">
      <label>
        Contraseña
      </label>
      <textarea>
        introduzca su contraseña
      </textarea>
      </div>
      <div className="container mt-5">
      <button>
        Iniciar Sesion
      </button>
      </div>
        <Link type="submit" to="/Registro">
          Registro
        </Link>
    </div>
  )
}

export default InicioSesion
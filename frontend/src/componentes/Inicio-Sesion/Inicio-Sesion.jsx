//Campo para la historia Inicio de Sesion
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React from 'react'
import Registro from "../Registro/Registro";


const InicioSesion = () => {
  return (
    <div className="container mt-5">
      <label>
        Correo
      </label>
      <textarea>
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
      <Router>
        <Link to="/Registro">
          Registro
        </Link>
        <Switch>
          <Route path="/Registro">
            <Registro />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default InicioSesion
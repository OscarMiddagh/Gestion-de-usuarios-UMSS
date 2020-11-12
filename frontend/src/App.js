import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import InicioSesion from './componentes/Inicio-Sesion/Inicio-Sesion';
import RespuestaSolicitud from './componentes/Respuesta-Solicitud/Respuesta-Solicitud';
import SolicitudCambioRol from './componentes/Solicitud-Cambio-Rol/Solicitud-Cambio-Rol';
import TableroSolicitudes from './componentes/Tablero-Solicitudes/Tablero-Solicitudes';
import Registro from './componentes/Registro/Registro';

function App() {
  return (
    <Router>
        <div className="container mt-5">
        <div className="btn-group">
          <Link to="/InicioSesion" className="btn btn-dark">
            Inicio de Sesion
          </Link>
          <Link to="/SolicitudCambioRol" className="btn btn-dark">
            Solicitud de Cambio de Rol
          </Link>
          <NavLink to="/TableroSolicitudes" className="btn btn-dark" activeClassName="active">
            Tablero de Solicitudes
          </NavLink>
          <hr />
        </div>
        <Switch>
        <Route path="/RespuestaSolicitud">
            <RespuestaSolicitud />
          </Route>
          <Route path="/SolicitudCambioRol">
            <SolicitudCambioRol />
          </Route>
          <Route path="/InicioSesion" exact>
            <InicioSesion />
          </Route>
          <Route path="/TableroSolicitudes">
            <TableroSolicitudes />
          </Route>
          <Route path="/Registro">
            <Registro />
          </Route>
        </Switch>
        </div>
    </Router>
  );
}

export default App;

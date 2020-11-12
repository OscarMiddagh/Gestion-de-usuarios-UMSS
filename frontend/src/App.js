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

function App() {
  return (
    <Router>
        <div className="container mt-5">
        <div className="btn-group">
          <Link to="/InicioSesion" className="btn btn-dark">
            InicioSesion
          </Link>
          <Link to="/SolicitudCambioRol" className="btn btn-dark">
            SolicitudCambioRol
          </Link>
          <NavLink to="/TableroSolicitudes" className="btn btn-dark" activeClassName="active">
            TableroSolicitudes
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
        </Switch>
        </div>
    </Router>
  );
}

export default App;

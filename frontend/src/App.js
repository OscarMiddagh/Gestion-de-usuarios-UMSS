import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import InicioSesion from './componentes/Inicio-Sesion/InicioSesionMock';
// import InicioSesion from './componentes/Inicio-Sesion/Inicio-Sesion';
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
          
          <hr />
        </div>
        <Switch>
        <Route path="/RespuestaSolicitud">
            <RespuestaSolicitud />
          </Route>
          <Route path="/:usuarioId/SolicitudCambioRol"> 
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

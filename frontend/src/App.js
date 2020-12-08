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
import CrearPermiso from './componentes/Crear-Permiso/CrearPermiso';
import ModificarRol from './componentes/Modificar-Rol/ModificarRol';
import CrearRol from './componentes/Crear-Rol/CrearRol';
import NotificacionRespuesta from './componentes/Notificacion-Respuesta/NotificacionRespuesta';
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
        <div className="btn-group">
          <Link to="/CrearPermiso" className="btn btn-dark">
            CrearPermiso
          </Link>
          <hr />
        </div>

        <div className="btn-group">
          <Link to="/ModificarRol" className="btn btn-dark">
            Modificar permisos de Rol
          </Link>
          <hr />
        </div>

        <div className="btn-group">
          <Link to="/Registro" className="btn btn-dark">
            Registro de Usuario
          </Link>
          <hr />
        </div>

        <div className="btn-group">
          <Link to="/CrearRol" className="btn btn-dark">
            CrearRol
          </Link>
          <hr />
        </div>

        <div className="btn-group">
          <Link to="/NotificacionRespuesta" className="btn btn-dark">
            Notificaciones
          </Link>
          <hr />
        </div>


        <Switch>
        <Route path="/RespuestaSolicitud">
            <RespuestaSolicitud />
          </Route>   
          <Route exact path="/:usuarioId/SolicitudCambioRol"> 
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
          <Route path="/CrearPermiso">
            <CrearPermiso />
          </Route>
          <Route path="/ModificarRol">
            <ModificarRol />
          </Route>
          <Route path="/CrearRol">
            <CrearRol />
          </Route>
          <Route path="/NotificacionRespuesta">
            <NotificacionRespuesta />
          </Route>
        </Switch>
        </div>
    </Router>
  );
}

export default App;

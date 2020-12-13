import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import InicioSesion from './componentes/Inicio-Sesion/InicioSesionMock';
// import InicioSesion from './componentes/Inicio-Sesion/Inicio-Sesion';
import RespuestaSolicitud from './componentes/Respuesta-Solicitud/Respuesta-Solicitud';
import SolicitudCambioRol from './componentes/Solicitud-Cambio-Rol/Solicitud-Cambio-Rol';
import TableroSolicitudes from './componentes/Tablero-Solicitudes/Tablero-Solicitudes';
import Registro from './componentes/Registro/RegistroUsuario';
import CrearPermiso from './componentes/Crear-Permiso/CrearPermiso';
import ModificarRol from './componentes/Modificar-Rol/ModificarRol';
import CrearRol from './componentes/Crear-Rol/CrearRol';
import NotificacionRespuesta from './componentes/Notificacion-Respuesta/NotificacionRespuesta';
function App() {
  return (
    <Router>
      <div className="btn-group">
        <Link to="/Gestion-de-usuarios-UMSS" className="btn btn-dark">
          Iniciar Sesion
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
          <Route path="/Gestion-de-usuarios-UMSS" exact>
            <InicioSesion />
          </Route>
          <Route path="/TableroSolicitudes">
            <TableroSolicitudes />
          </Route>
          <Route path="/RegistroUsuario">
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
    </Router>
  );
}

export default App;

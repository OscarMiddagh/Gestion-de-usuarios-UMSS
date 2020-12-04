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
        </Switch>
        </div>
    </Router>
  );
}

export default App;

import React from "react";
import {
    Link
} from "react-router-dom";
const NavBaradmin = ()=> {
    
        return (
            <div>
                <div className="btn-group">
                    <Link to="/TableroSolicitudes" className="btn btn-dark">
                        Tablero de Solicitudes
          </Link>
                    <hr />
                </div>
                <div className="btn-group">
                    <Link to="/CrearPermiso" className="btn btn-dark">
                        Crear un Permiso
          </Link>
                    <hr />
                </div>
                <div className="btn-group">
                    <Link to="/CrearRol" className="btn btn-dark">
                        Crear un Rol
        </Link>
                    <hr />
                </div>
                <div className="btn-group">
                    <Link to="/ModificarRol" className="btn btn-dark">
                        Modificar permisos de Rol
          </Link>
                    <hr />
                </div>


            </div>
        )
    
} 
export default NavBaradmin;
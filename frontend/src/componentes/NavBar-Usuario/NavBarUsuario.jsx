import React from "react";
import {
    Link
} from "react-router-dom";
const NavBaruser = () => {

    return (
        <div>
            <div className="btn-group">
                <Link to="/:usuarioId/SolicitudCambioRol" className="btn btn-dark">
                    Solicitud de Cambio de Rol
          </Link>
                <hr />
            </div>
            <div className="btn-group">
                <Link to="/NotificacionRespuesta" className="btn btn-dark">
                    Notificaciones
                        </Link>
                <hr />
            </div>
        </div>
    )

}
export default NavBaruser;
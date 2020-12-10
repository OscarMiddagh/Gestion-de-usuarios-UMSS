# Gestion-de-usuarios-UMSS
Este proyecto es para ing de software

Funcionalidades backend
//////////////////////////////
OBTENER PERMISOS DE LA BD
URL: /permisos
devuelve una lista con los permisos de la base de datos
cada permiso tiene el siguiente formato:
"id": entero
"nombrePermiso": string
"descripcion": string

///////////////////////////
COMPROBAR SI UN PERMISO EXISTE EN LA BASE DE DATOS
URL: /comprobarPermiso/{nombrePermiso}
devuelve un dato, true o false, debe pasarse en el enlace el nombre del permiso que quieres
saber si existe en la BD
ejemplo: /comprobar/Visualizar
lo que devuelve es:
"respuesta": true/false

//////////////////////////
GUARDAR UN PERMISO EN LA BD
URL: /guardarPermiso
permite guardar un permiso que se le pase en la bd
debes enviarle en el body lo siguiente:
{
	"id": long,
	"nombrePermiso": string,
	"descripcion": string
}

//////////////////////////
OBTENER ROLES DE LA BD
URL: /roles
devuelve una lista de todos los roles en la bd
cada rol tiene el siguiente formato:
"idRol": long
"nombreRol": string

/////////////////////////
OBTENER PERMISOS DE UN ROL DE LA BD
URL: //permisos/{nombreRol}
obtiene una lista de permisos que esten asociados al rol colocado en {nombreRol}
cada permiso tiene el siguiente formato
{
	"id": long,
	"nombrePermiso": string,
	"descripcion": string
}
ejemplo: /permisos/admin

////////////////////////////
GUARDAR UN USUARIO EN LA BD
URL: /guardarUsuario
guarda un usuario que se le pase en la base de datos
debes enviarle un body con lo siguiente:
{
    "nombres": string,
    "apellidos": string,
    "correo": string,
    "documentoDeIdentidad": string,
    "direccion": string,
    "ciudad": string,
    "pais": string,
    "rol": {
        "id": long,
        "nombreRol": string
    },
    "contraseña": string
}

//////////////////////////////////
ASIGNAR PERMISOS A UN ROL
URL: /asignarPermisos/{nombreRol}
asigna un listado de permisos a el rol {nombreRol}
debes enviar una lista de permisos en el body
ejemplo:
[
    {
        "id": long,
        "nombrePermiso": String,
        "descripcion": String
    },
    {
        "id": long,
        "nombrePermiso": String,
        "descripcion": String
    }
]

////////////////////////////////////
REASIGNAR PERMISOS A UN ROL
URL: /reasignarPermisos/{nombreRol}
asigna un listado de permisos a el rol {nombreRol}, y elimina aquellas asignaciones que el rol tenia pero que no
estan en el listado
debes enviar una lista de permisos en el body
ejemplo:
[
    {
        "id": long,
        "nombrePermiso": String,
        "descripcion": String
    },
    {
        "id": long,
        "nombrePermiso": String,
        "descripcion": String
    }
] 
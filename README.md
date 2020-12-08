# Gestion-de-usuarios-UMSS
Este proyecto es para ing de software

Funcionalidades backend

OBTENER PERMISOS DE LA BD
URL: /permisos
devuelve una lista con los permisos de la base de datos
cada permiso tiene el siguiente formato:
"id": entero
"nombrePermiso": string
"descripcion": string

COMPROBAR SI UN PERMISO EXISTE EN LA BASE DE DATOS
URL: /comprobarPermiso/{nombrePermiso}
devuelve un dato, true o false, debe pasarse en el enlace el nombre del permiso que quieres
saber si existe en la BD
ej: /comprobar/Visualizar
lo que devuelve es:
"respuesta": true/false

GUARDAR UN PERMISO EN LA BD
URL: /guardarPermiso
permite guardar un permiso que se le pase en la bd
debes enviarle en el body lo siguiente:
"id": entero
"nombrePermiso": string
"descripcion": string

OBTENER ROLES DE LA BD
URL: /roles
devuelve una lista de todos los roles en la bd
cada rol tiene el siguiente formato:
"idRol": entero
"nombreRol": string

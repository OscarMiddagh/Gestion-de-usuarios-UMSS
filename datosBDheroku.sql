INSERT INTO public."rol"(id, nombre_rol) VALUES 
(2000001,'admin'),
(2000002,'delivery'),
(2000003,'Vendedor'),
(2000004,'comprador');

INSERT INTO public."permiso"(id, descripcion, nombre_permiso) VALUES 
(3000001,'con este permiso puedes modificar datos que se implementaran mas adelante','Modificar'),
(3000002,'con este permiso puedes eliminar datos que se implementaran mas adelante','Eliminar'),
(3000003,'con este permiso puedes aumentar datos que se implementaran mas adelante','Aumentar'),
(3000004,'con este permiso puedes visualizar ciertas tablas que se implementaran a futuro','Vizualizar'),
(3000005,'con este permiso puedes publicar en un apartado que se implementara a futuro','Publicar'),
(3000006,'con este permiso puedes comprar articulos de la tienda','Comprar');

INSERT INTO public."det_per_rol"(id_detalle, permiso_id, rol_id) VALUES 
(6000001,3000001,2000001),
(6000002,3000002,2000001),
(6000003,3000003,2000001),
(6000004,3000004,2000001),
(6000005,3000004,2000002),
(6000006,3000005,2000002),
(6000007,3000006,2000002),
(6000008,3000004,2000003),
(6000009,3000005,2000003),
(6000010,3000004,2000004),
(6000011,3000006,2000004);


INSERT INTO public."usuario"(id, apellidos, ciudad, contraseña, correo, direccion, documento_de_identidad, nombres, pais, rol_id) VALUES 
(9000001,'Ramirez','Cochabamba','cbfirospfp','innefohy1704@gmail.com','Avenida america','1616435','Concepcio','Bolivia',2000001),
(9000002,'Morcillo','Oruro','bcdpjgtsus','ogivohe3357@hotmail.com','16 de julio','1234567','Abril','Bolivia',2000001),
(9000003,'Mateos','La Paz','gwtpghquhe','tallicutyzo9@yopmail.com','calle jordan','2334761','Stefan','Bolivia',2000001),
(9000004,'Gomez','Cochabamba','vnpcsrcmki','cacilujadd@gmail.com','avenida circunvalacion','13134545','Eugenia','Bolivia',2000002),
(9000005,'Encinas','Sucre','pstmzcskmr','cabileffi@gmail.com','calle Esteban Arce','3001345','Albert','Bolivia',2000002),
(9000006,'Machado','La Paz','atlfsbxlic','assyquvov2760@hotmail.com','avenida Ayacucho','12124567','Alfredo','Bolivia',2000003),
(9000007,'Lopez','Potosi','jvnfemvnfs','gezepiga44@gmail.com','calle Bolivar','1023455','Juan','Bolivia',2000003),
(9000008,'Rincon','Potosi','nwxwgyjedd','marrin5@hotmail.com','calle Mostajo','6123456','Maria','Bolivia',2000004),
(9000009,'Machado','Cochabamba','nmtrslvzho','alfremachado11@gmail.com','calle Sucre','3467651','Alfredo','Bolivia',2000004),
(9000010,'Calderon','La Paz','fzqrxrelum','jos3calderon6@gmail.com','avenida America','10034967','Jose','Bolivia',2000004),
(9000011,'Suarez','Sucre','xwgyjedduu','benjasrez00@hotmail.com','calle Prada','3321244','Benjamin','Bolivia',2000004);

INSERT INTO public."solicitud"(id, motivo, rol_destino_id, rol_origen_id, usuario_id, estado, fecha) VALUES
(8000001,'quiero tener los controles que tiene un admnistrador',2000001,2000004,9000011,'S/R','2020-09-01'),
(8000002,'Solicito un ascenso de mi puesto actual, creo que ser administrador seria lo mas adecuado',2000001,2000002,9000004,'S/R','2020-10-10'),
(8000003,'Actualmente ya no tengo suficiente con solo comprar, necesito publicar ciertas cosas que quisiera vender',2000003,2000004,9000009,'S/R','2020-11-05'),
(8000004,'No dispongo del tiempo libre para cumplir con las necesidades que representa ser un administrador, por ello solicitu un cambio',2000002,2000001,9000001,'S/R','2020-10-22')
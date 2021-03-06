package com.qualityhunters.Controller;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.ArrayList;

import com.qualityhunters.Model.Rol;
import com.qualityhunters.service.RolServiceAPI;
import com.qualityhunters.Model.Usuario;
import com.qualityhunters.service.UsuarioServiceAPI;
import com.qualityhunters.Model.Permiso;
import com.qualityhunters.service.PermisoServiceAPI;
import com.qualityhunters.Model.DetPerRol;
import com.qualityhunters.service.DetPerRolServiceAPI;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class DetPerRolController {
        
    @Autowired
    private RolServiceAPI rolAPI;
    @Autowired
    private UsuarioServiceAPI usuarioAPI;
    @Autowired
    private PermisoServiceAPI permisoAPI;
    @Autowired
    private DetPerRolServiceAPI detPerRolAPI;
    

    @GetMapping("/permisos/{nombreRol}")
    public ResponseEntity<List<Permiso> > getPermisosByRol(@PathVariable String nombreRol){
        return ResponseEntity.ok(detPerRolAPI.buscarPorRol(nombreRol));
    }
    @PostMapping("/asignar/{nombreRol}")
    public ResponseEntity<DetPerRol> asignarPerRol(@RequestBody Permiso permiso,@PathVariable String nombreRol){
        return ResponseEntity.ok(detPerRolAPI.asignarPermisoRol(permiso, nombreRol));
    }
    @PostMapping("/asignarPermisos/{nombreRol}")
    public ResponseEntity<ArrayList<DetPerRol> > asignarPerRolS(@RequestBody List<Permiso> listPer,@PathVariable String nombreRol){
        return ResponseEntity.ok(detPerRolAPI.asignarPermisoRolS(listPer, nombreRol));
    }

    @PostMapping("/reasignarPermisos/{nombreRol}")
    public ResponseEntity<ArrayList<DetPerRol> > reasignarPerRolS(@RequestBody List<Permiso> listPer,@PathVariable String nombreRol){
        detPerRolAPI.eliminarByRol(nombreRol);
        return ResponseEntity.ok(detPerRolAPI.asignarPermisoRolS(listPer, nombreRol));
    }
    @GetMapping("/permisosMarcados/{nombreRol}")
    public ResponseEntity<ArrayList<Map<String,Object> > > getPermisoMarcado(@PathVariable String nombreRol){
        return ResponseEntity.ok(detPerRolAPI.buscarMarcados(nombreRol));
    }
}
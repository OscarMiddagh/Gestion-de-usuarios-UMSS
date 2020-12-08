package com.qualityhunters.Controller;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import com.qualityhunters.Model.Rol;
import com.qualityhunters.service.RolServiceAPI;
import com.qualityhunters.Model.Usuario;
import com.qualityhunters.service.UsuarioServiceAPI;
import com.qualityhunters.Model.Permiso;
import com.qualityhunters.service.PermisoServiceAPI;

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
public class PermisoController {
        
    @Autowired
    private RolServiceAPI rolAPI;
    @Autowired
    private UsuarioServiceAPI usuarioAPI;
    @Autowired
    private PermisoServiceAPI permisoAPI;

    @PostMapping("/guardarPermiso")
    public ResponseEntity<Permiso> guardarPermiso(@RequestBody Permiso permiso){
        return ResponseEntity.ok(permisoAPI.save(permiso)); 
    }

    @GetMapping("/comprobarPermiso/{nombrePermiso}")
    public ResponseEntity<Model> getPermiso(@PathVariable String nombrePermiso,Model model){
        model.addAttribute("respuesta",permisoAPI.buscarPermiso(nombrePermiso));
        return ResponseEntity.ok(model);
    }
    @GetMapping("/permisos")
    public ResponseEntity<List<Permiso> > getPermisos(){
        return ResponseEntity.ok(permisoAPI.findAll());
    }


}
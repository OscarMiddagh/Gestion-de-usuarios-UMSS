package com.qualityhunters.Controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import com.qualityhunters.Model.Usuario;
import com.qualityhunters.Repository.UsuarioRepository;
import com.qualityhunters.service.UsuarioServiceAPI;
import com.qualityhunters.Model.Rol;
import com.qualityhunters.Repository.RolRepository;
import com.qualityhunters.service.RolServiceAPI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
public class UsuarioController {
    // @GetMapping() 
    @Autowired
    private UsuarioRepository usuarioRepo;
    @Autowired
    private UsuarioServiceAPI usuarioAPI;

    // @GetMapping("/logIn")
    // public String logIn(Model model){     
    //     model.addAttribute("usuario", new Usuario());
    //     return "LogIn"; 
    // }
    @PostMapping("/logIn")
    public Map<String,Object> logInSubmit(@RequestBody Usuario usuario){
        // return model;
        List<Usuario> u = usuarioRepo.existeUsuario(usuario.getCorreo());
        Map<String,Object> respuesta = new HashMap<>();
        boolean logeo = false;
        Usuario user; 
        if(u.size()>0){
            user = u.get(0);
            if(!usuario.getContraseña().equals(user.getContraseña())){
                respuesta.put("msg", "Contraseña invalida");
                respuesta.put("logeo", logeo = true);
                return respuesta;
            }
            respuesta.put("msg", "Te logeaste con exito");
            respuesta.put("rol", user.getRol());
            respuesta.put("logeo", logeo);
        }else{
            respuesta.put("msg", "El usuario no existe");
            respuesta.put("logeo", logeo);
            return respuesta;
        }
        return respuesta;
    }
    @PostMapping("/changeRol/{idUsuario}")
    public ResponseEntity<Usuario> changeRol(@RequestBody Rol rol,@PathVariable long idUsuario){
        Optional<Usuario> user = usuarioAPI.findById(idUsuario);
        Usuario aux = user.get();
        aux.setRol(rol);
        usuarioAPI.update(aux);
        return ResponseEntity.ok(usuarioAPI.findById(idUsuario).get());
    }

}
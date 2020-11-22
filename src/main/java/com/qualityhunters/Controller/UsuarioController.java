package com.qualityhunters.Controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.qualityhunters.Model.Usuario;
import com.qualityhunters.Repository.UsuarioRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class UsuarioController {
    // @GetMapping() 
    @Autowired
    private UsuarioRepository usuarioRepo;

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
        Usuario user; 
        if(u.size()>0){
            user = u.get(0);
            if(!usuario.getContraseña().equals(user.getContraseña())){
                respuesta.put("msg", "Contraseña invalida");
                respuesta.put("logeo", false);
                respuesta.put("idUsuario",usuario.getId());
                return respuesta;
            }
            respuesta.put("msg", "Te logeaste con exito");
            respuesta.put("rol", user.getRol());
            respuesta.put("logeo", true);
        }else{
            respuesta.put("msg", "El usuario no existe");
            respuesta.put("logeo", false);
            return respuesta;
        }
        return respuesta;
    }
    /*@PostMapping("/changeRol/{idUsuario}")
    public ResponseEntity<Usuario> changeRol(@RequestBody Rol rol,@PathVariable long idUsuario){
        //usuarioAPI.cambiarRol(rol,idUsuario);
        Optional<Usuario> user = usuarioAPI.findById(idUsuario);
        Usuario aux = user.get();
        aux.setRol(rol);
        usuarioAPI.update(aux);
        return ResponseEntity.ok(usuarioAPI.findById(idUsuario).get());
    }*/

}
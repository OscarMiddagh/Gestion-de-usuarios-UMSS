package com.qualityhunters.Controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.qualityhunters.Model.Usuario;
import com.qualityhunters.Repository.UsuarioRepository;
import com.qualityhunters.service.UsuarioServiceAPI;

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
@CrossOrigin(origins = "*", allowedHeaders = "*")
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
        Usuario user; 
        if(u.size()>0){
            user = u.get(0);
            if(!usuario.getContraseña().equals(user.getContraseña())){
                respuesta.put("error", "Contraseña invalida");
                return respuesta;
            }
            respuesta.put("msg", "Te logeaste con exito");
            respuesta.put("rol", user.getRol());
        }else{
            respuesta.put("error", "El usuario no existe");
            return respuesta;
        }
        return respuesta;
    }
    // @GetMapping("/verif mail={correo} pass={password}")
    // public ResponseEntity<Model> verif(@PathVariable String correo,@PathVariable String password,Model model){
    //     model.addAttribute("respuesta",usuarioAPI.confirmarDatos(correo,password));
    //     return ResponseEntity.ok(model);
    // }

}
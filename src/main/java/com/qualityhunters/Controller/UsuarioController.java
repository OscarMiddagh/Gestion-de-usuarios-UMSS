package com.qualityhunters.Controller;

import java.util.List;

import com.qualityhunters.Model.Usuario;
import com.qualityhunters.Repository.UsuarioRepository;
import com.qualityhunters.service.UsuarioServiceAPI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
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

    @GetMapping("/logIn")
    public String logIn(Model model){     
        model.addAttribute("usuario", new Usuario());
        return "LogIn"; 
    }
    @PostMapping("/logIn")
    public String logInSubmit(@ModelAttribute Usuario usuario,Model model){
        
        boolean existe = false;
        List<Usuario> u = usuarioRepo.existeUsuario(usuario.getCorreo(), usuario.getContraseña());
        String nombre = "";
        if(u.size()>0){
            existe =true;
            nombre = u.get(0).getNombres()+" "+ u.get(0).getApellidos();
        }
        model.addAttribute("existe", existe);
        model.addAttribute("nombre", nombre);
        return "InicioSesionExitoso";
    }
    @GetMapping("/verif mail={correo} pass={password}")
    public ResponseEntity<Model> verif(@PathVariable String correo,@PathVariable String password,Model model){
        model.addAttribute("respuesta",usuarioAPI.confirmarDatos(correo,password));
        return ResponseEntity.ok(model);
    }

}
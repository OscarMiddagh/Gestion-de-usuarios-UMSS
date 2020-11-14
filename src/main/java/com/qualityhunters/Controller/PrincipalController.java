package com.qualityhunters.Controller;

import java.util.List;
import java.util.Optional;

import com.qualityhunters.Model.Rol;
import com.qualityhunters.Model.Sistema;
// import com.qualityhunters.Model.Sistema;
import com.qualityhunters.Model.Solicitud;
import com.qualityhunters.Model.Usuario;
import com.qualityhunters.Repository.RolRepository;
import com.qualityhunters.Repository.SolicitudRepository;
// import com.qualityhunters.Repository.SistemaRepository;
// import com.qualityhunters.Repository.SolicitudRepository;
import com.qualityhunters.Repository.UsuarioRepository;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

@RestController

// @RequestMapping("/")
public class PrincipalController {

    @Autowired
    private UsuarioRepository usuarioRepo;
    @Autowired
    private RolRepository rolRepo;

    @RequestMapping("/api")
    public String index(Model model){ 
        return ""; 
    }


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

    @GetMapping("/registrarse")
    public String registrarse(Model model){
        return "EnDesarrollo"; 
    }
    
}

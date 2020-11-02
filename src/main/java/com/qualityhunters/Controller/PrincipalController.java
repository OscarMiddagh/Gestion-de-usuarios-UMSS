package com.qualityhunters.Controller;

import com.qualityhunters.Model.Usuario;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
// @RequestMapping("/")
public class PrincipalController {
    @RequestMapping("/")
    public String index(Model model){
        return "EnDesarrollo"; 
    }
    
    @GetMapping("/generar_respuesta")
    public String generar(Model model){
        return "GenerarRespuesta"; 
    }
    @GetMapping("/sol_cambio_rol")
    public String solicitudCambioRol(Model model){
        return "SolicitudCambioRol"; 
    }
    @PostMapping("/sol_cambio_rol")
    public String solicitudCambioRolSubmit(Model model){
        return "EnDesarrollo"; 
    }
    @GetMapping("/logIn")
    public String logIn(Model model){     
        model.addAttribute("usuario", new Usuario());
        return "LogIn"; 
    }
    @PostMapping("/logIn")
    public String logInSubmit(@ModelAttribute Usuario usuario,Model model){
        return "InicioSesionExitoso";
    }
    @GetMapping("/registrarse")
    public String registrarse(Model model){
        return "EnDesarrollo"; 
    }
    
}

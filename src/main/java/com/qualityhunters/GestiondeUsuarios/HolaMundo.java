package com.qualityhunters.GestiondeUsuarios;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.qualityhunters.Model.Usuario;

import org.springframework.stereotype.Controller;

// @Controller
// public class HolaMundo {
//     @GetMapping("/")
//     public String index(Model model){
//         return "index"; 
//     }
    
//     @GetMapping("/generar_respuesta")
//     public String generar(Model model){
//         return "GenerarRespuesta"; 
//     }
//     @GetMapping("/logIn")
//     public String logIn(Model model){     
//         model.addAttribute("usuario", new Usuario());
//         return "LogIn"; 
//     }
//     @PostMapping("/logIn")
//     public String logInSubmit(@ModelAttribute Usuario usuario,Model model){
//         return "InicioSesionExitoso";
//     }
// }

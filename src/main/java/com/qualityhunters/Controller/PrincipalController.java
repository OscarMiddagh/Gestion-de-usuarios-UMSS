package com.qualityhunters.Controller;

import java.util.List;

import javax.validation.Valid;

// import com.qualityhunters.Model.Sistema;
import com.qualityhunters.Model.Solicitud;
import com.qualityhunters.Model.Usuario;
// import com.qualityhunters.Repository.SistemaRepository;
// import com.qualityhunters.Repository.SolicitudRepository;
import com.qualityhunters.Repository.UsuarioRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
// @RequestMapping("/")
public class PrincipalController {

    @Autowired
    private UsuarioRepository usuarioRepo;
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
        model.addAttribute("solicitudCambioRol", new Solicitud());
        return "SolicitudCambioRol"; 
    }
    @PostMapping("/sol_cambio_rol")
    public String solicitudCambioRolSubmit(@Valid Solicitud solicitud, Model model){
        // Sistema sis;
        // Usuario user;

        // new Solicitud(sistema, usuario, motivo, rol, rolo);
        // solicitud.setSistema();
        // solicitud.setUsuario(usuario);
        // solicitudRepo.save(solicitud);
        return "SolicitudEnviada"; 
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

package com.qualityhunters.Controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

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
    @Autowired
    private SolicitudRepository solicitudRepo;
    @Autowired
    private RolRepository rolRepo;
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
        List<Rol> roles = rolRepo.rolesPorSubsistema(1000002);
        model.addAttribute("solicitudCambioRol", new Solicitud());
        model.addAttribute("roles",roles);
        return "SolicitudCambioRol"; 
    }
    @PostMapping("/sol_cambio_rol")
    public String solicitudCambioRolSubmit(@ModelAttribute Solicitud solicitud, Model model){
        long idUsuarioMock = 1;
        Optional<Usuario> user = usuarioRepo.findById(idUsuarioMock);
        Sistema sis = user.get().getSistema();
        Rol rolO = user.get().getRol();
        solicitud.setRolOrigen(rolO);
        solicitud.setSistema(sis);
        solicitud.setUsuario(user.get());
        solicitudRepo.save(solicitud);
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

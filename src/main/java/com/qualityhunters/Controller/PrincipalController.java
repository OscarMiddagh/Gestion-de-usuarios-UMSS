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
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
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
    
    @GetMapping("/{subsistema}/generar_respuesta/{idSolicitud}")
    public String generar(@PathVariable long subsistema,@PathVariable long idSolicitud,Model model){ 
        Optional<Solicitud>  sol= solicitudRepo.findById(idSolicitud);
        Sistema subsis = new Sistema();
        subsis.setId(subsistema);
        List<Rol> roles = rolRepo.rolesPorSubsistema(subsis);
        // model.addAttribute("solicitud", new Solicitud());
        Usuario user = usuarioRepo.findById(sol.get().getUsuario().getId()).get();
        String nombreSolicitante = user.getNombres()+" " + user.getApellidos();
        Rol rolD = sol.get().getRolDestino();
        model.addAttribute("roles",roles);
        model.addAttribute("nombreSolicitante", nombreSolicitante);
        model.addAttribute("rolDestino", rolD.getNombreRol());
        model.addAttribute("motivo", sol.get().getMotivo());
        return "GenerarRespuesta"; 
    }
    @GetMapping("/{subsistema}/{idUsuario}/sol_cambio_rol")
    public String solicitudCambioRol(@PathVariable long subsistema,@PathVariable long idUsuario,Model model){
        Sistema subsis = new Sistema();
        subsis.setId(subsistema);
        List<Rol> roles = rolRepo.rolesPorSubsistema(subsis);
        model.addAttribute("solicitud", new Solicitud());
        model.addAttribute("roles",roles);
        return "SolicitudCambioRol"; 
    }
    @PostMapping("/{subsistema}/{idUsuario}/sol_cambio_rol")
    public String solicitudCambioRolSubmit(@PathVariable long subsistema,@PathVariable long idUsuario, @ModelAttribute Solicitud solicitud, Model model){
        // long idUsuarioMock = 9000001;
        Optional<Usuario> user = usuarioRepo.findById(idUsuario);
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

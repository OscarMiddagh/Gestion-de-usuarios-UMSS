package com.qualityhunters.Controller;

import java.util.List;
import java.util.Optional;

import com.qualityhunters.Model.Rol;
import com.qualityhunters.Model.Sistema;
import com.qualityhunters.Model.Solicitud;
import com.qualityhunters.Model.Usuario;
import com.qualityhunters.Repository.RolRepository;
import com.qualityhunters.Repository.SolicitudRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
public class SolicitudController {
    
    @Autowired
    private SolicitudRepository solicitudRepo;
    
    @Autowired
    private RolRepository rolRepo;
    
    @GetMapping("/solicitud/{idSolicitud}")
    public ResponseEntity<Solicitud> getSolicitud(@PathVariable long idSolicitud){
        Optional<Solicitud>  sol= solicitudRepo.findById(idSolicitud);
        // Solicitud respuesta = new Solicitud();
        return ResponseEntity.ok(sol.get());
    }
    @GetMapping("/solicitudes")
    public List<Solicitud> getSolicitudes(){
        return solicitudRepo.findAll();
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
    @GetMapping("/{subsistema}/generar_respuesta/{idSolicitud}")
    public Model generar(@PathVariable long subsistema,@PathVariable long idSolicitud,Model model){ 
        Optional<Solicitud>  sol= solicitudRepo.findById(idSolicitud);
        Sistema subsis = new Sistema();
        subsis.setId(subsistema);
        // List<Rol> roles = rolRepo.rolesPorSubsistema(subsis);
        // model.addAttribute("solicitud", new Solicitud());
        // Usuario user = usuarioRepo.findById(sol.get().getUsuario().getId()).get();
        // String nombreSolicitante = user.getNombres()+" " + user.getApellidos();
        // Rol rolD = sol.get().getRolDestino();
        // model.addAttribute("roles",roles);
        // model.addAttribute("nombreSolicitante", nombreSolicitante);
        // model.addAttribute("rolDestino", rolD.getNombreRol());
        // model.addAttribute("motivo", sol.get().getMotivo());
        return model; 
    }
    @PostMapping("/{subsistema}/{idUsuario}/sol_cambio_rol")
    public String solicitudCambioRolSubmit(@PathVariable long subsistema,@PathVariable long idUsuario, @ModelAttribute Solicitud solicitud, Model model){
        // long idUsuarioMock = 9000001;
        // Optional<Usuario> user = usuarioRepo.findById(idUsuario);
        // // Sistema sis = user.get().getSistema();
        // solicitud.setUsuario(user.get());
        solicitudRepo.save(solicitud);
        return "SolicitudEnviada"; 
    }
}

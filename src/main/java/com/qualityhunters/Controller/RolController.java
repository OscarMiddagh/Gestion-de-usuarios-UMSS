package com.qualityhunters.Controller;

import java.util.List;
import java.util.Map;

import com.qualityhunters.Model.Rol;
import com.qualityhunters.service.RolServiceAPI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RolController {
        
    @Autowired
    private RolServiceAPI rolAPI;

    @GetMapping("/roles")
    public ResponseEntity<List<Map<String,Object>>> getRoles(Model model){
        return ResponseEntity.ok(rolAPI.findAll());
    }
    
    @GetMapping("/rolNot/{idRol}")
    public ResponseEntity<List<Rol> > getRolNot(@PathVariable long idRol){
        List<Rol>  rols= rolAPI.findAllExcept(idRol);
        return ResponseEntity.ok(rols);
    }

    // @GetMapping("/{subsistema}/generar_respuesta/{idSolicitud}")
    // public Model generar(@PathVariable long subsistema,@PathVariable long idSolicitud,Model model){ 
    //     Optional<Solicitud>  sol= solicitudRepo.findById(idSolicitud);
    //     Sistema subsis = new Sistema();
    //     subsis.setId(subsistema);
    //     List<Rol> roles = rolRepo.rolesPorSubsistema(subsis);
    //     // model.addAttribute("solicitud", new Solicitud());
    //     Usuario user = usuarioRepo.findById(sol.get().getUsuario().getId()).get();
    //     String nombreSolicitante = user.getNombres()+" " + user.getApellidos();
    //     Rol rolD = sol.get().getRolDestino();
    //     model.addAttribute("roles",roles);
    //     model.addAttribute("nombreSolicitante", nombreSolicitante);
    //     model.addAttribute("rolDestino", rolD.getNombreRol());
    //     model.addAttribute("motivo", sol.get().getMotivo());
    //     return model; 
    // }
    // @GetMapping("/{subsistema}/{idUsuario}/sol_cambio_rol")
    // public String solicitudCambioRol(@PathVariable long subsistema,@PathVariable long idUsuario,Model model){
    //     Sistema subsis = new Sistema();
    //     subsis.setId(subsistema);
    //     List<Rol> roles = rolRepo.rolesPorSubsistema(subsis);
    //     model.addAttribute("solicitud", new Solicitud());
    //     model.addAttribute("roles",roles);
    //     return "SolicitudCambioRol"; 
    // }
    // @PostMapping("/{subsistema}/{idUsuario}/sol_cambio_rol")
    // public String solicitudCambioRolSubmit(@PathVariable long subsistema,@PathVariable long idUsuario, @ModelAttribute Solicitud solicitud, Model model){
    //     // long idUsuarioMock = 9000001;
    //     Optional<Usuario> user = usuarioRepo.findById(idUsuario);
    //     // Sistema sis = user.get().getSistema();
    //     solicitud.setUsuario(user.get());
    //     solicitudRepo.save(solicitud);
    //     return "SolicitudEnviada"; 
    // }
}
package com.qualityhunters.Controller;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import com.qualityhunters.Model.Rol;
import com.qualityhunters.Model.Solicitud;
import com.qualityhunters.Model.Usuario;
import com.qualityhunters.service.RolServiceAPI;
import com.qualityhunters.service.SolicitudServiceAPI;
import com.qualityhunters.service.UsuarioServiceAPI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class SolicitudController {
    
    @Autowired
    private SolicitudServiceAPI solicitudAPI;
    @Autowired
    private UsuarioServiceAPI usuarioAPI;
    @Autowired 
    private RolServiceAPI rolAPI;
    
    //devuelve un Model
    @GetMapping("/solicitud/{idSolicitud}")
    public ResponseEntity<Model> getSolicitud(@PathVariable long idSolicitud,Model model){
        Model  sol= solicitudAPI.findById(idSolicitud,model);
        return ResponseEntity.ok(sol);
    }
    @GetMapping("/solicitudes")
    public List<Map<String,Object>> getSolicitudes(Model model){        
        return solicitudAPI.findAll();
    }
        
    @GetMapping("/{idUsuario}/sol_cambio_rol")
    public ResponseEntity<Model> solicitudCambioRol(@PathVariable long idUsuario,Model model){
        model.addAttribute("motivo"); 
        model.addAttribute("idRolDestino"); 
        model.addAttribute("solicitud"); 
        model.addAttribute("roles", rolAPI.findAll());
        return ResponseEntity.ok(model);
    }
    @GetMapping("/enviado/{idUsuario}")
    public ResponseEntity<Boolean> getEnviado(@PathVariable long idUsuario){
        List<Solicitud> envSol = solicitudAPI.hayEnviado(idUsuario);
        Boolean ans= false;
        if(envSol.size()>0) ans=true;
        return ResponseEntity.ok(ans);
    }
    // @GetMapping("/{subsistema}/generar_respuesta/{idSolicitud}")
    // public Model generar(@PathVariable long subsistema,@PathVariable long idSolicitud,Model model){ 
    //     Optional<Solicitud>  sol= solicitudRepo.findById(idSolicitud);
    //     Sistema subsis = new Sistema();
    //     subsis.setId(subsistema);
    //     // List<Rol> roles = rolRepo.rolesPorSubsistema(subsis);
    //     // model.addAttribute("solicitud", new Solicitud());
    //     // Usuario user = usuarioRepo.findById(sol.get().getUsuario().getId()).get();
    //     // String nombreSolicitante = user.getNombres()+" " + user.getApellidos();
    //     // Rol rolD = sol.get().getRolDestino();
    //     // model.addAttribute("roles",roles);
    //     // model.addAttribute("nombreSolicitante", nombreSolicitante);
    //     // model.addAttribute("rolDestino", rolD.getNombreRol());
    //     // model.addAttribute("motivo", sol.get().getMotivo());
    //     return model; 
    // }
    @PostMapping("/{idUsuario}/sol_cambio_rol")
    public ResponseEntity<Solicitud> solicitudCambioRolSubmit(@PathVariable long idUsuario, Model model){
        // long idUsuarioMock = 9000001;
        Optional<Usuario> user = usuarioAPI.findById(idUsuario);
        Optional<Rol> rolDestino = rolAPI.findById(Long.parseLong((String) model.getAttribute("idRolDestino")));
        Solicitud solicitud =  new Solicitud();
        // // Sistema sis = user.get().getSistema();
        //Aumentar el estado y la fecha
        solicitud.setUsuario(user.get());
        solicitud.setRolDestino(rolDestino.get());
        solicitud.setMotivo(model.getAttribute("motivo").toString());
        return ResponseEntity.ok(solicitudAPI.save(solicitud)); 
    }
}

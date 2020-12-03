package com.qualityhunters.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.qualityhunters.Model.Rol;
import com.qualityhunters.Repository.RolRepository;


@Service
public class RolServiceAPI {
    private RolRepository rolRepository;
    private Logger logger = LoggerFactory.getLogger(RolServiceAPI.class);
    
    public RolServiceAPI(RolRepository rolRepository){
        this.rolRepository = rolRepository;
    }
    public List<Map<String,Object>> findAll(){
        logger.debug("Request to get Rol");
        List<Rol> roles = rolRepository.findAll();
        List<Map<String,Object>> res = new ArrayList<>();
        Map<String,Object> r;
        for (Rol rol : roles) {
            r = new HashMap<>();
            r.put("idRol",rol.getId());
            r.put("nombreRol",rol.getNombreRol());
            res.add(r);
        }
        return res;
    }
    public Optional<Rol> findById(Long id){
        logger.debug("Request to get Rol by id : {}",id);
        Optional<Rol> rol = rolRepository.findById(id);
        return rol;
    }
    public Rol save(Rol rol){
        return rolRepository.save(rol);
    }
    public Rol update(Rol rol){
        return rolRepository.save(rol);
    }
    public void delete(Rol rol){
        rolRepository.delete(rol);
    }
	public List<Rol> findAllExcept(long idRol) {
		return rolRepository.findAllExcept(idRol);
	}
}

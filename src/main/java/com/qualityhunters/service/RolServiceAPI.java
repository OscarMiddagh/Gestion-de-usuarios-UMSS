package com.qualityhunters.service;

import java.util.List;
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
    public List<Rol> findAll(){
        logger.debug("Request to get Rol");
        return rolRepository.findAll();
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
}

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
import com.qualityhunters.Model.Permiso;
import com.qualityhunters.Repository.PermisoRepository;
import com.qualityhunters.Model.DetPerRol;
import com.qualityhunters.Repository.DetPerRolRepository;

@Service
public class DetPerRolServiceAPI {
    private DetPerRolRepository detPerRolRepository;
    private Logger logger = LoggerFactory.getLogger(RolServiceAPI.class);
    
    public DetPerRolServiceAPI(DetPerRolRepository detPerRolRepository){
        this.detPerRolRepository = detPerRolRepository;
    }
    public DetPerRol save(DetPerRol detPerRol){
        return detPerRolRepository.save(detPerRol);
    }
    public DetPerRol update(DetPerRol detPerRol){
        return detPerRolRepository.save(detPerRol);
    }
    public void delete(DetPerRol detPerRol){
        detPerRolRepository.delete(detPerRol);
    }
    public List<Permiso> buscarPorRol(String nombreRol){
        return detPerRolRepository.findByRol(nombreRol);
    }
}

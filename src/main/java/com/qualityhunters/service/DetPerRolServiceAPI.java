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
    private RolRepository rolRepository;
    private Logger logger = LoggerFactory.getLogger(DetPerRolServiceAPI.class);
    
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
    public DetPerRol asignarPermisoRol(Permiso permiso,String nombreRol){
        return save(new DetPerRol(detPerRolRepository.findRolByName(nombreRol).get(0),permiso));
    }
    public ArrayList<DetPerRol> asignarPermisoRolS(List<Permiso> listPer,String nombreRol){
        ArrayList<DetPerRol> res = new ArrayList<DetPerRol>();
        for(int i=0;i<listPer.size();i++){
            res.add(save(new DetPerRol(detPerRolRepository.findRolByName(nombreRol).get(0),listPer.get(i))));
        }
        return res;
    }
    public void eliminarByRol(String nombreRol){
        List<DetPerRol> listDet = detPerRolRepository.findDetByRol(nombreRol);
        for(int i=0;i<listDet.size();i++){
            delete(listDet.get(i));
        }
    }
}

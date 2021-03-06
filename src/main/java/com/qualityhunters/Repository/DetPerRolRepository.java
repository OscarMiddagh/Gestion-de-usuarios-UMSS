package com.qualityhunters.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

import com.qualityhunters.Model.Rol;
import com.qualityhunters.Model.Permiso;
import com.qualityhunters.Model.DetPerRol;


@Repository
public interface DetPerRolRepository extends JpaRepository <DetPerRol , Long > {
    @Query("select p from Permiso p,Rol r,DetPerRol d where r.nombreRol = :nombre and d.rol.id=r.id and d.permiso.id=p.id")
    List<Permiso> findByRol(@Param("nombre") String nombreRol);


    @Query("select r from Rol r where r.nombreRol = :nombre")
    List<Rol> findRolByName(@Param("nombre") String nombreRol);

    @Query("select d from DetPerRol d where d.rol.nombreRol = :nombre")
    List<DetPerRol> findDetByRol(@Param("nombre") String nombreRol);

    @Query("select p from Permiso p")
    List<Permiso> findAllPermiso();
}
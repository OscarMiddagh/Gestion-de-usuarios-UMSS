package com.qualityhunters.Repository;

import com.qualityhunters.Model.Permiso;
import com.qualityhunters.Model.Rol;
import com.qualityhunters.Model.DetPerRol;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.query.Param;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.Modifying;


import java.util.List;

@Repository
public interface PermisoRepository extends JpaRepository<Permiso, Long> {
    @Query("select p from Permiso p where p.nombrePermiso = :nombre")
    List<Permiso> findPermiso(@Param("nombre") String nombre);
    
    /*@Query("select d from DetallePermisoRol d where d.rol.nombreRol= :nombre")
    List<DetallePermisoRol> asignacionesRol(@Param("nombre") String nombreRol);*/
}
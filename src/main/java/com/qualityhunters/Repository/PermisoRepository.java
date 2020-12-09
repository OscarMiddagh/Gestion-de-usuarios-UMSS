package com.qualityhunters.Repository;

import com.qualityhunters.Model.Permiso;
import com.qualityhunters.Model.Rol;
import com.qualityhunters.Model.DetallePermisoRol;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.query.Param;

import org.springframework.data.jpa.repository.Query;

import java.util.List;

@Repository
public interface PermisoRepository extends JpaRepository<Permiso, Long> {
    @Query("select p from Permiso p where p.nombrePermiso = :nombre")
    List<Permiso> findPermiso(@Param("nombre") String nombre);
    
    @Query("select p from Permiso p,Rol r,DetallePermisoRol d where r.nombreRol = :nombre and d.rol.id=r.id and d.permiso.id=p.id")
    List<Permiso> findByRol(@Param("nombre") String nombreRol);
    
}
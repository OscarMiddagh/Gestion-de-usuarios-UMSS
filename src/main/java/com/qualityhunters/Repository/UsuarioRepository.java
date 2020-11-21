package com.qualityhunters.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

import com.qualityhunters.Model.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository < Usuario, Long > {
    
    @Query("select u from Usuario u where u.correo = :correo ")
    List<Usuario> existeUsuario(@Param("correo") String correo);
    
    // @Query("select u from Usuario u where u.correo = :correo AND u.contraseña = :contraseña")
    // List<Usuario> existeUsuario(@Param("correo") String correo, @Param("contraseña") String contraseña);

    List<Usuario> findByCorreo(String correo);
}
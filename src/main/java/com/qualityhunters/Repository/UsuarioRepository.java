package com.qualityhunters.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.qualityhunters.Model.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository < Usuario, Long > {

}
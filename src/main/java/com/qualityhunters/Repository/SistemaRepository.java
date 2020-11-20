package com.qualityhunters.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.qualityhunters.Model.Sistema;

@Repository
public interface SistemaRepository extends JpaRepository < Sistema, Long > {
}

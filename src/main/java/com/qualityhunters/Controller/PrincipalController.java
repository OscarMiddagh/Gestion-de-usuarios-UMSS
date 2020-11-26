package com.qualityhunters.Controller;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

@RestController

// @RequestMapping("/")
public class PrincipalController {

    @RequestMapping("/api")
    public String index(Model model){ 
        return ""; 
    }    
}
    
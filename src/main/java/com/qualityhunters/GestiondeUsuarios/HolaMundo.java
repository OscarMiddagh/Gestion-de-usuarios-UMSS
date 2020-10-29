package com.qualityhunters.GestiondeUsuarios;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.stereotype.Controller;

@Controller
public class HolaMundo {
    @RequestMapping("/")
    public String index(Model model){
        return "index"; 
    }
}

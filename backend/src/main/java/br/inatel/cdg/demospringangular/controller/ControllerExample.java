package br.inatel.cdg.demospringangular.controller;

import br.inatel.cdg.demospringangular.modelo.SimpleMessage;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerExample {

    @RequestMapping("/simple-message")
    public SimpleMessage getSimpleMessage(){
        return new SimpleMessage("Hello Spring Boot + Angular");
    }

}

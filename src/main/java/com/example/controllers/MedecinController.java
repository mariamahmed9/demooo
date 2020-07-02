package com.example.controllers;

import com.example.models.Consultation;
import com.example.models.Medecin;
import com.example.repositories.MedecinRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;
import java.util.Optional;

public class MedecinController {
    
    @Autowired
    MedecinRepository medecinRepository;

    @RequestMapping(method= RequestMethod.GET, value="/medecins")
    public List<Medecin> medecin() {
        return medecinRepository.findAll();
    }

    @RequestMapping(method=RequestMethod.POST, value="/medecins")
    public Medecin save(@RequestBody Medecin medecin) {
        medecinRepository.save(medecin);

        return medecin;
    }

    @RequestMapping(method=RequestMethod.GET, value="/medecins/{id}")
    public Optional<Medecin> show(@PathVariable String id) {
        return medecinRepository.findById(id);
    }

    @RequestMapping(method=RequestMethod.PUT, value="/medecins/{id}")
    public Medecin update(@PathVariable String id, @RequestBody Medecin medecin) {
        Optional<Medecin> optmedecin = medecinRepository.findById(id);
        Medecin c = optmedecin.get();
        if(medecin.getNom() != null)
            c.setNom(medecin.getNom());

        if(medecin.getSpecialité() != null)
            c.setSpecialité(medecin.getSpecialité());

        if(medecin.getAddress() != null)
            c.setAddress(medecin.getAddress());

        if(medecin.getTel() != null)
            c.setTel(medecin.getTel());
        
        medecinRepository.save(c);
        return c;
    }

    @RequestMapping(method=RequestMethod.DELETE, value="/medecins/{id}")
    public String delete(@PathVariable String id) {
        Optional<Medecin> optmedecin = medecinRepository.findById(id);
        Medecin medecin = optmedecin.get();
        medecinRepository.delete(medecin);

        return "";
    }
}

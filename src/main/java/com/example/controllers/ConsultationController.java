package com.example.controllers;


import com.example.models.Consultation;
import com.example.models.Patient;
import com.example.repositories.ConsultationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class ConsultationController {

    @Autowired
    ConsultationRepository consultationRepository;

    @RequestMapping(method= RequestMethod.GET, value="/consultations")
    public Iterable<Consultation> consultation() {
        return consultationRepository.findAll();
    }


    @RequestMapping(method=RequestMethod.POST, value="/consultations")
    public Consultation save(@RequestBody Consultation consultation) {
        consultationRepository.save(consultation);

        return consultation;
    }

    @RequestMapping(method=RequestMethod.GET, value="/consultations/{id}")
    public Optional<Consultation> show(@PathVariable String id) {
        return consultationRepository.findById(id);
    }


    @RequestMapping(method=RequestMethod.PUT, value="/consultations/{id}")
    public Consultation update(@PathVariable String id, @RequestBody Consultation consultation) {
        Optional<Consultation> optconsultation = consultationRepository.findById(id);
        Consultation c = optconsultation.get();
        if(consultation.getTitre() != null)
            c.setTitre(consultation.getTitre());

        if(consultation.getObservation() != null)
            c.setObservation(consultation.getObservation());

        if(consultation.getDate() != null)
            c.setDate(consultation.getDate());

        if(consultation.getDuration() != null)
            c.setDuration(consultation.getDuration());

        if(consultation.getCost() != null)
            c.setCost(consultation.getCost());

        if(consultation.getDiagnostic() != null)
            c.setDiagnostic(consultation.getDiagnostic());


        consultationRepository.save(c);
        return c;
    }


    @RequestMapping(method=RequestMethod.DELETE, value="/consultations/{id}")
    public String delete(@PathVariable String id) {
        Optional<Consultation> optconsultation = consultationRepository.findById(id);
        Consultation consultation = optconsultation.get();
        consultationRepository.delete(consultation);

        return "";
    }


}

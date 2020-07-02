package com.example.controllers;

import com.example.models.Patient;
import com.example.repositories.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import java.util.Optional;

@RestController
public class PatientController {

    @Autowired
    PatientRepository patientRepository;

    @RequestMapping(method=RequestMethod.GET, value="/patients")
    public Iterable<Patient> patient() {
        return patientRepository.findAll();
    }

    @RequestMapping(method=RequestMethod.POST, value="/patients")
    public Patient save(@RequestBody Patient patient) {
        patientRepository.save(patient);

        return patient;
    }

    @RequestMapping(method=RequestMethod.GET, value="/patients/{id}")
    public Optional<Patient> show(@PathVariable String id) {
        return patientRepository.findById(id);
    }

    @RequestMapping(method=RequestMethod.PUT, value="/patients/{id}")
    public Patient update(@PathVariable String id, @RequestBody Patient patient) {
        Optional<Patient> optpatient = patientRepository.findById(id);
        Patient c = optpatient.get();
        if(patient.getNom() != null)
            c.setNom(patient.getNom());

        if(patient.getPrenom() != null)
            c.setPrenom(patient.getPrenom());

        if(patient.getSexe() != null)
            c.setSexe(patient.getSexe());
        if(patient.getBirth_date() != null)
            c.setBirth_date(patient.getBirth_date());
        if(patient.getBirth_place() != null)
            c.setBirth_place(patient.getBirth_place());

        if(patient.getNationalite() != null)
            c.setNationalite(patient.getNationalite());

        if(patient.getVille() != null)
            c.setVille(patient.getVille());
        if(patient.getContry() != null)
            c.setContry(patient.getContry());

        if(patient.getAdress_1() != null)
            c.setAdress_1(patient.getAdress_1());

        if(patient.getAdress_2() != null)
            c.setAdress_2(patient.getAdress_2());


        if(patient.getTel1() != null)
            c.setTel1(patient.getTel1());

        if(patient.getTel2() != null)
            c.setTel2(patient.getTel2());

        if(patient.getGroupe_sanguin() != null)
            c.setGroupe_sanguin(patient.getGroupe_sanguin());
        if(patient.getProfession() != null)
            c.setProfession(patient.getProfession());

        if(patient.getBirth_rank() != null) {
            c.setBirth_rank(patient.getBirth_rank());
        }

        if(patient.getWhatapp() != null)
            c.setWhatapp(patient.getWhatapp());

        if(patient.getWire() != null)
            c.setWire(patient.getWire());
        patientRepository.save(c);
        return c;
    }

    @RequestMapping(method=RequestMethod.DELETE, value="/patients/{id}")
    public String delete(@PathVariable String id) {
        Optional<Patient> optpatient = patientRepository.findById(id);
        Patient patient = optpatient.get();
        patientRepository.delete(patient);

        return "";
    }
}

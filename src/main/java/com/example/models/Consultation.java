package com.example.models;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;

@Document(collection = "consultations")
@Data
@AllArgsConstructor @NoArgsConstructor @ToString
public class Consultation {
    @Id
    private String id;
    private String titre;
    private String observation;
    private Date date;
    private Long duration;
    private Double cost;
    private String diagnostic;

    @DBRef
    private Patient patient;
    private Medecin medecin;
    private Collection<Prescribe> prescribes=new ArrayList<>();
    private Collection<Diagnostic> diagnostics=new ArrayList<>();
    private Collection<Conducted_physical_exam> conducted_physical_exams =new ArrayList<>();



}

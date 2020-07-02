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

@Document(collection = "patients")
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Patient {
    @Id
    private String id;
    private String nom;
    private String prenom;
    private String sexe;
    private Date birth_date;
    private String birth_place;
    private String nationalite;
    private String ville;
    private String contry;
    private String adress_1;
    private String adress_2;
    private String tel1;
    private String tel2;
    private String groupe_sanguin;
    private String profession;
    private Long birth_rank;
    private String whatapp;
    private String wire;
    @DBRef
    private Collection<Consultation> consultations=new ArrayList<>();

}

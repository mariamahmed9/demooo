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

@Document(collection = "Medecins")
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Medecin {
    @Id
    private String id;
    private String nom;
    private String specialité;
    private String address;
    private String tel;
    @DBRef
    private Collection<Consultation> consultations=new ArrayList<>();

}

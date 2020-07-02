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

@Document(collection = "maladies")
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Malady {
    @Id
    private String id;
    private String nom;
    private String code;
    private String catagory;
    private String description;
    private String sub_catagory;

    @DBRef
    private Organ organ;
    private Collection<Diagnostic> diagnostics=new ArrayList<>();


}

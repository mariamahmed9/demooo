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

@Document(collection = "physical_exams")
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Physical_exam {
    @Id
    private String id;
    private String nom;
    private String catagory;
    private String sub_catagory;
    private String description;
    private String unit;
    private String unit_label;
    private String unit_type;
    @DBRef
    private Organ organ;
    private Collection<Conducted_physical_exam> conducted_physical_exams =new ArrayList<>();


}

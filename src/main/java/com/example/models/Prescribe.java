package com.example.models;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "prescribes")
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Prescribe {
    @Id
    private String id;
    private String dosage;
    private String duration;
    @DBRef
    private Consultation consultation;
    private Drug drug;
}

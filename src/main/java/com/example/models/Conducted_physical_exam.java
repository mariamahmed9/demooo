package com.example.models;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "conducted_physical_exams")
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Conducted_physical_exam {
    @Id
    private String id;
    private String result;
    private String comment;
    @DBRef
    private Physical_exam physical_exam;
    private Consultation consultation;
}

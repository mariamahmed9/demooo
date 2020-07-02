package com.example.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "maladies")
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Diagnostic {
    @Id
    private String id;
    private String Comment;
    @DBRef
    private Malady malady;
    private Consultation consultation;

}

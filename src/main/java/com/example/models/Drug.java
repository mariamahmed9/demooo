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

@Document(collection = "drugs")
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Drug {
    @Id
    private String id;
    private String nom;
    private String brand;
    private String indication;
    private String contraindication;

    @DBRef
    private Collection<Prescribe> prescribes=new ArrayList<>();
}

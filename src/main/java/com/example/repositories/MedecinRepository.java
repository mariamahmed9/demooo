package com.example.repositories;

import com.example.models.Medecin;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MedecinRepository extends MongoRepository<Medecin, String> {
    @Override
    void delete(Medecin deleted);
}


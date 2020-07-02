package com.example.repositories;

import com.example.models.Prescribe;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PrescribeRepository extends MongoRepository<Prescribe, String> {
    @Override
    void delete (Prescribe deleted);
}
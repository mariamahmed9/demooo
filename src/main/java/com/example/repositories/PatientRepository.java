package com.example.repositories;

import com.example.models.Patient;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PatientRepository extends MongoRepository<Patient, String> {
    @Override
    void delete(Patient deleted);
}

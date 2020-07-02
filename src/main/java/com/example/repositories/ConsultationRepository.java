package com.example.repositories;

import com.example.models.Consultation;
import org.springframework.data.mongodb.repository.MongoRepository;

import javax.jws.Oneway;

public interface ConsultationRepository extends MongoRepository<Consultation, String> {
    @Override
    void delete (Consultation deleted);
}

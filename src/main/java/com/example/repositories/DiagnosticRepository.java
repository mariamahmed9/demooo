package com.example.repositories;


import com.example.models.Diagnostic;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface DiagnosticRepository extends MongoRepository<Diagnostic, String> {
    @Override
    void delete (Diagnostic deleted);
}

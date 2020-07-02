package com.example.repositories;

import com.example.models.Conducted_physical_exam;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface Conducted_physical_examRepository extends MongoRepository<Conducted_physical_exam, String> {
    @Override
    void delete (Conducted_physical_exam deleted);
}

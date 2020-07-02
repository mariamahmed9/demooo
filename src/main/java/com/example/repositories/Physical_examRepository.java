package com.example.repositories;

import com.example.models.Physical_exam;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface Physical_examRepository extends MongoRepository<Physical_exam, String> {
    @Override
    void delete (Physical_exam deleted);
}

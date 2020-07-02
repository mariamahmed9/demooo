package com.example.repositories;


import com.example.models.Malady;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MaladyRepository extends MongoRepository<Malady, String> {
    @Override
    void delete (Malady deleted);
}


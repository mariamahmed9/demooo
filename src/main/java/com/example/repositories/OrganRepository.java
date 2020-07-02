package com.example.repositories;


import com.example.models.Organ;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface OrganRepository extends MongoRepository<Organ, String> {
    @Override
    void delete (Organ deleted);
}

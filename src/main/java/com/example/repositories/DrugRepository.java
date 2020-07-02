package com.example.repositories;


import com.example.models.Drug;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface DrugRepository extends MongoRepository<Drug, String> {
    @Override
    void delete (Drug deleted);
}
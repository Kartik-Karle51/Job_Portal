package com.Main.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.Main.Entity.Job;

public interface JobRepository extends MongoRepository<Job,Long>{

}

package com.Main.Service;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Main.DTO.JobDTO;
import com.Main.Exception.JobPortalException;
import com.Main.Repository.JobRepository;
import com.Main.Utility.Utilities;

import jakarta.validation.Valid;

@Service("jobService")
public class JobServiceImpl implements JobService{
	@Autowired
	private JobRepository jobRepository;
	
	@Autowired
	Utilities utill;

	@Override
	public JobDTO postJob( JobDTO jobDTO) throws Exception {
	jobDTO.setId(utill.getNextSequence("jobs"));
	jobDTO.setPostTime(LocalDateTime.now());
	return jobRepository.save(jobDTO.toEntity()).toDTO();
	}

}

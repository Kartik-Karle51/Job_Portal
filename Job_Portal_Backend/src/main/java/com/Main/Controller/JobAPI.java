package com.Main.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Main.DTO.JobDTO;
import com.Main.DTO.UserDTO;
import com.Main.Service.JobService;

import jakarta.validation.Valid;

@RestController
@CrossOrigin
@Validated
@RequestMapping("/jobs")
public class JobAPI {
	@Autowired
	private JobService jobService;
	
	@PostMapping("/post")
	public ResponseEntity<JobDTO> postJob(@RequestBody @Valid JobDTO jobDTO) throws Exception{

		return new ResponseEntity<>(jobService.postJob(jobDTO), HttpStatus.CREATED);
	}

}













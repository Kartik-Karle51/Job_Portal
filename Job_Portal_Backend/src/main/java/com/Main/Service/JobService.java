package com.Main.Service;

import com.Main.DTO.JobDTO;
import com.Main.Exception.JobPortalException;

import jakarta.validation.Valid;

public interface JobService {

	public  JobDTO postJob(@Valid JobDTO jobDTO) throws Exception;
	
	

}

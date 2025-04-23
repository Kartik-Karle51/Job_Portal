package com.Main.DTO;

import java.time.LocalDateTime;
import java.util.List;

import com.Main.Entity.Job;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class JobDTO {
	private Long id;
	private String jobtitle;
	private String company;
	private List<Applicant> applicants;
	private String about;
	private String expreience;
	private String jobtype;
	private String location;
	private Long packageOffered;
	private LocalDateTime postTime;
	private String description;
	private List<String> skillsRequired;
	private JobStatus jobStatus;
	
	
	public Job toEntity()
	{
		return new Job(this.id, this.jobtitle, this.company, this.applicants,this.about,
				this.expreience, this.jobtype,this.location,this.packageOffered,this.description,
				this.postTime,this.skillsRequired,this.jobStatus);
	}

}























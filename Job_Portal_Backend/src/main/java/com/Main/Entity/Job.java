package com.Main.Entity;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.Main.DTO.Applicant;
import com.Main.DTO.JobDTO;
import com.Main.DTO.JobStatus;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection="jobs")
public class Job {
	@Id
	private Long id;
	private String jobtitle;
	private String company;
	private List<Applicant> applicants;
	private String about;
	private String expreience;
	private String jobtype;
	private String location;
	private Long packageOffered;
	private String description;
	private LocalDateTime postTime;
	private List<String> skillsRequired;
	private JobStatus jobStatus;
	
	
	public JobDTO toDTO()
	{
		return new JobDTO(this.id, this.jobtitle, this.company, this.applicants,this.about,
				this.expreience, this.jobtype,this.location,this.packageOffered,this.postTime,
				this.description,this.skillsRequired,this.jobStatus);
	}


}






















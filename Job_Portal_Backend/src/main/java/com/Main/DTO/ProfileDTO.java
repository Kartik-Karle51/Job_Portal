package com.Main.DTO;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.Main.Entity.Profile;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection="profiles")
public class ProfileDTO {
	 @Id
	  private Long id;
	  private String email;
	  private String jobTitle;
	  private String company;
	  private String location;
	  private String about;
	  private List<String> skills;
	  private List<Experience> experiences;
	  private List<Certification> certifications;
	  
	  public Profile toEntity()
	  {
		  
		return new Profile(this.id,this.email,this.jobTitle,this.company,this.location,this.about,this.skills,this.experiences,this.certifications);
		  
	  }
	  
}

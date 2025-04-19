package com.Main.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@static @Data
@NoArgsConstructor
@AllArgsConstructor
public class LoginDTO {

	private String email;
	
	private String password;
}

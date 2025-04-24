package com.Main.jwt;

import lombok.AllArgsConstructor;
import lombok.Data;


@Data
public class AuthenticationResponse {
	public AuthenticationResponse(String jwt) {
		
		this.jwt = jwt;
	}

	private final String jwt;

}

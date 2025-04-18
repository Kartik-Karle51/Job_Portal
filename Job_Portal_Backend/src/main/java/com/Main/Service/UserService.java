package com.Main.Service;

import org.springframework.stereotype.Repository;

import com.Main.DTO.LoginDTO;
import com.Main.DTO.UserDTO;
import com.Main.Exception.JobPortalException;

import jakarta.validation.Valid;

@Repository
public interface UserService {
	
	public UserDTO registerUser(UserDTO userDTO) throws Exception;
	public UserDTO getUserByEmail(String email) throws JobPortalException;

	public UserDTO loginUser(LoginDTO loginDTO) throws JobPortalException;
}

package com.Main.Service;

import org.springframework.stereotype.Repository;

import com.Main.DTO.LoginDTO;
<<<<<<< HEAD
import com.Main.DTO.ResponseDTO;
=======
>>>>>>> 99166604a113c2ad9c6d83b6aed3b7323d6bd303
import com.Main.DTO.UserDTO;
import com.Main.Exception.JobPortalException;

import jakarta.validation.Valid;

@Repository
public interface UserService {
	
	public UserDTO registerUser(UserDTO userDTO) throws Exception;
<<<<<<< HEAD

	public UserDTO loginUser(LoginDTO loginDTO) throws JobPortalException;
	
	public Boolean sendOtp(String email) throws Exception;

	public boolean verifyOtp(String email,String otp) throws JobPortalException;

	public ResponseDTO changePassword( LoginDTO loginDTO) throws JobPortalException;
=======
	public UserDTO getUserByEmail(String email) throws JobPortalException;

	public UserDTO loginUser(LoginDTO loginDTO) throws JobPortalException;
>>>>>>> 99166604a113c2ad9c6d83b6aed3b7323d6bd303
}

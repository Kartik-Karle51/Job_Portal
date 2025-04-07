package com.Main.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.Main.DTO.LoginDTO;
import com.Main.DTO.UserDTO;
import com.Main.Entity.User;
import com.Main.Exception.JobPortalException;
import com.Main.Repository.UserRepository;
import com.Main.Utility.Utilities;

@Service(value = "userService")
public class UserServiceImpl implements UserService{

	@Autowired
	private PasswordEncoder passwordEncoder;
	
	
	@Autowired 
	private Utilities utilities;
	
	@Autowired
	private UserRepository userRepository;
	
	@Override
	public UserDTO registerUser(UserDTO userDTO) throws Exception {
		Optional<User> optional=userRepository.findByEmail(userDTO.getEmail());
		if(optional.isPresent())throw new JobPortalException("USER_FOUND");
		userDTO.setId(utilities.getNextSequence("users"));
		userDTO.setPassword(passwordEncoder.encode(userDTO.getPassword()));
		User user=userDTO.toEntity();
		userRepository.save(user);
		return user.toDTO();
	}

	@Override
	public UserDTO loginUser(LoginDTO loginDTO) throws JobPortalException {
		User user=userRepository.findByEmail(loginDTO.getEmail()).orElseThrow(()->new JobPortalException("USER_NOT_FOUND"));
		if(! passwordEncoder.matches(loginDTO.getPassword(), user.getPassword()))throw new JobPortalException("INVALID_CREDENTIALS");
		return user.toDTO();
	}

	
}

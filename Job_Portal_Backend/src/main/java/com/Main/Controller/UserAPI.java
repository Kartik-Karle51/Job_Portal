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

import com.Main.DTO.LoginDTO;
import com.Main.DTO.UserDTO;
import com.Main.Service.UserService;

import jakarta.validation.Valid;

@RestController
@CrossOrigin
@RequestMapping("/users")
@Validated
public class UserAPI {


	
	@Autowired
	private UserService userService;
	
	@PostMapping("/register")
	public ResponseEntity<UserDTO> registerUser(@RequestBody @Valid UserDTO userDTO) throws Exception{
		System.out.println(userDTO);
		
		userDTO=userService.registerUser(userDTO);
		return new ResponseEntity<>(userDTO,HttpStatus.CREATED);
	}
	
	@PostMapping("/login")
	public ResponseEntity<UserDTO> loginUser(@RequestBody @Valid LoginDTO loginDTO) throws Exception{
		
		return new ResponseEntity<>(userService.loginUser(loginDTO),HttpStatus.OK);
	}
	
}

package com.Main.jwt;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.Main.DTO.UserDTO;
import com.Main.Exception.JobPortalException;
import com.Main.Service.UserService;
@Service
public class MyUserDetailsService implements UserDetailsService {
	
	@Autowired
	private UserService userService;

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		try
		{
		UserDTO dto=userService.getUserByEmail(email);
		return new CustomUserDetails(dto.getId(), dto.getEmail(), dto.getPassword(), dto.getAccountType(), new ArrayList<>());
		}
		catch(JobPortalException e)
		{
			e.printStackTrace();
		}
		return null;
	}

}

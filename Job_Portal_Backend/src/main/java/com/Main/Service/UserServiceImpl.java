package com.Main.Service;

<<<<<<< HEAD
import java.time.LocalDateTime;

import java.util.List;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Scheduled;
=======
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
>>>>>>> 99166604a113c2ad9c6d83b6aed3b7323d6bd303
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.Main.DTO.LoginDTO;
<<<<<<< HEAD
import com.Main.DTO.ResponseDTO;
import com.Main.DTO.UserDTO;
import com.Main.Entity.OTP;
import com.Main.Entity.User;
import com.Main.Exception.JobPortalException;
import com.Main.Repository.OTPReposiotry;
//import com.Main.Repository.OTPRepository;
import com.Main.Repository.UserRepository;
import com.Main.Utility.Data;
import com.Main.Utility.Utilities;

import jakarta.mail.internet.MimeMessage;

=======
import com.Main.DTO.UserDTO;
import com.Main.Entity.User;
import com.Main.Exception.JobPortalException;
import com.Main.Repository.UserRepository;
import com.Main.Utility.Utilities;

>>>>>>> 99166604a113c2ad9c6d83b6aed3b7323d6bd303
@Service(value = "userService")
public class UserServiceImpl implements UserService{

	@Autowired
	private PasswordEncoder passwordEncoder;
	
	
	@Autowired 
	private Utilities utilities;
	
	@Autowired
<<<<<<< HEAD
	private JavaMailSender mailSender;
	
	@Autowired
	private ProfileService profileService;
	
	@Autowired
	private OTPReposiotry otpRepository;
	
	@Autowired
=======
>>>>>>> 99166604a113c2ad9c6d83b6aed3b7323d6bd303
	private UserRepository userRepository;
	
	@Override
	public UserDTO registerUser(UserDTO userDTO) throws Exception {
		Optional<User> optional=userRepository.findByEmail(userDTO.getEmail());
		if(optional.isPresent())throw new JobPortalException("USER_FOUND");
<<<<<<< HEAD
		userDTO.setProfileId(profileService.createProfile(userDTO.getEmail()));		userDTO.setId(utilities.getNextSequence("users"));
		userDTO.setPassword(passwordEncoder.encode(userDTO.getPassword()));
		User user=userDTO.toEntity();
		user=userRepository.save(user);
=======
		userDTO.setId(utilities.getNextSequence("users"));
		userDTO.setPassword(passwordEncoder.encode(userDTO.getPassword()));
		User user=userDTO.toEntity();
		userRepository.save(user);
>>>>>>> 99166604a113c2ad9c6d83b6aed3b7323d6bd303
		return user.toDTO();
	}

	@Override
	public UserDTO loginUser(LoginDTO loginDTO) throws JobPortalException {
		User user=userRepository.findByEmail(loginDTO.getEmail()).orElseThrow(()->new JobPortalException("USER_NOT_FOUND"));
		if(! passwordEncoder.matches(loginDTO.getPassword(), user.getPassword()))throw new JobPortalException("INVALID_CREDENTIALS");
		return user.toDTO();
	}

	@Override
<<<<<<< HEAD
	public Boolean sendOtp(String email) throws Exception {
		 User user=userRepository.findByEmail(email).orElseThrow(()->new JobPortalException("USER_NOT_FOUND"));
         MimeMessage mm=mailSender.createMimeMessage();
         MimeMessageHelper message=new MimeMessageHelper(mm,true);
         message.setTo(email);
         message.setSubject("Your OTP email");
         String genOtp=Utilities.generateOTP();
         OTP otp=new OTP(email,genOtp,LocalDateTime.now());
         otpRepository.save(otp);
         message.setText(Data.getMessageBody(genOtp,user.getName()),true);
         mailSender.send(mm);
         return true;
	}

	@Override
	public boolean verifyOtp(String email,String otp) throws JobPortalException {
		OTP otpEntity=otpRepository.findById(email).orElseThrow(()->new JobPortalException("OTP Not Found"));
		if(!otpEntity.getOtpCode().equals(otp))throw new JobPortalException("OTP Incorrect");
		return true;
	}

	@Override
	public ResponseDTO changePassword(LoginDTO loginDTO) throws JobPortalException {
		User user=userRepository.findByEmail(loginDTO.getEmail()).orElseThrow(()->new JobPortalException("USER_NOT_FOUND"));
   user.setPassword(passwordEncoder.encode(loginDTO.getPassword()));
   userRepository.save(user);
   return new ResponseDTO("Password changed successfully");
		
	}
	
	@Scheduled(fixedRate=60000)
	public void removeExpiredOTPs()
	{
		LocalDateTime expiry=LocalDateTime.now().minusMinutes(5);
		//System.out.println("Hello World");
		List<OTP> expiredOTPs=otpRepository.findByCreationTimeBefore(expiry);
		if(!expiredOTPs.isEmpty())
		{
			otpRepository.deleteAll(expiredOTPs);
			System.out.println("Removed "+expiredOTPs.size()+"expired OTPs. ");
		}
		
	}

	
=======
	public UserDTO getUserByEmail(String email) throws JobPortalException {
		// TODO Auto-generated method stub
		return userRepository.findByEmail(email).orElseThrow(() -> new JobPortalException("User Not found")).toDTO();
	}

>>>>>>> 99166604a113c2ad9c6d83b6aed3b7323d6bd303
	
}

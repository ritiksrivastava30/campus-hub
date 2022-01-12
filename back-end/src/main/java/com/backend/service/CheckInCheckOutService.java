package com.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.dao.CheckInCheckOutDao;

@Service
public class CheckInCheckOutService {
	
	@Autowired
	CheckInCheckOutDao checkInCheckOutDao;
	
	public String checkIn(String hostelName,int registrationNumber) {
		return checkInCheckOutDao.checkIn(hostelName,registrationNumber);
	}
	
	public String checkOut(String hostelName,int registrationNumber) {
		return checkInCheckOutDao.checkOut(hostelName,registrationNumber);
	}
	
	public void sendingEmailToOutsiders() {
		List<String> outsidersEmail=checkInCheckOutDao.emailsOfOutsideStudents();
		EmailService obj=new EmailService();
		obj.sendmail(outsidersEmail);
	}
}

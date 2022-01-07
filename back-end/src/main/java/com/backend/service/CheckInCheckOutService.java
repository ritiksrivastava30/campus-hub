package com.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.dao.CheckInCheckOutDao;

@Service
public class CheckInCheckOutService {
	
	@Autowired
	CheckInCheckOutDao checkInCheckOutDao;
	
	public String checkIn(int registrationNumber) {
		return checkInCheckOutDao.checkIn(registrationNumber);
	}
	
	public String checkOut(int registrationNumber) {
		return checkInCheckOutDao.checkOut(registrationNumber);
	}
	
	public void sendingEmailToOutsiders() {
		List<String> outsidersEmail=checkInCheckOutDao.emailsOfOutsideStudents();
		EmailService obj=new EmailService();
		obj.sendmail(outsidersEmail);
	}
}

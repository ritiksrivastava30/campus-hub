package com.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.dao.ComplaintDao;
import com.backend.pojo.Complaint;

@Service
public class ComplaintService {

	@Autowired
	ComplaintDao complaintDao;
	
	public Complaint sendComplaint(Complaint complaint) {
		return complaintDao.sendComplaint(complaint);
	}
	
}

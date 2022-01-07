package com.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.backend.pojo.Complaint;
import com.backend.service.ComplaintService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ComplainController {

	@Autowired
	private ComplaintService complaintService;
	
	@PostMapping("/sendcomplaint")
	public Complaint sendComplaint(@RequestBody Complaint complaint) {
		return complaintService.sendComplaint(complaint);
	}
	
}

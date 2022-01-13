package com.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.dao.HostelDao;
import com.backend.pojo.Complaint;
import com.backend.pojo.Hostel;
import com.backend.pojo.Notice;

@Service
public class HostelService {
	
	@Autowired
	private HostelDao hostelDao;
	
	public Hostel addHostel(Hostel hostel) {
		return hostelDao.addHostel(hostel);
	}
	
	public List<Hostel> fetchHostels(){
		return hostelDao.fetchHostels();
	}
	
	public Hostel updateHostel(int id, Hostel hostel) {
		return hostelDao.updateHostel(id, hostel);
	}
	
	public Notice addNotice(String hostelName, String notice) {
		return hostelDao.addNotice(hostelName, notice);
	}
	 
	public List<Complaint> fetchComplaints(String hostelName){
		return hostelDao.fetchComplaints(hostelName);
	}
	
	public Complaint replyComplaint(int regNo, String reply) {
		return hostelDao.replyComplaint(regNo, reply);
	}
}

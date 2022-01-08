package com.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.dao.HostelDao;
import com.backend.pojo.Hostel;

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
}

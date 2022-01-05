package com.backend.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.backend.pojo.Hostel;
import com.backend.service.HostelService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class HostelController {

	@Autowired
	private HostelService hostelService;
	
	@PostMapping("/hostels")
	public Hostel addHostel(@RequestBody Hostel hostel) {
		return hostelService.addHostel(hostel);
	}
	
	@PatchMapping("/hostels/{id}")
	public Hostel updateHostel(@PathVariable int id, @RequestBody Hostel hostel) {
		return hostelService.updateHostel(id, hostel);
	}
	
	@GetMapping("/hostels")
	public List<Hostel> fetchHostels(){
		return hostelService.fetchHostels();
	}
}

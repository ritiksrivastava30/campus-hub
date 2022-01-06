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

import com.backend.pojo.Warden;
import com.backend.service.WardenService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class WardenController {
	
	@Autowired
	WardenService wardenService;
	
	@GetMapping("/hostels/{userName}/{password}")
	public String wardenLogin(@PathVariable String userName, @PathVariable String password) {
		return wardenService.wardenLogin(userName, password);
	}
	
	@PostMapping("/wardens")
	public Warden addWarden(@RequestBody Warden warden) {
		return wardenService.addWarden(warden);
	}
	
	@PatchMapping("/wardens/{id}")
	public Warden updateWarden(@PathVariable int id, @RequestBody Warden warden) {
		System.out.println(warden);
		return wardenService.updateWarden(id, warden);
	}
	
	@GetMapping("/wardens")
	public List<Warden> fetchWardens(){
		return wardenService.fetchWardens();
	}
	
}

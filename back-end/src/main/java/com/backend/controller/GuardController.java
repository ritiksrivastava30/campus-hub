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
import com.backend.pojo.Guard;
import com.backend.service.GuardService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class GuardController {

	@Autowired
	GuardService guardService;
	
	@GetMapping("/guards/{userName}/{password}")
	public String guardLogin(@PathVariable String userName, @PathVariable String password) {
		System.out.println(userName+" "+password);
		return guardService.guardLogin(userName, password);
	}
	
	@PostMapping("/guards")
	public Guard addGuard(@RequestBody Guard guard) {
		return guardService.addGuard(guard);
	}
	
	@PatchMapping("/guards/{id}")
	public Guard updateGuard(@PathVariable int id, @RequestBody Guard guard) {
		return guardService.updateGuard(id,guard);
	}
	
	@GetMapping("/guards")
	public List<Guard> fetchGuards(){
		return guardService.fetchGuards();
	}
	
}

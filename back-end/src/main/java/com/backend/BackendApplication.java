package com.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.backend.dao.StarterDao;

@SpringBootApplication
public class BackendApplication implements CommandLineRunner{

	@Autowired
	private StarterDao starterDao;
	
	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		starterDao.createInitialTables();
	}
}

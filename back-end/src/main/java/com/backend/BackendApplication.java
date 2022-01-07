package com.backend;

import java.util.Calendar;
import java.util.List;
import java.util.Timer;
import java.util.TimerTask;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.Scheduled;

import com.backend.dao.CheckInCheckOutDao;
import com.backend.dao.StarterDao;
import com.backend.pojo.CheckInCheckOut;
import com.backend.service.EmailService;

@SpringBootApplication
public class BackendApplication implements CommandLineRunner{

	@Autowired
	private StarterDao starterDao;
	@Autowired 
	private CheckInCheckOutDao checkInCheckOutDao;
	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}
	
	@Override
	public void run(String... args) throws Exception {
		starterDao.createInitialTables();
		starterDao.insertDummyStudents();
	}
	
	@Scheduled(cron="00 20 01 * * *")
	void someJob() throws InterruptedException{
		List<String> outsidersEmail=checkInCheckOutDao.emailsOfOutsideStudents();
		EmailService obj=new EmailService();
		obj.sendmail(outsidersEmail);
		
	}
}

package com.backend.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Repository;


@Repository
public class StarterDao {
	
	@Autowired
	public JdbcTemplate jdbcTemplate;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	public StarterDao() {
		super();
	}
	
	public void createInitialTables() {
		String que;
		que = "CREATE TABLE IF NOT EXISTS `branch` (`id` INT NOT NULL AUTO_INCREMENT, `name` VARCHAR(100) NOT NULL, PRIMARY KEY(`id`) ); ";
		jdbcTemplate.execute(que);
		que = "CREATE TABLE IF NOT EXISTS `hostels` (`id` INT NOT NULL AUTO_INCREMENT, `name` VARCHAR(100) NOT NULL UNIQUE, `capacity` INT NOT NULL, `status` BOOLEAN NOT NULL, PRIMARY KEY (`id`));";
		jdbcTemplate.execute(que);
		que = "CREATE TABLE IF NOT EXISTS `wardens` (`id` INT NOT NULL AUTO_INCREMENT, `name` VARCHAR(100) NOT NULL, `email` VARCHAR(100) NOT NULL UNIQUE, `password` VARCHAR(60) NOT NULL, `phone_no` VARCHAR(15) NOT NULL UNIQUE, `hostel_id` INT NULL, PRIMARY KEY (`id`), FOREIGN KEY(`hostel_id`) REFERENCES `hostels`(`id`));";
		jdbcTemplate.execute(que);
		que = "CREATE TABLE IF NOT EXISTS `students` (`reg_no` INT NOT NULL,`password` VARCHAR(60) NOT NULL,`name` VARCHAR(100) NOT NULL,`semester` INT NOT NULL,`address` VARCHAR(250) NOT NULL,`personal_mob` VARCHAR(15) NOT NULL,`parent_mob` VARCHAR(15) NOT NULL,`branch_id` int NOT NULL,`room_no` INT NOT NULL,`hostel_id` INT NOT NULL,`email` VARCHAR(100) NOT NULL,`gender` VARCHAR(6) NOT NULL,`dob` DATE NOT NULL,`adhaarcard_no` VARCHAR(45) NOT NULL,`blackdots` INT NOT NULL , PRIMARY KEY (`reg_no`), FOREIGN KEY (`hostel_id`) REFERENCES `hostels`(`id`), FOREIGN KEY (`branch_id`) REFERENCES `branch`(`id`), UNIQUE INDEX `reg_no_UNIQUE` (`reg_no` ASC));";
		jdbcTemplate.execute(que);		
		que= "CREATE TABLE IF NOT EXISTS `guards` (`id` INT NOT NULL AUTO_INCREMENT, `name` VARCHAR(100) NOT NULL, `email` VARCHAR(100) NOT NULL UNIQUE, `password` VARCHAR(60) NOT NULL, `phone_no` VARCHAR(15) NULL, `hostel_id` INT NULL, PRIMARY KEY (`id`), FOREIGN KEY(`hostel_id`) REFERENCES `hostels`(`id`));";
		jdbcTemplate.execute(que);
		que="CREATE TABLE IF NOT EXISTS `check_out` (`reg_no` INT NOT NULL, `check_out_time` TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, PRIMARY KEY (`reg_no`), FOREIGN KEY(`reg_no`) REFERENCES students(`reg_no`));";
		jdbcTemplate.execute(que);
		que= "CREATE TABLE IF NOT EXISTS `complaints` (`regNo` INT NOT NULL, `name` VARCHAR(100) NOT NULL,`complaint` VARCHAR(200) NOT NULL,`reply` VARCHAR(200) DEFAULT NULL,`hostel_id` INT NULL, PRIMARY KEY (`regNo`), FOREIGN KEY(`hostel_id`) REFERENCES `hostels`(`id`));";
		jdbcTemplate.execute(que);	
		que="CREATE TABLE IF NOT EXISTS `messmenu` (`id` INT NOT NULL AUTO_INCREMENT,`hostel_id` INT NOT NULL,`day` VARCHAR(50) NOT NULL, `breakfast` VARCHAR(255) NULL DEFAULT 'not set',`lunch` VARCHAR(255) NULL DEFAULT 'not set',`dinner` VARCHAR(255) NULL DEFAULT 'not set',PRIMARY KEY (`id`),FOREIGN KEY(`hostel_id`) REFERENCES `hostels`(`id`));";
		jdbcTemplate.execute(que);
		que = "CREATE TABLE IF NOT EXISTS `notices` (`id` INT NOT NULL AUTO_INCREMENT, `notice` VARCHAR(250) NOT NULL, `hostel_id` INT NOT NULL, PRIMARY KEY (`id`));";
		jdbcTemplate.execute(que);
		insertBranches();
		insertDummyHostels();  //just for testing
		insertDummyWardens();  //just for testing
		insertDummyGuards();   //just for testing
		insertDummyStudents(); //just for testing
	}
	
	public void insertBranches() {
		String que;
		que = "INSERT IGNORE INTO `branch` (`id`, `name`) VALUES ('1', 'Information Technology');";
		jdbcTemplate.execute(que);
		que = "INSERT IGNORE INTO `branch` (`id`, `name`) VALUES ('2', 'Computer Science Engineering');";
		jdbcTemplate.execute(que);
		que = "INSERT IGNORE INTO `branch` (`id`, `name`) VALUES ('3', 'Electrical Enginnering');";
		jdbcTemplate.execute(que);
		que = "INSERT IGNORE INTO `branch` (`id`, `name`) VALUES ('4', 'Mechanical Enginnering');";
		jdbcTemplate.execute(que);
		que = "INSERT IGNORE INTO `branch` (`id`, `name`) VALUES ('5', 'Civil Enginnering');";
		jdbcTemplate.execute(que);
		que = "INSERT IGNORE INTO `branch` (`id`, `name`) VALUES ('6', 'Chemical Enginnering');";
		jdbcTemplate.execute(que);
		que = "INSERT IGNORE INTO `branch` (`id`, `name`) VALUES ('7', 'Electronics and Communication Enginnering');";
		jdbcTemplate.execute(que);
		que = "INSERT IGNORE INTO `branch` (`id`, `name`) VALUES ('8', 'Production Enginnering');";
		jdbcTemplate.execute(que);
		que = "INSERT IGNORE INTO `branch` (`id`, `name`) VALUES ('9', 'Biotechnology');";
		jdbcTemplate.execute(que);
	}
	
	public void insertDummyStudents() {
		String names[]= {"Ritik","Yash","Stuti","Megha" ,"Mekhla", "Virat","Raj","Simran","Aditi","Mayank","Parth","Aditya"};
		Integer reg=20194001;
		Integer mob1=1288228288;
		Integer mob2=1112334569;
		for(int i=0;i<600;i++) {
			String c="_aB";
			String encodedPassword = passwordEncoder.encode(reg.toString()+c);
			String que = "INSERT IGNORE INTO `students` (`reg_no`, `password`, `name`, `semester`, `address`, `personal_mob`, `parent_mob`, `branch_id`, `room_no`, `hostel_id`, `email`, `gender`, `dob`, `adhaarcard_no`, `blackdots`) VALUES ('"+ reg+"', '"+ encodedPassword +"' , '"+ names[i%12] +"', '6', 'Lakhisarai', '"+mob1.toString()+"', '"+mob2.toString()+"', '"+ (i%9 +1) +"', '"+ (i+100) +"', '"+(i%6 +1)+"', '"+names[i%12]+"@mnnit.ac.in', 'Male', '2000-12-02', '"+(12342522+i)+"', '0');";
			reg++;
			System.out.println(reg);
			jdbcTemplate.update(que);
		}
	}
	
	public void insertDummyGuards() {
		String encodedPassword = passwordEncoder.encode("Ramesh_123");
		String que="INSERT IGNORE INTO `guards` (`name`, `email`, `password`, `phone_no`, `hostel_id`) VALUES ('Ramesh', 'ramesh@mnnit.ac.in', ?, '12345667', '2');";
		jdbcTemplate.update(que, encodedPassword);
		encodedPassword = passwordEncoder.encode("Suresh_123");
		que="INSERT IGNORE INTO `guards` (`name`, `email`, `password`, `phone_no`, `hostel_id`) VALUES ('Suresh', 'suresh@mnnit.ac.in', ?, '12345687', '3');";
		jdbcTemplate.update(que, encodedPassword);
		encodedPassword = passwordEncoder.encode("Raju_123");
		que="INSERT IGNORE INTO `guards` (`name`, `email`, `password`, `phone_no`, `hostel_id`) VALUES ('Raju', 'raju@mnnit.ac.in', ?, '12345669', '4');";
		jdbcTemplate.update(que, encodedPassword);
		encodedPassword = passwordEncoder.encode("Kaju_123");
		que="INSERT IGNORE INTO `guards` (`name`, `email`, `password`, `phone_no`, `hostel_id`) VALUES ('Kaju', 'kajuh@mnnit.ac.in', ?, '12345777', '5');";
		jdbcTemplate.update(que, encodedPassword);
		encodedPassword = passwordEncoder.encode("Yoginder_123");
		que="INSERT IGNORE INTO `guards` (`name`, `email`, `password`, `phone_no`, `hostel_id`) VALUES ('Yoginder', 'yoginder@mnnit.ac.in', ?, '15345667', '6');";
		jdbcTemplate.update(que, encodedPassword);
		encodedPassword = passwordEncoder.encode("Surender_123");
		que="INSERT IGNORE INTO `guards` (`name`, `email`, `password`, `phone_no`, `hostel_id`) VALUES ('Surender', 'surender@mnnit.ac.in', ?, '17745667', '7');";
		jdbcTemplate.update(que, encodedPassword);
	}
	
	public void insertDummyWardens() {
		String encodedPassword = passwordEncoder.encode("Admin_123");
		String que="INSERT IGNORE INTO `wardens` (`name`, `email`, `password`, `phone_no`, `hostel_id`) VALUES ('SuperAdmin', 'superadmin@mnnit.ac.in', ?, '6200075988', '1');";
		jdbcTemplate.update(que, encodedPassword);
		encodedPassword = passwordEncoder.encode("Shivdutt_123");
		que="INSERT IGNORE INTO `wardens` (`name`, `email`, `password`, `phone_no`, `hostel_id`) VALUES ('ShivDutt', 'sd@mnnit.ac.in', ?, '62345667', '2');";
		jdbcTemplate.update(que, encodedPassword);
		encodedPassword = passwordEncoder.encode("Monika_123");
		que="INSERT IGNORE INTO `wardens` (`name`, `email`, `password`, `phone_no`, `hostel_id`) VALUES ('Monika Gupta', 'mg@mnnit.ac.in', ?, '72345687', '3');";
		jdbcTemplate.update(que, encodedPassword);
		encodedPassword = passwordEncoder.encode("Sonika_123");
		que="INSERT IGNORE INTO `wardens` (`name`, `email`, `password`, `phone_no`, `hostel_id`) VALUES ('Sonika Gupta', 'sg@mnnit.ac.in', ?, '82345687', '4');";
		jdbcTemplate.update(que, encodedPassword);
		encodedPassword = passwordEncoder.encode("Ronika_123");
		que="INSERT IGNORE INTO `wardens` (`name`, `email`, `password`, `phone_no`, `hostel_id`) VALUES ('Ronika Gupta', 'rg@mnnit.ac.in', ?, '92345687', '5');";
		jdbcTemplate.update(que, encodedPassword);
		encodedPassword = passwordEncoder.encode("Jonika_123");
		que="INSERT IGNORE INTO `wardens` (`name`, `email`, `password`, `phone_no`, `hostel_id`) VALUES ('Jonika Gupta', 'jg@mnnit.ac.in', ?, '12345887', '6');";
		jdbcTemplate.update(que, encodedPassword);
		encodedPassword = passwordEncoder.encode("Yonika_123");
		que="INSERT IGNORE INTO `wardens` (`name`, `email`, `password`, `phone_no`, `hostel_id`) VALUES ('Yonika Gupta', 'yg@mnnit.ac.in', ?, '12345117', '7');";
		jdbcTemplate.update(que, encodedPassword);
	}
	
	public void insertDummyHostels() {
		String que = "INSERT IGNORE INTO `hostels`(`name`, `capacity`, `status`) VALUES ('superadmin', '0', '1');";
		jdbcTemplate.execute(que);
		que="INSERT IGNORE INTO `hostels` (`name`, `capacity`, `status`) VALUES ('svbh', '800', '1');";
		jdbcTemplate.execute(que);
		addMenuForNewHostel(2);
		que="INSERT IGNORE INTO `hostels` (`name`, `capacity`, `status`) VALUES ('kngh', '600', '1');";
		jdbcTemplate.execute(que);
		addMenuForNewHostel(3);
		que="INSERT IGNORE INTO `hostels` (`name`, `capacity`, `status`) VALUES ('bhs', '800', '1');";
		jdbcTemplate.execute(que);
		addMenuForNewHostel(4);
		que="INSERT IGNORE INTO `hostels` (`name`, `capacity`, `status`) VALUES ('ghs', '600', '1');";
		jdbcTemplate.execute(que);
		addMenuForNewHostel(5);
		que="INSERT IGNORE INTO `hostels` (`name`, `capacity`, `status`) VALUES ('modiji', '800', '1');";
		jdbcTemplate.execute(que);
		addMenuForNewHostel(6);
		que="INSERT IGNORE INTO `hostels` (`name`, `capacity`, `status`) VALUES ('yogiji', '600', '1');";
		jdbcTemplate.execute(que);
		addMenuForNewHostel(7);
	}
	public void addMenuForNewHostel(int hostel_id) {
		String[] days= {"sunday","monday","tuesday","wednesday","thursday","friday","saturday"};
		for(int i=0;i<7;i++) {
			String query="INSERT IGNORE INTO `messmenu` (`hostel_id`,`day`) VALUES (?,?)";
			jdbcTemplate.update(query,hostel_id,days[i]);
		}
	}
}

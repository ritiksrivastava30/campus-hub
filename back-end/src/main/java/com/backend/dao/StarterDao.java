package com.backend.dao;



import javax.management.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import com.backend.pojo.Student;


@Repository
public class StarterDao {
	
	@Autowired
	public JdbcTemplate jdbcTemplate;
	@Autowired
	public NamedParameterJdbcTemplate namedParameterJdbcTemplate;
	
	public StarterDao() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public void createInitialTables() {
		String que;
		que = "CREATE TABLE IF NOT EXISTS `branch` (`id` INT NOT NULL AUTO_INCREMENT, `name` VARCHAR(100) NOT NULL, PRIMARY KEY(`id`) ); ";
		jdbcTemplate.execute(que);
		que = "CREATE TABLE IF NOT EXISTS `hostels` (`id` INT NOT NULL AUTO_INCREMENT, `name` VARCHAR(100) NOT NULL UNIQUE, `capacity` INT NOT NULL, `status` BOOLEAN NOT NULL, PRIMARY KEY (`id`));";
		jdbcTemplate.execute(que);
		que = "CREATE TABLE IF NOT EXISTS `wardens` (`id` INT NOT NULL AUTO_INCREMENT, `name` VARCHAR(100) NOT NULL, `email` VARCHAR(100) NOT NULL UNIQUE, `password` VARCHAR(45) NOT NULL, `phone_no` VARCHAR(15) NOT NULL UNIQUE, `hostel_id` INT NULL, PRIMARY KEY (`id`), FOREIGN KEY(`hostel_id`) REFERENCES `hostels`(`id`));";
		jdbcTemplate.execute(que);
		que = "CREATE TABLE IF NOT EXISTS `students` (`reg_no` INT NOT NULL,`password` VARCHAR(45) NOT NULL,`name` VARCHAR(100) NOT NULL,`semester` INT NOT NULL,`address` VARCHAR(250) NOT NULL,`personal_mob` VARCHAR(15) NOT NULL,`parent_mob` VARCHAR(15) NOT NULL,`branch_id` int NOT NULL,`room_no` INT NOT NULL,`hostel_id` INT NOT NULL,`email` VARCHAR(100) NOT NULL,`gender` VARCHAR(6) NOT NULL,`dob` DATE NOT NULL,`adhaarcard_no` VARCHAR(45) NOT NULL,`blackdots` INT NOT NULL , PRIMARY KEY (`reg_no`), FOREIGN KEY (`hostel_id`) REFERENCES `hostels`(`id`), FOREIGN KEY (`branch_id`) REFERENCES `branch`(`id`), UNIQUE INDEX `reg_no_UNIQUE` (`reg_no` ASC));";
		jdbcTemplate.execute(que);		
		que = "INSERT IGNORE INTO `hostels`(`name`, `capacity`, `status`) VALUES ('superadmin', '0', '1');";
		jdbcTemplate.execute(que);
		que="INSERT IGNORE INTO `wardens` (`name`, `email`, `password`, `phone_no`, `hostel_id`) VALUES ('SuperAdmin', 'superadmin@mnnit.ac.in', 'admin_123', '6200075988', '1');";
		jdbcTemplate.execute(que);
		que="INSERT IGNORE INTO `hostels` (`name`, `capacity`, `status`) VALUES ('svbh', '800', '1');";
		jdbcTemplate.execute(que);
		que="INSERT IGNORE INTO `hostels` (`name`, `capacity`, `status`) VALUES ('kngh', '600', '1');";
		jdbcTemplate.execute(que);
		que="INSERT IGNORE INTO `wardens` (`name`, `email`, `password`, `phone_no`, `hostel_id`) VALUES ('ShivDutt', 'sd@mnnit.ac.in', 'shivdutt_123', '12345667', '2');";
		jdbcTemplate.execute(que);
		que="INSERT IGNORE INTO `wardens` (`name`, `email`, `password`, `phone_no`, `hostel_id`) VALUES ('Monika Gupta', 'mg@mnnit.ac.in', 'monika_123', '12345667', '3');";
		jdbcTemplate.execute(que);
		String str = "2000-12-02";
		que="INSERT IGNORE INTO `students` (`reg_no`, `password`, `name`, `semester`, `address`, `personal_mob`, `parent_mob`, `branch_id`, `room_no`, `hostel_id`, `email`, `gender`, `dob`, `adhaarcard_no`, `blackdots`) VALUES ('20198018', '20198018', 'YashSanthalia', '6', 'Lakhisarai', '6200075988', '9430578425', '1', '101', '2', 'yash@gmail.com', 'Male', ? , '8393939399393', '0');";
		jdbcTemplate.update(que, str);
		insertBranches();
		//for test
//		Student s=new Student();
//		s.setReg_no(20193);
//		s.setPassword("20192");
//		s.setName("20192");
//		s.setSemester(4);
//		s.setAddress("20192");
//		s.setPersonal_mob("20192");
//		s.setParent_mob("20192");
//		s.setBranch("20192");
//		s.setRoom_no(77);
//		s.setHostel_id(1);
//		s.setEmail("20192");
//		s.setGender("20192");
//		s.setDob("20192");
//		s.setAdhaarcard_no("20192");
//		s.setBlackdots(7);
//		String query="INSERT INTO `students` (`reg_no`, `password`, `name`, `semester`, `address`, `personal_mob`, `parent_mob`, `branch`, `room_no`, `hostel_id`, `email`, `gender`, `dob`, `adhaarcard_no`, `blackdots`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);";
//		int res = jdbcTemplate.update(query, s.getReg_no(),s.getPassword(),s.getName(),s.getSemester(),s.getAddress(),s.getPersonal_mob(),s.getParent_mob(),s.getBranch(),s.getRoom_no(),s.getHostel_id(),s.getEmail(),s.getGender(),s.getDob(),s.getAdhaarcard_no(),s.getBlackdots());
//		que="SELECT * from `students` WHERE `hostel_id` = ?;";
//		List<Student> st=jdbcTemplate.query(que, new StudentRowMapper(),1);
//		for(int i=0;i<st.size();i++) {
//			System.out.println(st.get(i).getReg_no());
//		}
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

}

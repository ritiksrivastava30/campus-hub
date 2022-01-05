package com.backend.dao;

import java.util.List;

import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Repository;

import com.backend.pojo.Student;

@Repository
public class StudentDao extends StarterDao{
	public String checkCredentials(String reg_no,String password) {
		String query = "SELECT `reg_no` FROM `students` WHERE `reg_no` = '" +Integer.parseInt(reg_no)+ "' AND `password` = '" + password +"';";
		String ss="";
		try {
			ss = (String)jdbcTemplate.queryForObject(query,String.class);
		}
		catch(EmptyResultDataAccessException e) {
			ss="-1";
		}
//		System.out.println(ss);
		return ss;
	}
	
	public Student addStudent(Student s) {
		String query="INSERT INTO `students` (`reg_no`, `password`, `name`, `semester`, `address`, `personal_mob`, `parent_mob`, `branch_id`, `room_no`, `hostel_id`, `email`, `gender`, `dob`, `adhaarcard_no`, `blackdots`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);";
		int res = jdbcTemplate.update(query, s.getRegistrationNo(),s.getPassword(),s.getName(),s.getSemester(),s.getAddress(),s.getPhoneNumber(),s.getParentPhoneNumber(),s.getBranch(),s.getRoomNo(),s.getHostelName(),s.getEmail(),s.getGender(),s.getDob(),s.getAadharCardNo(),s.getBlackdots());
		if(res == 1) {
			query = "SELECT * from `students` WHERE `reg_no` = ?;";
			Student addedStudent = jdbcTemplate.queryForObject(query, new StudentRowMapper(), s.getRegistrationNo());
			return addedStudent;
		}
		return null;
	}
	
	public List<Student> fetchStudentsByHostelId(int hostelId){
		String que="SELECT * from `students` WHERE `hostel_id` = ?;";
		List<Student> st=jdbcTemplate.query(que, new StudentRowMapper(),hostelId);
		return st;
	}
	
	public Student updateStudent(int regNo, Student s) {
		try {
			String query = "update `students` set `reg_no` = ? ,`password` = ? ,`name` = ?,`semester` = ?,`address` = ?,`personal_mob` = ? ,`parent_mob` =  ? ,`branch` = ? ,`room_no` = ?,`hostel_id` = ?,`email` = ?,`gender` = ?,`dob` = ?,`adhaarcard_no` = ? ,`blackdots` = ? where `reg_no` = ?;";
			jdbcTemplate.update(query, s.getRegistrationNo(),s.getPassword(),s.getName(),s.getSemester(),s.getAddress(),s.getPhoneNumber(),s.getParentPhoneNumber(),s.getBranch(),s.getRoomNo(),s.getHostelName(),s.getEmail(),s.getGender(),s.getDob(),s.getAadharCardNo(),s.getBlackdots(),regNo);
			query = "select * from 'students' where reg_no = ?";
			Student addedStudent = jdbcTemplate.queryForObject(query, new StudentRowMapper(), regNo);
			return addedStudent;
		}catch (Exception e) {
			return null;
		}
	}
}

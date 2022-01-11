package com.backend.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Repository;

import com.backend.dao.rowmappers.NoticeRowMapper;
import com.backend.dao.rowmappers.StudentRowMapper;
import com.backend.pojo.Notice;
import com.backend.pojo.Student;

@Repository
public class StudentDao extends StarterDao{
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	public String studentLogin(String reg_no, String password) {
		
		String query = "Select password from students where reg_no = ?";
		try {
			String encodedPassword = (String)jdbcTemplate.queryForObject(query,String.class, reg_no);
			if(passwordEncoder.matches(password, encodedPassword)){
				return reg_no;
			}
			return "error";
		}catch(Exception e) {
			return "error";
		}
		
	}
	
	public Student addStudent(Student s) {
		String encodedPassword = passwordEncoder.encode(s.getPassword());
		int branch_id = getBranchId(s.getBranch());
		int hostel_id = getHostelId(s.getHostelName());
		String query = "INSERT INTO `students` (`reg_no`, `password`, `name`, `semester`, `address`, `personal_mob`, `parent_mob`, `branch_id`, `room_no`, `hostel_id`, `email`, `gender`, `dob`, `adhaarcard_no`, `blackdots`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);";
		try {
			jdbcTemplate.update(query, s.getRegistrationNumber(), encodedPassword, s.getName(),s.getSemester(),s.getAddress(),s.getPhoneNumber(),s.getParentPhoneNumber(), branch_id, s.getRoomNo(), hostel_id, s.getEmail(),s.getGender(),s.getDob(),s.getAadharCardNo(),s.getBlackdots());
			return fetchStudentByRegistrationNumber(s.getRegistrationNumber());
		}catch(Exception e) {
			return null;
		}
	}
	
	public List<Student> fetchStudentsByHostelName(String hostelName){
		int hostelId = getHostelId(hostelName);
		String query = "SELECT `reg_no`, `password`, students.name, `semester`, `address`, `personal_mob`, `parent_mob`, branch.name, `room_no`, hostels.name, `email`, `gender`, `dob`, `adhaarcard_no`, `blackdots` FROM `students` join `branch` join `hostels` WHERE students.branch_id = branch.id AND students.hostel_id = hostels.id AND hostels.id = ?;";
		try {
			List<Student> students = jdbcTemplate.query(query, new StudentRowMapper(), hostelId);
			
			return students;
		}
		catch(Exception e) {
			return null;
		}
	}
	
	public List<Notice> fetchNotices(int regNo){
		String que = "select `hostel_id` from `students` where reg_no = ?;";
		int id = (int)jdbcTemplate.queryForObject(que,Integer.class, regNo);
		que="SELECT * from `notices` WHERE `hostel_id` = ?;";
		List<Notice> st=jdbcTemplate.query(que, new NoticeRowMapper(),id);
		return st;
	}
	
	public Student updateStudent(int registrationNumber, Student s) {
		String encodedPassword = passwordEncoder.encode(s.getPassword());
		int branch_id = getBranchId(s.getBranch());
		int hostel_id = getHostelId(s.getHostelName());
		String query = "update `students` set `reg_no` = ? ,`password` = ? ,`name` = ?,`semester` = ?,`address` = ?,`personal_mob` = ? ,`parent_mob` =  ? ,`branch_id` = ? ,`room_no` = ?,`hostel_id` = ?,`email` = ?,`gender` = ?,`dob` = ?,`adhaarcard_no` = ? ,`blackdots` = ? where `reg_no` = ?;";

		try {
			jdbcTemplate.update(query, s.getRegistrationNumber() , encodedPassword, s.getName(), s.getSemester(), s.getAddress(), s.getPhoneNumber(), s.getParentPhoneNumber(), branch_id, s.getRoomNo(), hostel_id, s.getEmail(), s.getGender(), s.getDob(), s.getAadharCardNo(), s.getBlackdots(), registrationNumber);
			return fetchStudentByRegistrationNumber(s.getRegistrationNumber());
		}catch (Exception e) {
			return null;
		}
	}
	
	public Student fetchStudentByRegistrationNumber(int registrationNumber) {
		String query = "SELECT `reg_no`, `password`, students.name, `semester`, `address`, `personal_mob`, `parent_mob`, branch.name, `room_no`, hostels.name, `email`, `gender`, `dob`, `adhaarcard_no`, `blackdots` FROM `students` join `branch` join `hostels` WHERE `reg_no` = ? AND students.branch_id = branch.id AND students.hostel_id = hostels.id;";
		try {
			Student student = jdbcTemplate.queryForObject(query, new StudentRowMapper(), registrationNumber);
			return student;
		}
		catch(EmptyResultDataAccessException e) {
			return null;
		}
	}
	
	public Student fetchStudentByRegistrationNumberOfSpecificHostel(int registrationNumber) {
		String query = "SELECT `reg_no`, `password`, students.name, `semester`, `address`, `personal_mob`, `parent_mob`, branch.name, `room_no`, hostels.name, `email`, `gender`, `dob`, `adhaarcard_no`, `blackdots` FROM `students` join `branch` join `hostels` WHERE `reg_no` = ? AND students.branch_id = branch.id AND students.hostel_id = hostels.id;";
		try {
			Student student = jdbcTemplate.queryForObject(query, new StudentRowMapper(), registrationNumber);
			return student;
		}
		catch(EmptyResultDataAccessException e) {
			return null;
		}
	}
	
	public List<Student> fetchStudents(){
		String query = "SELECT `reg_no`, `password`, students.name, `semester`, `address`, `personal_mob`, `parent_mob`, branch.name, `room_no`, hostels.name, `email`, `gender`, `dob`, `adhaarcard_no`, `blackdots` FROM `students` join `branch` join `hostels` WHERE students.branch_id = branch.id AND students.hostel_id = hostels.id;";
		try {
			List<Student> students = jdbcTemplate.query(query, new StudentRowMapper());
			return students;
		}catch (Exception e) {
			return null;
		}
	}

	public int getBranchId(String branchName) {
		String query = "SELECT `id` FROM `branch` where `name` = ?;";
		int branch_id = (int)jdbcTemplate.queryForObject(query, Integer.class, branchName);
		return branch_id;
	}
	
	public int getHostelId(String hostelName) {
		String query = "SELECT `id` FROM `hostels` where `name` = ?;";
		int hostel_id = (int)jdbcTemplate.queryForObject(query, Integer.class, hostelName);
		return hostel_id;
	}
	
}

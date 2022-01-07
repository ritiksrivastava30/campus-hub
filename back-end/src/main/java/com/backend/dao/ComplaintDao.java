package com.backend.dao;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;
import com.backend.pojo.Complaint;

@Repository
public class ComplaintDao extends StarterDao{

	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	public Complaint sendComplaint(Complaint complaint) {
		String query="select `hostel_id` from `students` where `reg_no` = ?;";
		int id=(int)jdbcTemplate.queryForObject(query,Integer.class,complaint.getStudent_reg_no());
		query ="INSERT INTO `complaints` (`student_reg_no`, `hostel_id`, `complaint`) VALUES ( ?,?,?);";
		try {
			jdbcTemplate.update(query,complaint.getStudent_reg_no(),id,complaint.getComplaint());
			return complaint;
		}catch(Exception e) {
			return null;
		}
	}
	public List<Complaint> fetchComplaints(String hname){
		String query="SELECT `id` from `hostels` WHERE `name`=?;";
		int hid=(int)jdbcTemplate.queryForObject(query, Integer.class,hname);
		query="SELECT * FROM `complaints` WHERE `hostel_id`=?;";
		List<Complaint> complaints=jdbcTemplate.query(query, new ComplaintRowMapper(),hid);
		return complaints;
	}
}
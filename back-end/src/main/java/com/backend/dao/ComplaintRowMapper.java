package com.backend.dao;

import org.springframework.jdbc.core.RowMapper;
import java.sql.ResultSet;
import java.sql.SQLException;
import com.backend.pojo.Complaint;

public class ComplaintRowMapper implements RowMapper<Complaint> {

	@Override
	public Complaint mapRow(ResultSet rs, int rowNum) throws SQLException{
		Complaint complaint=new Complaint();
		complaint.setId(rs.getInt(1));
		complaint.setStudent_reg_no(rs.getInt(2));
		complaint.setHostel_id(rs.getInt(3));
		complaint.setComplaint(rs.getString(4));
		return complaint;
	}
}

package com.backend.dao.rowmappers;

import java.sql.ResultSet;
import java.sql.SQLException;
import org.springframework.jdbc.core.RowMapper;

import com.backend.pojo.Guard;

public class GuardRowMapper implements RowMapper<Guard>{
	
	@Override
	public Guard mapRow(ResultSet rs, int rowNum) throws SQLException {
		
		Guard guard = new Guard();
		guard.setId(rs.getInt(1));
		guard.setName(rs.getString(2));
		guard.setEmail(rs.getString(3));
		guard.setPassword(rs.getString(4));
		guard.setPhone_no(rs.getString(5));
		guard.setHostelName(rs.getString(6));
		return guard;
	}
}

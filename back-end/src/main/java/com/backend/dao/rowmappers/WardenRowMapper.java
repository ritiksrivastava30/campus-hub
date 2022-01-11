package com.backend.dao.rowmappers;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.backend.pojo.Warden;

public class WardenRowMapper implements RowMapper<Warden> {

	@Override
	public Warden mapRow(ResultSet rs, int rowNum) throws SQLException {
		
		Warden warden = new Warden();
		warden.setId(rs.getInt(1));
		warden.setName(rs.getString(2));
		warden.setEmail(rs.getString(3));
		warden.setPassword(rs.getString(4));
		warden.setPhoneNumber(rs.getString(5));
		warden.setHostelName(rs.getString(6));
		return warden;
	}
	
	
}

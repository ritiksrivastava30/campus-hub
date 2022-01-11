package com.backend.dao.rowmappers;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.backend.pojo.Hostel;

public class HostelRowMapper implements RowMapper<Hostel>{

	@Override
	public Hostel mapRow(ResultSet rs, int rowNum) throws SQLException {
		
		Hostel hostel = new Hostel();
		hostel.setId(rs.getInt(1));
		hostel.setName(rs.getString(2));
		hostel.setCapacity(rs.getInt(3));
		hostel.setStatus(rs.getInt(4));
		return hostel;
	}
	
}
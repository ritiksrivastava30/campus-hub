package com.backend.dao.rowmappers;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.backend.pojo.Notice;

public class NoticeRowMapper implements RowMapper<Notice>{

	@Override
	public Notice mapRow(ResultSet rs, int rowNum) throws SQLException {
		// TODO Auto-generated method stub
		Notice notice =new Notice();
		notice.setId(rs.getInt(1));
		notice.setNotice(rs.getString(2));
		notice.setHostel_id(rs.getInt(3));
		return notice;
	}

}

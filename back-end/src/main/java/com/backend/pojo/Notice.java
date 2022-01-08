package com.backend.pojo;

public class Notice {
	private int id;
	private String notice;
	private int hostel_id;
	
	public Notice(int id, String notice, int hostel_id) {
		super();
		this.id = id;
		this.notice = notice;
		this.hostel_id = hostel_id;
	}
	public Notice() {
		 super();
		 // TODO Auto-generated constructor stub
	 }
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNotice() {
		return notice;
	}

	public void setNotice(String notice) {
		this.notice = notice;
	}

	public int getHostel_id() {
		return hostel_id;
	}

	public void setHostel_id(int hostel_id) {
		this.hostel_id = hostel_id;
	}
	
}

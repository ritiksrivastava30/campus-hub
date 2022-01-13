package com.backend.pojo;

public class Complaint {
	private int regNo;
	private String name;
	private String complaint;
	private String reply;
	private int hostel_id;
	
	public Complaint(int regNo, String name, String complaint, int hostel_id) {
		super();
		this.regNo = regNo;
		this.name = name;
		this.complaint = complaint;
		this.reply = reply;
		this.hostel_id = hostel_id;
	}

	public String getReply() {
		return reply;
	}

	public void setReply(String reply) {
		this.reply = reply;
	}

	public Complaint() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getRegNo() {
		return regNo;
	}

	public void setRegNo(int regNo) {
		this.regNo = regNo;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getComplaint() {
		return complaint;
	}

	public void setComplaint(String complaint) {
		this.complaint = complaint;
	}

	public int getHostel_id() {
		return hostel_id;
	}

	public void setHostel_id(int hostel_id) {
		this.hostel_id = hostel_id;
	}
	
}

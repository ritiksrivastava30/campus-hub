package com.backend.pojo;

public class Complaint {

	int id;
	int student_reg_no;
	int hostel_id;
	String complaint;
	
	public Complaint() {
		super();
	}
	public Complaint(int id, int student_reg_no, int hostel_id, String complaint) {
		super();
		this.id = id;
		this.student_reg_no = student_reg_no;
		this.hostel_id = hostel_id;
		this.complaint = complaint;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getStudent_reg_no() {
		return student_reg_no;
	}
	public void setStudent_reg_no(int student_reg_no) {
		this.student_reg_no = student_reg_no;
	}
	public int getHostel_id() {
		return hostel_id;
	}
	public void setHostel_id(int hostel_id) {
		this.hostel_id = hostel_id;
	}
	public String getComplaint() {
		return complaint;
	}
	public void setComplaint(String complaint) {
		this.complaint = complaint;
	}
}

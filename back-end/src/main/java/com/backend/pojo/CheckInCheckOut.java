package com.backend.pojo;
import java.sql.Timestamp;

public class CheckInCheckOut {
	
	private int reg_no;
	private Timestamp checkOutTime;
	private Timestamp checkInTime;
	
	public int getReg_no() {
		return reg_no;
	}
	public void setReg_no(int reg_no) {
		this.reg_no = reg_no;
	}
	public Timestamp getCheckOutTime() {
		return checkOutTime;
	}
	public void setCheckOutTime(Timestamp checkOutTime) {
		this.checkOutTime = checkOutTime;
	}
	public Timestamp getCheckInTime() {
		return checkInTime;
	}
	public CheckInCheckOut(int reg_no, Timestamp checkOutTime, Timestamp checkInTime) {
		super();
		this.reg_no = reg_no;
		this.checkOutTime = checkOutTime;
		this.checkInTime = checkInTime;
	}
	public void setCheckInTime(Timestamp checkInTime) {
		this.checkInTime = checkInTime;
	}
	
	@Override
	public String toString() {
		return "CheckInCheckOut [reg_no=" + reg_no + ", checkOutTime=" + checkOutTime + ", checkInTime=" + checkInTime
				+ "]";
	}
	public CheckInCheckOut() {
		super();
	}
	


}

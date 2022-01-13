import _ from "lodash";
import { ADD_STUDENT, EDIT_STUDENT, FETCH_STUDENT, FETCH_STUDENTS, FETCH_STUDENTS_OF_HOSTEL, FETCH_NOTICES, RESET_STUDENTS, RESET_NOTICES, FILE_COMPLAINT, SHOW_REPLY, RESET_COMPLAINTS  } from "./_types/student_types";
import { LOGIN_STUDENT } from "./_types/login_types";

import api from "../apis/main";
import { formValues } from "redux-form";

export const loginStudent = (formValues) => async dispatch => {
    try {
        const response = await api.get(`/students/${formValues.userName}/${formValues.password}`);
        if(response.data === "error") {
            dispatch({ type : "STATUS", payload : { status:"Error", description : "Check your credentials." } }); 
            return; 
        }
        localStorage.setItem("as", "student");
        localStorage.setItem("to", response.data);
    
        dispatch({ type : "STATUS", payload : { status:"Success", description : `${response.data}` } }); 
        dispatch({ type : LOGIN_STUDENT, payload : response.data });
    } catch(error) {
        dispatch({ type : "STATUS", payload : { status:"Error", description : "Server Error" } }); 
    }
}

export const fetchStudents = () => async dispatch => {
    const response = await api.get("/students");
    
    dispatch({ type : FETCH_STUDENTS, payload : response.data });
}

export const fetchStudentsOfHostel = (hostelName) => async dispatch => {
    const response = await api.get(`/students/hostel/${hostelName}`);
    
    dispatch({ type : FETCH_STUDENTS_OF_HOSTEL, payload : response.data });
}

export const fetchNotices = (regNo) => async dispatch => {
    const response = await api.get(`/students/notices/${regNo}`);

    dispatch({ type : FETCH_NOTICES, payload : response.data });
}

export const showReply = (regNo) => async dispatch => {
    console.log(SHOW_REPLY);
    const response = await api.get(`/students/showReply/${regNo}`);
    console.log(response.data);
    if(_.isEmpty(response.data)) {
        dispatch({ type : "STATUS", payload : { status:"Error", description : "Error in uploading notice" } }); 
        return; 
    }

    dispatch({ type : "STATUS", payload : { status:"Success", description : `${response.data.name}` } }); 
    dispatch({ type : SHOW_REPLY, payload : response.data });
}

export const fileComplaint = (regNo, formValues) => async dispatch => {
    console.log(FILE_COMPLAINT);
    const response = await api.post(`/students/fileComplaint/${regNo}/${formValues.complaint}`);

    if(_.isEmpty(response.data)) {
        dispatch({ type : "STATUS", payload : { status:"Error", description : "Error in filing complaint" } }); 
        return; 
    }

    dispatch({ type : "STATUS", payload : { status:"Success", description : `${response.data.name}` } }); 
    dispatch({ type : FILE_COMPLAINT , payload : response.data });
}
export const addStudent = (formValues) => async dispatch => {
    try {
    const response = await api.post("/students", formValues);

    if(_.isEmpty(response.data)) {
        dispatch({ type : "STATUS", payload : { status:"Error", description : "A student with same registration number already exists." } }); 
        return; 
    }

    dispatch({ type : "STATUS", payload : { status:"Success", description : `${response.data.name}` } }); 
    dispatch({ type : ADD_STUDENT, payload : response.data });
    }catch(error){
        dispatch({ type : "STATUS", payload : { status:"Error", description : "Server Error" } }); 
    }
}

export const editStudent = (id, formValues) => async dispatch => {
    try {
        const response = await api.patch(`/students/${id}`, formValues);

        if(_.isEmpty(response.data)) {
            dispatch({ type : "STATUS", payload : { status:"Error", description : "A student with same registration number already exists." } }); 
            return; 
        }

        dispatch({ type : "STATUS", payload : { status:"Success", description : `${response.data.name}` } }); 
        dispatch({ type : EDIT_STUDENT, payload : response.data });
    } catch(error){
        dispatch({ type : "STATUS", payload : { status:"Error", description : "Server Error" } }); 
    }
}

export const fetchStudentByRegistrationNumberOfSpecificHostel = (registrationNumber, hostelName) => async dispatch => {
    const response = await api.get(`/student/${hostelName}/${registrationNumber}`);
    
    if(_.isEmpty(response.data)) {
        dispatch({ type : "STATUS", payload : { status:"Error", description : "Check your credentials" } }); 
        return; 
    }

    dispatch({ type : FETCH_STUDENT, payload : response.data });
}

export const fetchStudentByRegistrationNumber = (registrationNumber) => async dispatch => {
    const response = await api.get(`/students/${registrationNumber}`);
    
    if(_.isEmpty(response.data)) {
        dispatch({ type : "STATUS", payload : { status:"Error", description : "Check your credentials" } }); 
        return; 
    }

    dispatch({ type : FETCH_STUDENT, payload : response.data });
}

export const resetStudents = () => async dispatch => {
    dispatch ({ type : RESET_STUDENTS, payload : {} });
}

export const resetNotices = () => async dispatch => {
    dispatch ({ type : RESET_NOTICES, payload : {} });
}

export const resetComplaints = () => async dispatch => {
    dispatch ({ type : RESET_COMPLAINTS, payload : {} });
}

export const loginStudentThroughLocalStorage = (registrationNumber) => async dispatch => {
    
    dispatch({ type : LOGIN_STUDENT, payload : registrationNumber });
}

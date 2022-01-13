import _ from "lodash";

import { ADD_HOSTEL, EDIT_HOSTEL, FETCH_HOSTELS, RESET_HOSTELS, ADD_NOTICE, FETCH_COMPLAINTS, RESET_COMPLAINTS, REPLY_COMPLAINT} from "./_types/hostel_types";
import { LOGIN_HOSTEL } from "./_types/login_types";
import api from "../apis/main";

export const loginHostel = (formValues) => async dispatch => {
    try{
        const response = await api.get(`/hostels/${formValues.userName}/${formValues.password}`);

        if(response.data === "error"){
            dispatch({ type : "STATUS", payload : { status:"Error", description : "Check your credentials" } }); 
            return; 
        }

        localStorage.setItem("as", "hostel");
        localStorage.setItem("to", response.data);
        
        dispatch({ type : "STATUS", payload : { status:"Success", description : `${response.data}` } }); 
        dispatch({type : LOGIN_HOSTEL, payload : response.data});
    } catch(error){
        dispatch({ type : "STATUS", payload : { status:"Error", description : "Server Error" } }); 
    }
}

export const fetchHostels = () => async dispatch => {
    const response = await api.get("/hostels");
    dispatch({ type : FETCH_HOSTELS, payload : response.data} );
}

export const addHostel = (formValues) => async dispatch => {
    try {
        const response = await api.post("/hostels", formValues);
        if(_.isEmpty(response.data)) {
            dispatch({ type : "STATUS", payload : { status:"Error", description : "A hostel with same name already exists." } }); 
            return; 
        }
        dispatch({ type : "STATUS", payload : { status:"Success", description : `${response.data.name}` } }); 
        dispatch({ type : ADD_HOSTEL, payload : response.data });
    } catch(error) {
        dispatch({ type : "STATUS", payload : { status:"Error", description : "Server Error" } }); 
    }
}
export const addNotice = (hostelName, formValues) => async dispatch => {
    console.log(ADD_NOTICE);
    const response = await api.post(`/hostels/addNotice/${hostelName}/${formValues.notice}`);

    if(_.isEmpty(response.data)) {
        dispatch({ type : "STATUS", payload : { status:"Error", description : "Error in uploading notice" } }); 
        return; 
    }

    dispatch({ type : "STATUS", payload : { status:"Success", description : `${response.data.name}` } }); 
    dispatch({ type : ADD_NOTICE, payload : response.data });
}
export const replyComplaint = (formValues) => async dispatch => {
    console.log(REPLY_COMPLAINT);
    console.log(formValues);
    const response = await api.patch(`/hostels/replyComplaint/${formValues.regNo}/${formValues.reply}`);
    console.log(response.data);
    if(_.isEmpty(response.data)) {
        dispatch({ type : "STATUS", payload : { status:"Error", description : "Error in uploading notice" } }); 
        return; 
    }

    dispatch({ type : "STATUS", payload : { status:"Success", description : `${response.data.name}` } }); 
    dispatch({ type : REPLY_COMPLAINT, payload : response.data });
}


export const fetchComplaints = (hostelName) => async dispatch => {
    console.log(FETCH_COMPLAINTS);
    const response = await api.get(`/hostels/complaints/${hostelName}`);
    console.log(response.data);
    dispatch({ type : FETCH_COMPLAINTS, payload : response.data });
} 

export const editHostel = (id, formValues) => async dispatch => {
    try {
        const response = await api.patch(`/hostels/${id}`, formValues);
    
        if(_.isEmpty(response.data)) {
            dispatch({ type : "STATUS", payload : { status:"Error", description : "A hostel with same name already exists." } }); 
            return; 
        }

        dispatch({ type : "STATUS", payload : { status:"Success", description : `${response.data.name}` } }); 
        dispatch({ type : EDIT_HOSTEL, payload : response.data });
    } catch(error){
        dispatch({ type : "STATUS", payload : { status:"Error", description : "Server Error" } }); 
    }
}

export const resetComplaints = () => async dispatch => {
    dispatch ({ type : RESET_COMPLAINTS, payload : {} });
}

export const resetHostels = () => async dispatch => {
    dispatch ({ type : RESET_HOSTELS, payload : {} });
}

export const loginHostelThroughLocalStorage = (hostelName) => async dispatch => {
    
    dispatch({ type : LOGIN_HOSTEL, payload : hostelName });
}
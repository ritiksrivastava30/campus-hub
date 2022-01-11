import _ from "lodash";

import { ADD_HOSTEL, EDIT_HOSTEL, FETCH_HOSTELS, RESET_HOSTELS, ADD_NOTICE } from "./_types/hostel_types";
import { LOGIN_HOSTEL } from "./_types/login_types";
import api from "../apis/main";

export const loginHostel = (formValues) => async dispatch => {
    const response = await api.get(`/hostels/${formValues.userName}/${formValues.password}`);

    if(response.data === "error"){
        dispatch({ type : "STATUS", payload : { status:"Error", description : "Check your credentials" } }); 
        return; 
    }

    localStorage.setItem("as", "hostel");
    localStorage.setItem("to", response.data);
    
    dispatch({ type : "STATUS", payload : { status:"Success", description : `${response.data}` } }); 
    dispatch({type : LOGIN_HOSTEL, payload : response.data});
}

export const fetchHostels = () => async dispatch => {
    const response = await api.get("/hostels");
    dispatch({ type : FETCH_HOSTELS, payload : response.data} );
}

export const addHostel = (formValues) => async dispatch => {
    const response = await api.post("/hostels", formValues);
    if(_.isEmpty(response.data)) {
         dispatch({ type : "STATUS", payload : { status:"Error", description : "A hostel with same name already exists." } }); 
         return; 
    }
    dispatch({ type : "STATUS", payload : { status:"Success", description : `${response.data.name}` } }); 
    dispatch({ type : ADD_HOSTEL, payload : response.data });
}
export const addNotice = (hostelName, formValues) => async dispatch => {
    console.log(ADD_NOTICE);
    console.log(formValues);
    console.log(hostelName);
    const response = await api.post(`/hostels/addNotice/${hostelName}/${formValues.notice}`);

    if(_.isEmpty(response.data)) {
        dispatch({ type : "STATUS", payload : { status:"Error", description : "Error in uploading notice" } }); 
        return; 
    }

    dispatch({ type : "STATUS", payload : { status:"Success", description : `${response.data.name}` } }); 
    dispatch({ type : ADD_NOTICE, payload : response.data });
}

export const editHostel = (id, formValues) => async dispatch => {
    const response = await api.patch(`/hostels/${id}`, formValues);

    if(_.isEmpty(response.data)) {
        dispatch({ type : "STATUS", payload : { status:"Error", description : "A hostel with same name already exists." } }); 
        return; 
    }

    dispatch({ type : "STATUS", payload : { status:"Success", description : `${response.data.name}` } }); 
    dispatch({ type : EDIT_HOSTEL, payload : response.data });
}


export const resetHostels = () => async dispatch => {
    dispatch ({ type : RESET_HOSTELS, payload : {} });
}

export const loginHostelThroughLocalStorage = (hostelName) => async dispatch => {
    
    dispatch({ type : LOGIN_HOSTEL, payload : hostelName });
}
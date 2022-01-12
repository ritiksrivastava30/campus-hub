import { FETCH_GUARDS } from "./_types/guard_types";
import { LOGIN_GUARD } from "./_types/login_types";
import { CHECK_IN_CHECK_OUT } from "./_types/guard_types";

import api from "../apis/main";

export const loginGuard = (formValues) => async dispatch => {
    try {
        const response = await api.get(`/guards/${formValues.userName}/${formValues.password}`);
        
        if(response.data === "error"){
            dispatch({ type : "STATUS", payload : { status:"Error", description : "Check your credentials" } }); 
            return; 
        }
    
        localStorage.setItem("as", "guard");
        localStorage.setItem("to", response.data);
        
        dispatch({ type : "STATUS", payload : { status:"Success", description : `${response.data}` } });
        dispatch({ type : LOGIN_GUARD, payload : response.data });
    } catch(error){
        dispatch({ type : "STATUS", payload : { status:"Error", description : "Server Error" } }); 
    } 
}

export const fetchGuards = () => async dispatch => {
    console.log(FETCH_GUARDS);
    const response = await api.get("/guards");

    dispatch({ type : FETCH_GUARDS, payload : response.data} );
}

export const checkInCheckOut = (formValues) => async dispatch => {
    console.log(checkInCheckOut);
    const response = await api.get(`/guards/${formValues.regNo}`);

    dispatch({ type : CHECK_IN_CHECK_OUT, payload : response.data} );
}

export const loginGuardThroughLocalStorage = (hostelName) => async dispatch => {
    
    dispatch({ type : LOGIN_GUARD, payload : hostelName });
}


import _ from "lodash";
import { ADD_WARDEN, FETCH_WARDENS, RESET_WARDENS, UPDATE_WARDEN } from "./_types/warden_types";
import api from "../apis/main";

export const addWarden = (formValues) => async dispatch => {
    const response = await api.post("/wardens", formValues);

    if(_.isEmpty(response.data)) {
        dispatch({ type : "STATUS", payload : { status:"Error", description : "A warden with same credentials(email or phone) already exists."  } }); 
        return; 
    }
    dispatch({ type : "STATUS", payload : { status:"Success", description : `${response.data.email}` } });

    dispatch({ type : ADD_WARDEN, payload : response.data });
}

export const fetchWardens = () => async dispatch => {
    const response = await api.get("/wardens");

    dispatch({ type : FETCH_WARDENS, payload : response.data });
}

export const editWarden = (id, formValues) => async dispatch => {
    const response = await api.patch(`/wardens/${id}`, formValues);

    if(_.isEmpty(response.data)) {
        dispatch({ type : "STATUS", payload : { status:"Error", description : "A warden with same credentials(email or phone) already exists."  } }); 
        return; 
    }
    dispatch({ type : "STATUS", payload : { status:"Success", description : `${response.data.email}` } });
    
    dispatch({ type : UPDATE_WARDEN, payload : response.data});
}

export const resetWardens = () => async dispatch => {
    dispatch({ type : RESET_WARDENS, payload : {} });
}
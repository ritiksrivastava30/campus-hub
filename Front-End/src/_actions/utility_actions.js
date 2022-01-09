import { RESET_LOGIN } from "./_types/login_types";
import { RESET_STATUS, FETCH_BRANCH, RESET_BRANCH } from "./_types/utility_types";
import api from "../apis/main";
import { RESET_NOTICES } from "./_types/student_types";

export const resetLogin = () => async dispatch => {

    dispatch( { type : RESET_LOGIN, payload : {} } );
} 

export const resetStatus = () => async dispatch => {

    dispatch( { type : RESET_STATUS, payload : {} } );
}

export const fetchBranch = () => async dispatch => {
    const response = await api.get("/branch");

    dispatch({ type : FETCH_BRANCH, payload : response.data });
}

export const resetBranch = () => async dispatch => {

    dispatch({ type : RESET_BRANCH, payload : {} });
}
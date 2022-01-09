import { FETCH_MENU, RESET_MENU } from "./_types/mess_types";
import api from "../apis/main";

export const fetchMenu = (hostelName) => async dispatch => {
    const response = await api.get(`/menu/${hostelName}`);

    console.log(response.data);
    dispatch({ type : FETCH_MENU, payload : response.data });
}

export const changeMenu = (hostelName, day, time, menu) => async dispatch => {
    const response = await api.patch(`/menu/${hostelName}/${day}/${time}/${menu}`);

    console.log(response.data);
    dispatch({ type : FETCH_MENU, payload : response.data })
}

export const resetMenu = () => async dispatch => {
    dispatch({ type : RESET_MENU, payload : {} });
}
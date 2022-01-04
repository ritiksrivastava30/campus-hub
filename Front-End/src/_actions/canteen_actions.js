import { FETCH_CANTEENS } from "./_types/canteen_types";
import { LOGIN_CANTEEN } from "./_types/login_types";
import api from "../apis/main";


export const loginCanteen = (formValues) => async dispatch => {
    console.log(LOGIN_CANTEEN);
    const response = await api.get("/canteens", formValues);

    dispatch({ type : LOGIN_CANTEEN, payload : response.data });
}

export const fetchCanteens = () => async dispatch => {
    console.log(FETCH_CANTEENS);
    const response = await api.get("/canteens");

    dispatch({ type : FETCH_CANTEENS, payload : response.data} );
}

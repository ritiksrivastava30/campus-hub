import _ from "lodash";
import { ADD_HOSTEL, ADD_NOTICE, EDIT_HOSTEL, FETCH_HOSTEL, FETCH_HOSTELS, RESET_HOSTELS } from "../_actions/_types/hostel_types";

export default(state = {}, action) => {
    switch(action.type){
        case FETCH_HOSTEL  : return { ...state, [action.payload.id] : action.payload };
        case FETCH_HOSTELS : return { ...state, ..._.mapKeys(action.payload, "id") };
        case ADD_HOSTEL    : return {...state, [action.payload.id] : action.payload };
        case ADD_NOTICE    : return {...state, [action.payload.id] : action.payload };
        case EDIT_HOSTEL   : return {...state, [action.payload.id] : action.payload };
        case RESET_HOSTELS : return action.payload;
        default            : return state;
    }
}
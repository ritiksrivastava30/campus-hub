import { combineReducers } from "redux";
import { reducer } from "redux-form";
import canteenReducer from "./canteenReducer";
import guardReducer from "./guardReducer";
import hostelReducer from "./hostelReducer";
import studentReducer from "./studentReducer";
import loginReducer from "./loginReducer";
import statusReducer from "./statusReducer";
import wardenReducer from "./wardenReducer";

export default combineReducers({
    form : reducer,
    login : loginReducer,
    student : studentReducer,
    hostel : hostelReducer,
    guard : guardReducer,
    canteen : canteenReducer,
    status : statusReducer,
    wardens : wardenReducer
});
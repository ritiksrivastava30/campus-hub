import { combineReducers } from "redux";
import { reducer } from "redux-form";
import canteenReducer from "./canteenReducer";
import guardReducer from "./guardReducer";
import hostelReducer from "./hostelReducer";
import studentReducer from "./studentReducer";
import loginReducer from "./loginReducer";
import statusReducer from "./statusReducer";
import wardenReducer from "./wardenReducer";
import branchReducer from "./branchReducer";
import noticeReducer from "./noticeReducer";
import messReducer from "./messReducer";

export default combineReducers({
    form : reducer,
    login : loginReducer,
    students : studentReducer,
    hostel : hostelReducer,
    guard : guardReducer,
    canteen : canteenReducer,
    status : statusReducer,
    wardens : wardenReducer,
    branch : branchReducer,
    notices : noticeReducer,
    menu : messReducer,
});
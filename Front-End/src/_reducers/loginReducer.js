import { LOGIN_STUDENT, LOGIN_HOSTEL, LOGIN_GUARD, LOGIN_CANTEEN, RESET_LOGIN } from "../_actions/_types/login_types";

export default(state = {}, action) => {
    switch(action.type){
        case LOGIN_HOSTEL   : return { as : "hostel",  to : action.payload };
        case LOGIN_CANTEEN  : return { as : "canteen", to : action.payload };
        case LOGIN_GUARD    : return { as : "guard", to : action.payload };
        case LOGIN_STUDENT  : {
            localStorage.setItem("as", "student");
            localStorage.setItem("to", action.payload);
            return { as : "student", to : action.payload };
        }
        case RESET_LOGIN    : return action.payload;
        default             : return state;
    }
};   
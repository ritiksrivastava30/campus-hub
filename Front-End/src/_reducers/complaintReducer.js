import { FETCH_COMPLAINTS,REPLY_COMPLAINT,RESET_COMPLAINTS} from "../_actions/_types/hostel_types";
import _ from "lodash";
import { SHOW_REPLY , FILE_COMPLAINT} from "../_actions/_types/student_types";

export default ( state = {}, action ) => {

    switch(action.type){
        case FETCH_COMPLAINTS : return { ...state, ..._.mapKeys(action.payload, "regNo")};
        case REPLY_COMPLAINT   : return {...state, [action.payload.registrationNumber] : action.payload };
        case FILE_COMPLAINT   : return {...state, [action.payload.registrationNumber] : action.payload };
        case SHOW_REPLY  : return { ...state, [action.payload.regNo] : action.payload };
        case RESET_COMPLAINTS : return action.payload;
        default            : return state;
    }

}
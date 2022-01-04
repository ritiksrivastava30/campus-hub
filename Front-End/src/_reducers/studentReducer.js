import { ADD_STUDENT, EDIT_STUDENT, RESET_STUDENTS, FETCH_STUDENT, FETCH_STUDENTS, FETCH_STUDENTS_OF_HOSTEL} from "../_actions/_types/student_types";
import _ from "lodash";

export default(state = {}, action) => {
    switch(action.type){
        case FETCH_STUDENT  : return { ...state, [action.payload.registrationNumber] : action.payload };
        case FETCH_STUDENTS : return { ...state, ..._.mapKeys(action.payload, "registrationNumber")};
        case FETCH_STUDENTS_OF_HOSTEL : return { ...state, ..._.mapKeys(action.payload, "hostelName")};
        case ADD_STUDENT    : return {...state, [action.payload.id] : action.payload };
        case EDIT_STUDENT   : return {...state, [action.payload.id] : action.payload };
        case RESET_STUDENTS : return action.payload;
        default : return state;
    }
}
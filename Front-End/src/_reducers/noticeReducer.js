import { FETCH_NOTICES} from "../_actions/_types/student_types";
import _ from "lodash";

export default ( state = {}, action ) => {

    switch(action.type){
        case FETCH_NOTICES : return { ...state, ..._.mapKeys(action.payload, "id")};
        default            : return state;
    }

}
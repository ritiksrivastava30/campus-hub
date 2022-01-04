import { FETCH_GUARD, FETCH_GUARDS } from "../_actions/_types/guard_types";
import _ from "lodash";

export default(state = {}, action) => {
    switch(action.type){
        case FETCH_GUARD  : return { ...state, [action.payload.guardNumber] : action.payload };
        case FETCH_GUARDS : return { ...state, ..._.mapKeys(action.payload, "guardNumber")};
        default : return state;
    }
}
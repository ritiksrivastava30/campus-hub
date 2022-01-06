import _ from "lodash";
import { FETCH_BRANCH, RESET_BRANCH } from "../_actions/_types/utility_types";

export default(state = {}, action) => {
    switch(action.type) {
        case FETCH_BRANCH : return { ...state, ..._.mapKeys(action.payload, "id") };
        case RESET_BRANCH : return action.payload;
        default : return state;
    }
}
import { FETCH_CANTEEN, FETCH_CANTEENS } from "../_actions/_types/canteen_types";
import _ from "lodash";

export default(state = {}, action) => {
    switch(action.type){
        case FETCH_CANTEEN  : return { ...state, [action.payload.canteenNumber] : action.payload };
        case FETCH_CANTEENS : return { ...state, ..._.mapKeys(action.payload, "canteenNumber")};
        default : return state;
    }
}
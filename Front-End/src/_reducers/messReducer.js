import { FETCH_MENU, RESET_MENU } from "../_actions/_types/mess_types";

export default (state = {}, action ) => {
    switch(action.type){
        case FETCH_MENU : return action.payload;
        case RESET_MENU : return action.payload;
        default         : return state;
    }
}
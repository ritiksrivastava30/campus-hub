import { RESET_STATUS } from "../_actions/_types/utility_types";

export default (state = {}, action) => {
    switch(action.type){
        case "STATUS"     : return action.payload;
        case RESET_STATUS : return {}; 
        default : return state;
    }
} 
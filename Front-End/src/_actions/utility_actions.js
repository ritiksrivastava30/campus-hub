import { RESET_LOGIN } from "./_types/login_types";
import { RESET_STATUS } from "./_types/utility_types";

export const resetLogin = () => async dispatch => {

    dispatch( { type : RESET_LOGIN, payload : {} } );

} 

export const resetStatus = () => async dispatch => {

    dispatch( { type : RESET_STATUS, payload : {} } );
}
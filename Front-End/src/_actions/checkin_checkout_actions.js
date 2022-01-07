import api from "../apis/main";

export const checkIn = ( hostelName, registrationNumber ) => async dispatch => {
    const response = await api.post(`/checkIn/${hostelName}/${registrationNumber}`);

    if(response.data === "checked in") {
        dispatch({ type : "STATUS", payload : { status : "Success", description : `${response.data}` } })
    }

    else {
        dispatch({ type : "STATUS", payload : { status : "Error", description : `${response.data}` } }); 
    }
}

export const checkOut = ( hostelName, registrationNumber ) => async dispatch => {
    const response = await api.post(`/checkOut/${hostelName}/${registrationNumber}`);

    if(response.data === "checked out") {
        dispatch({ type : "STATUS", payload : { status : "Success", description : `${response.data}` } })
    }

    else {
        dispatch({ type : "STATUS", payload : { status : "Error", description : `${response.data}` } }); 
    }

}
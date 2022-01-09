import React, { useState } from "react";
import { connect } from "react-redux";


import { CHANGE_MESS_MENU } from "../_constants/hostel_constants";
import { Button } from "../_utility_components/Button";
import { changeMenu } from "../../_actions/mess_actions";
import ChangeMenuForm from "./ChangeMenuForm";

const ChangeMessMenu = ( props ) => {

    const [ changeMenu, setChangeMenu ] = useState(false);

    const onSubmit = (formValues) => {
        props.changeMenu(props.hostelName, formValues.day, formValues.time, formValues.menu)
    }

    return (
        <div>
            <Button onClick = { () => setChangeMenu(true) } text = { CHANGE_MESS_MENU } />
            { changeMenu ? <ChangeMenuForm onSubmit = { onSubmit } /> : null }
        </div>
    )
}

export default connect( null, { changeMenu } ) (ChangeMessMenu);
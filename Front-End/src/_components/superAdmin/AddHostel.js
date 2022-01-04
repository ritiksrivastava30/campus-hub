import React, { useState } from "react";
import { connect } from "react-redux";

import HostelForm from "./HostelForm";
import { addHostel } from "../../_actions/hostel_actions";
import ErrorModal from "../_utility_components/ErrorModal";
import { resetStatus } from "../../_actions/utility_actions";
import ShowHostel from "./ShowHostel";


const AddHostel = (props) => {

    const [ hostel, setHostel ] = useState({});

    const onSubmit = (formValues) => {
        props.addHostel(formValues);
        setHostel(formValues);
    }

    return (
        <div>
            { 
            props.status.status === "Success" ? 
                <ShowHostel title = "ADDED SUCCESSFULLY" hostel = {hostel} /> :
                <div>
                    <h1>ADD HOSTEL</h1>
                    <HostelForm onSubmit={onSubmit} initialValues={ {status : "1"} }/>
                    { props.status.status === "Error" ? <ErrorModal /> : null }
                </div>
            }
        </div>
    );
    
};

const mapStateToProps = ( state ) => {
    return { status : state.status };
}

export default connect(mapStateToProps, { addHostel, resetStatus })(AddHostel);
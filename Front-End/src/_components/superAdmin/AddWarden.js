import { React, useEffect, useState } from "react";
import { connect } from "react-redux";

import WardenForm from "./WardenForm";
import { addWarden } from "../../_actions/warden_actions";
import ErrorModal from "../_utility_components/ErrorModal";
import ShowWarden from "./ShowWarden";

const AddWarden = (props) => {

    const [ warden, setWarden ] = useState({});

    const onSubmit = (formValues) => {
        props.addWarden(formValues);
        setWarden(formValues);
    }

    return (
        <div className="container">
            <div className="card">
            {
                props.status.status === "Success" ? 
                <ShowWarden title = "Warden Added Successfully" warden = {warden} /> : 
                <div>
                    <h1>ADD WARDEN</h1>
                    <WardenForm onSubmit={onSubmit} initialValues={{hostelName : "svbh"}}/>
                    { props.status.status === "Error" ? <ErrorModal /> : null }
                </div>
            }
            </div>
        </div>
    );

};


const mapStateToProps = ( state ) => {
    return { status : state.status };
}

export default connect( mapStateToProps, { addWarden } )(AddWarden);
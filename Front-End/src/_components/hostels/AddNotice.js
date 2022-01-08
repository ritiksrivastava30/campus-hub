import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import NoticeForm from "./NoticeForm";
import { addNotice } from "../../_actions/hostel_actions";

const AddNotice = (props) => {

    const params = useParams();
    const hostelName = params.hostelName;
    //const params = useParams();
    console.log(hostelName);
    
    const onSubmit = (formValues) => {
        props.addNotice(hostelName, formValues);
    }

    return (
        <div>
            <h1>ADD NOTICE</h1>
            <NoticeForm onSubmit={onSubmit} />
        </div>
    );

};

export default connect( null, { addNotice } )(AddNotice);
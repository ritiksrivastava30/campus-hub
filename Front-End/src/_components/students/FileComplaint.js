import React from "react";
import { connect } from "react-redux";
import { Link} from "react-router-dom";
import { Button } from "../_utility_components/Button";
import { useParams } from "react-router-dom";

import ComplaintForm from "./ComplaintForm";
import { fileComplaint } from "../../_actions/student_actions";
import { SHOW_REPLY } from "../../_actions/_types/student_types";

const FileComplaint = (props) => {

    const params = useParams();
    const registrationNumber = params.regNo;
    console.log(registrationNumber);
    
    const onSubmit = (formValues) => {
        props.fileComplaint(registrationNumber, formValues);
    }

    return (
        <div>
            <h1>FILE COMPLAINT</h1>
            <ComplaintForm onSubmit={onSubmit} />
            <Link to = { `/students/${registrationNumber}/showReply`} >
                <Button text = {SHOW_REPLY} />
            </Link>
        </div>
    );

};

export default connect( null, { fileComplaint } )(FileComplaint);
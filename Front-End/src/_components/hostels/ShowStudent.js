import React, { useEffect } from "react";
import { connect } from "react-redux";

import { resetStatus } from "../../_actions/utility_actions";

const ShowStudent = (props) => {

    useEffect(() => {
        return () => props.resetStatus();
    }, []);

    return (
        <div>
            <h3> { props.title } </h3>
            <h2>Registration No: { props.student.regNo } </h2>
            <h2>Name : { props.student.name } </h2>
            <h2>EmailId: { props.student.emailId } </h2>
        </div>
    );
} 

export default connect(null, { resetStatus })(ShowStudent);
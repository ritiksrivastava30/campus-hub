import React, { useEffect } from "react";
import { connect } from "react-redux";

import { resetStatus } from "../../_actions/utility_actions";

const ShowComplaint = (props) => {

    useEffect(() => {
        return () => props.resetStatus();
    }, []);

    return (
        <div>
            <h3> { props.title } </h3>
            <h2> Complaint : { props.complaint.complaint } </h2>
            <h2> Reply : { props.complaint.reply } </h2>
        </div>
    );

}

export default connect(null, { resetStatus })(ShowComplaint);
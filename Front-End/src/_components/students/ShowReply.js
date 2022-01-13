import { connect } from "react-redux";
import _ from "lodash";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { showReply, resetComplaints } from "../../_actions/student_actions";

const ShowReply = (props) => {
    const params = useParams();
    const registrationNumber = params.regNo;

    useEffect(() => {
        props.showReply(registrationNumber);

        return () => props.resetComplaints();
    }, []);

    //const complaints = Object.values(props.complaints);
    return (
        <div>
            {_.isEmpty(props.complaints) ? null : 
            <div classname="container">
                <div className="card">
            <h2> Complaint : { props.complaints.complaint } </h2>
            <h2> Reply : { props.complaints.reply } </h2>
            </div>
            </div>
            }
            
        </div>
    );
}

const mapStateToProps = (state) => {
    return { complaints : Object.values(state.complaints)[0] }
}
const actionCreators = {
    showReply, resetComplaints
}
export default connect(mapStateToProps,actionCreators)(ShowReply);
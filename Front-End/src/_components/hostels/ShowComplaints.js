import React, { useEffect } from "react";
import { connect } from "react-redux";

import ComplaintTable from "./ComplaintTable";
import { Link } from "react-router-dom";
import { Button } from "../_utility_components/Button";
import { fetchComplaints, resetComplaints } from "../../_actions/hostel_actions";
import { useParams } from "react-router-dom";

const Complaints = (props) => {

    const params = useParams();
    const hostelName = params.hostelName;

    useEffect(() => {
        props.fetchComplaints(hostelName);

        return () => props.resetComplaints();
    }, []);

    const complaints = Object.values(props.complaints);

    return (
        <div className="container">
            <div className="card">
            <h2>Complaints</h2>
            <ComplaintTable data = { complaints } rowsPerPage={8} />
            <Link to = {`/hostels/${hostelName}/replyComplaint`} >
                 <Button text = "REPLY TO COMPLAINT" />
            </Link>
            </div>
        </div>
    );
}

const mapStateToProps = ( state ) => {
    return { complaints : state.complaints }
}

export default connect(mapStateToProps, { fetchComplaints, resetComplaints })(Complaints);
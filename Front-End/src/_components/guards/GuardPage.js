import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { Button } from "../_utility_components/Button";
import {CHECK_IN_CHECK_OUT,STUDENT_OUTSIDE} from "../_constants/guard_constants";

const GuardPage = (props) => {
    const params = useParams();
    const hostelName = params.hostelName;
    return (
        <div>
            <h1>{`Hostel ${hostelName}`}</h1>
            <Link to = "/guards/:hostelName/CheckInCheckOut">
                <Button text = {CHECK_IN_CHECK_OUT} />
            </Link>
            <Link to = "/guards/:hostelName/studentOutside">
                <Button text = {STUDENT_OUTSIDE} />
            </Link>
            <Outlet />
        </div>
    );
}

export default connect(null, {} )(GuardPage);
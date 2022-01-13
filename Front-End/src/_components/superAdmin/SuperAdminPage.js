import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { connect } from "react-redux";

import { fetchHostels, resetHostels } from "../../_actions/hostel_actions";
import { fetchWardens, resetWardens } from "../../_actions/warden_actions";
import { resetLogin, resetStatus } from "../../_actions/utility_actions";
import { Button } from "../_utility_components/Button";
import { ADD_HOSTEL, ADD_WARDEN, SHOW_HOSTELS, SHOW_WARDENS } from "../_constants/super_admin_constants";

const SuperAdminPage = (props) => {

    useEffect(() => {
        props.resetStatus();
        props.fetchHostels();
        props.fetchWardens();
    }, []);

    const reset = () => {
        localStorage.clear();
        props.resetLogin();
        props.resetHostels();
        props.resetWardens();
    }

    return (
        <div className="bgimg">
            <div className="navbar">
            <h1>Super Admin Page</h1>
            <Link to = "/superAdmin/addHostel">
                <Button text = {ADD_HOSTEL} />
            </Link>
            <Link to = "/superAdmin/addWarden">
                <Button text = {ADD_WARDEN} />
            </Link>
            <Link to = "/superadmin/showHostels">
                <Button text = {SHOW_HOSTELS} />
            </Link>
            <Link to = "/superadmin/showWardens">
                <Button text = {SHOW_WARDENS} />
            </Link>
            <Link to = "/">
                <Button onClick = { reset } text = "LOG OUT" />
            </Link>
            </div>
            <Outlet />
        </div>
    );
}

const actionCreators = {
    fetchHostels, fetchWardens, resetHostels, resetWardens, resetLogin, resetStatus
}
export default connect(null, actionCreators )(SuperAdminPage);
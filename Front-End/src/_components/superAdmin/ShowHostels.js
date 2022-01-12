import React from "react";
import { connect } from "react-redux";
import HostelTable from "./HostelTable";

const ShowHostels = (props) => {
    const hostels = Object.values(props.hostels);

    return (
        <div className="container">
            <div className="card">
        <h2>List Of Hostels</h2>
        <HostelTable data = {hostels} rowsPerPage={8}/>
        </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { hostels : state.hostel }
}

export default connect(mapStateToProps, {})(ShowHostels);
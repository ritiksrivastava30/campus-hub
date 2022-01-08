import React, { useEffect } from "react";
import { connect } from "react-redux";

import NoticeTable from "./NoticeTable";
import { fetchNotices, resetNotices } from "../../_actions/student_actions";
import { useParams } from "react-router-dom";

const Notices = (props) => {

    const params = useParams();
    const registrationNumber = params.regNo;

    useEffect(() => {
        props.fetchNotices(registrationNumber);

        return () => props.resetNotices();
    }, []);

    const notices = Object.values(props.notices);

    return (
        <div>
            <h2>Notices</h2>
            <NoticeTable data = { notices } rowsPerPage={8} />
        </div>
    );
}

const mapStateToProps = ( state ) => {
    return { notices : state.notices }
}

export default connect(mapStateToProps, { fetchNotices, resetNotices })(Notices);
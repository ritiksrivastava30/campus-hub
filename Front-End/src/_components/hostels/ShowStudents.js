import React, { useEffect } from "react";
import { connect } from "react-redux";

import StudentTable from "./StudentTable";
import { fetchStudentsOfHostel, resetStudents } from "../../_actions/student_actions";
import { useParams } from "react-router-dom";

const ShowStudents = (props) => {

    const params = useParams();
    const hostelName = params.hostelName;

    useEffect(() => {
        props.fetchStudentsOfHostel(hostelName);

        return () => props.resetStudents();
    }, []);

    const students = Object.values(props.students);

    return (
        <div>
            <h2>List Of Students</h2>
            <StudentTable data = { students } rowsPerPage={8} />
        </div>
    );
}

const mapStateToProps = ( state ) => {
    return { students : state.students }
}

export default connect(mapStateToProps, { fetchStudentsOfHostel, resetStudents })(ShowStudents);
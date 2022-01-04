import React from "react";
import { connect } from "react-redux";
import StudentTable from "./StudentTable";

const ShowStudents = (props) => {
    const students = Object.values(props.students);

    return (
        <div>
        <h2>List Of Students</h2>
        <StudentTable data = {students} rowsPerPage={8}/>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { students : state.student }
}

export default connect(mapStateToProps, {})(ShowStudents);
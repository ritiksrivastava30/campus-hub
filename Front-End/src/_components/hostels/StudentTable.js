import React, { useState } from "react";
import { Link } from "react-router-dom";
import useTable from "../_utility_components/useTable";
import styles from "../_utility_components/Table.module.css";
import TableFooter from "../_utility_components/TableFooter";
import { Button } from "../_utility_components/Button";

const StudentTable = ({ data, rowsPerPage }) => {
  
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);

  return (
    <>
      <table className= "table table-striped table-bordered table-responsive table-info">
        <thead>
          <tr>
            <th className="col">Registration Number</th>
            <th className="col">Name</th>
            <th className="col">Email Id</th>
            <th className="col">Semester</th>
            <th className="col">Address</th>
            <th className="col">Phone Number</th>
            <th className="col">Parent Phone Number</th>
            <th className="col">Branch</th>
            <th className="col">Room Number</th>
            <th className="col">Gender</th>
            <th className="col">DOB</th>
            <th className="col">Aadhar Card Number</th>
            <th className="col">Black Dots</th>


          </tr>
        </thead>
        <tbody>
          {slice.map((el) => (
            <tr key={el.registrationNumber}>
              <td> {el.registrationNumber}</td>
              <td> {el.name} </td>
              <td> {el.email} </td>
              <td> {el.semester} </td>
              <td> {el.address} </td>
              <td> {el.phoneNumber} </td>
              <td> {el.parentPhoneNumber} </td>
              <td> {el.branch} </td>
              <td> {el.roomNo} </td>
              <td> {el.gender} </td>
              <td> {el.dob} </td>
              <td> {el.aadharCardNo} </td>
              <td> {el.blackdots} </td>
              <td>
                <Link to={`/hostels/${el.hostelName}/editStudent/${el.registrationNumber}`}>
                  <Button text="EDIT" />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
    </>
  );
};

export default StudentTable;

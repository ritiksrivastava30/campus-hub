import React, { useState } from "react";
//import { Link } from "react-router-dom";
import useTable from "../_utility_components/useTable";
//import styles from "../_utility_components/Table.module.css";
import TableFooter from "../_utility_components/TableFooter";
//import { Button } from "../_utility_components/Button";

const ComplaintTable = ({ data, rowsPerPage }) => {
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);

  return (
    <>
      <table className= "table table-striped table-bordered table-responsive table-info">
        <thead>
          <tr>
            <th className="col">Complaint</th>
            <th className="col">Student Id</th>
            <th className="col">Student name</th>
          </tr>
        </thead>
        <tbody>
          {slice.map((el) => (
            <tr key={el.regNo}>
              <td> {el.complaint} </td>
              <td> {el.regNo} </td>
              <td> {el.name} </td>
            </tr>
          ))}
        </tbody>
      </table>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
    </>
  );
};

export default ComplaintTable;

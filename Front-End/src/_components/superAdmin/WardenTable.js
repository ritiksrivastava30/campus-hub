import React, { useState } from "react";
import { Link } from "react-router-dom";
import useTable from "../_utility_components/useTable";
import styles from "../_utility_components/Table.module.css";
import TableFooter from "../_utility_components/TableFooter";
import { Button } from "../_utility_components/Button";

const WardenTable = ({ data, rowsPerPage }) => {
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);

  return (
    <>
      <table className= "table table-striped table-bordered table-responsive table-info">
        <thead >
          <tr>
            <th className="col">Warden Name</th>
            <th className="col">Email Id</th>
            <th className="col">Phone Number</th>
            <th className="col">Hostel</th>

          </tr>
        </thead>
        <tbody>
          {slice.map((el) => (
            <tr key={el.id}>
              <td>{el.name}</td>
              <td>{el.email}</td>
              <td>{el.phoneNumber}</td>
              <td>{el.hostelName}</td>
              <td>
                <Link to = {`/superAdmin/editWarden/${el.id}`} >
                  <Button text = "EDIT" />
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

export default WardenTable;

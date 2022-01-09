import React, { useState } from "react";
import { Link } from "react-router-dom";
import useTable from "../_utility_components/useTable";
import TableFooter from "../_utility_components/TableFooter";
import { Button } from "../_utility_components/Button";

const HostelTable = ({ data, rowsPerPage }) => {
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);

  return (
    <>
      <table className= "table table-striped table-bordered table-responsive table-info">
        <thead>
          <tr>
            <th className = "col">Hostel Name</th>
            <th className = "col">Capacity</th>
            <th className = "col">IsActive</th>
          </tr>
        </thead>
        <tbody>
          {slice.map((el) => (
            <tr key={el.id}>
              <td>{el.name}</td>
              <td>{el.capacity}</td>
              <td>{el.status}</td>
              <td>
                <Link to={`/superAdmin/editHostel/${el.id}`}>
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

export default HostelTable;

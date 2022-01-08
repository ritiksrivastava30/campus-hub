import React, { useState } from "react";
//import { Link } from "react-router-dom";
import useTable from "../_utility_components/useTable";
import TableFooter from "../_utility_components/TableFooter";
//import { Button } from "../_utility_components/Button";

const NoticeTable = ({ data, rowsPerPage }) => {
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);

  return (
    <>
      <table className= "table table-striped table-bordered table-responsive table-info">
        <thead>
          <tr>
            <th className="col">Notice</th>
            
          </tr>
        </thead>
        <tbody>
          {slice.map((el) => (
            <tr key={el.id}>
              <td> {el.notice} </td>
            </tr>
          ))}
        </tbody>
      </table>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
    </>
  );
};

export default NoticeTable;

import React, { useState } from "react";
import useTable from "../_utility_components/useTable";
//import styles from "../_utility_components/Table.module.css";
import TableFooter from "../_utility_components/TableFooter";

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

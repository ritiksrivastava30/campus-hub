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
      <table className={styles.table}>
        <thead className={styles.tableRowHeader}>
          <tr>
            <th className={styles.tableHeader}>Registration Number</th>
            <th className={styles.tableHeader}>Name</th>
            <th className={styles.tableHeader}>EmailId</th>
          </tr>
        </thead>
        <tbody>
          {slice.map((el) => (
            <tr className={styles.tableRowItems} key={el.regNo}>
              <td className={styles.tableCell}>{el.name}</td>
              <td className={styles.tableCell}>{el.emailId}</td>
              <td className={styles.tableCell}>
                <Link to={`/hostels/editStudent/${el.regNo}`}>
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

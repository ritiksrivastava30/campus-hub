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
      <table className={styles.table}>
        <thead className={styles.tableRowHeader}>
          <tr>
            <th className={styles.tableHeader}>Warden Name</th>
            <th className={styles.tableHeader}>Email Id</th>
            <th className={styles.tableHeader}>Phone Number</th>
            <th className={styles.tableHeader}>Hostel</th>

          </tr>
        </thead>
        <tbody>
          {slice.map((el) => (
            <tr className={styles.tableRowItems} key={el.id}>
              <td className={styles.tableCell}>{el.name}</td>
              <td className={styles.tableCell}>{el.email}</td>
              <td className={styles.tableCell}>{el.phoneNumber}</td>
              <td className={styles.tableCell}>{el.hostelName}</td>
              <td className={styles.tableCell}>
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

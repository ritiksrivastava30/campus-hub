import React from "react";

const MenuTable = ({ data }) => {
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Day</th>
            <th>Breakfast</th>
            <th>Lunch</th>
            <th>Dinner</th>
          </tr>
        </thead>
        <tbody>
          {data.map((el) => (
            <tr key={el.dayName}>
              <td> {el.dayName} </td>
              <td> {el.breakfast} </td>
              <td> {el.lunch} </td>
              <td> {el.dinner} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MenuTable;

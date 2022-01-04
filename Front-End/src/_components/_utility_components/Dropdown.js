import React from "react";

const Dropdown = ({ label, options, input }) => {
  const renderSelectOptions = (option) => (
    <option key={option.value} value={option.value}>
      {option.label}
    </option>
  );

  return (
    <div>
      <label> {label} </label>
      <select {...input}>
        <option value=""> Select a Hostel </option>
        {options.map(renderSelectOptions)}
      </select>
    </div>
  );
};

export default Dropdown;
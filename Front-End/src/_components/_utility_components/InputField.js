import React from "react";

const InputField = (formProps) => {
  
  const renderError = ({ error, touched }) => {
    if (error && touched) {
      return <div>{error}</div>;
    }
  };

  return (
    <div>
      <label> {formProps.label} </label>
      <input className="form-control" 
        onChange={formProps.input.onChange}
        value={formProps.input.value}
        type = {formProps.type}
      />
      {renderError(formProps.meta)}
    </div>
  );
};

export default InputField;

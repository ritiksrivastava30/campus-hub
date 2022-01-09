import React from "react";
import { reduxForm, Field } from "redux-form";

import { days, time } from "../../data/mess_data";
import { Button } from "../_utility_components/Button";
import InputField from "../_utility_components/InputField";

const ChangeMenuForm = (props) => {

    const renderDayOptions = () => {
        return days.map((day) => {
            return <option key = { day.id } value = { day.day } > { day.day } </option>
        })
    }

    const renderTimeOptions = () => {
        return time.map((time) => {
            return <option key = { time.id } value = { time.time } > { time.time } </option>
        })
    }
    
  return (
    <div>
      <form onSubmit={props.handleSubmit(props.onSubmit)}>
        <div>
          <label>Day</label>
          <Field name="day" component="select">
            <option></option>
            {renderDayOptions()}
          </Field>
        </div>

        <div>
          <label>Time</label>
          <Field name="time" component="select">
            <option></option>
            {renderTimeOptions()}
          </Field>
        </div>

        <Field name="menu" component={InputField} label="Menu" />

        <Button text="CHANGE" />
      </form>
    </div>
  );
};

const validate = (formValues) => {
    const errors = {};
    if(!formValues.day) errors.day = "Select a day";
    if(!formValues.time) errors.time = "Select a time";
    if(!formValues.menu) errors.menu = "Enter a valid menu";
    return errors;
}

export default reduxForm({
    form : "CHANGE_MENU_FORM",
    validate
})(ChangeMenuForm);

import React from "react";
import Form from "react-bootstrap/Form";

import "./Select.scss";

function Select({
  options,
  defaultText,
  value,
  setValue,
  className,
  disabled,
  hideDefault,
}) {
  return (
    <div className={disabled ? "form-disabled" : ""}>
      <Form.Select
        className={className ?? "Theme_input_white Theme_select "}
        aria-label="Default select example"
        value={value}
        disabled={disabled}
        onChange={(event) => setValue(event.target.value)}
      >
        {/* <option>{"Alle"}</option> */}
        {options &&
          options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
      </Form.Select>
    </div>
  );
}

export default Select;

import React from "react";
import Form from "react-bootstrap/Form";

import "./Select.scss";

function Select({ options, defaultText, value, setValue }) {

  return (
    <>
      <Form.Select
        className="Theme_input_white Theme_select"
        aria-label="Default select example"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      >
        <option>{defaultText}</option>
        {/* <option>{"Alle"}</option> */}
        
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </Form.Select>
    </>
  );
}

export default Select;

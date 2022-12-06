import React from "react";

import "./Input.scss";

function Input(props) {
  return (
    <div className="input-container">
      {props.label && <label>{props.label}</label>}
      <input
        required={true}
        className={props.InputClass}
        type={props.Inputype}
        name={props.InputName}
        placeholder={props.InputPlaceholder}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}

export default Input;

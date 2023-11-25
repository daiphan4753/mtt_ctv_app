import React from "react";
import "./index.css";

export default function InputCustom(props) {
  return (
    <div className="inputCustom">
      <input
        type={props.type}
        value={props.value}
        placeholder={props.placeHolder}
        className="inputCustom-input"
        onChange={(e) => props.onChange(e)}
      />
    </div>
  );
}

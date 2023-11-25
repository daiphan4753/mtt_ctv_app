import React from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function HeaderCustom(props) {
  return (
    <div className="header">
      <input
        className="header--input fz-input"
        type="text"
        placeholder={props.placeholder}
        value={props.value}
        onChange={(e) => props.onChange(e)}
      />
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        size="1x"
        className="header--icon"
        onClick={props.onClick}
      />
    </div>
  );
}

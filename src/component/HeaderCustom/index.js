import React from "react";
import "./index.css";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HeaderCustom(props) {
  return (
    <div className="header-custom">
      {props.onBack && (
        <div className="header--onBack">
          <FontAwesomeIcon
            size="xl"
            icon={faArrowLeft}
            onClick={props.onClick}
          />
        </div>
      )}
      {props.title && (
        <div className="header--title">
          <span>Minh Thông Technology</span>
        </div>
      )}
    </div>
  );
}

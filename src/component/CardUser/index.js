import React from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CardUser(props) {
  return (
    <div className="cardUser">
      {props.icon && (
        <div className="cardUser--next cardUser--title">
          <FontAwesomeIcon icon={props.icon} />
        </div>
      )}
      <div className="cardUser--box-title">
        <p className="cardUser--title">{props.title}</p>
        {props.hiddenText && props.hiddenText ? (
          <span className="cardUser--valueTitle cardUser--title hiddenText">
            {props.valueTitle}
          </span>
        ) : (
          <span className="cardUser--valueTitle cardUser--title">
            {props.valueTitle}
          </span>
        )}
      </div>
    </div>
  );
}

import React from "react";
import "./index.css";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

export default function HeaderCustom(props) {
  const nav = useNavigate();
  return (
    <>
      {props.title && props.title ? (
        <div className="header-custom bshadow">
          {props.onBack && (
            <div className="header--onBack">
              <FontAwesomeIcon
                size="xl"
                icon={faArrowLeft}
                onClick={
                  props.onClick && props.onClick ? props.onClick : () => nav(-1)
                }
              />
            </div>
          )}
          {props.title && (
            <div className="header--title">
              <span>{props.title}</span>
            </div>
          )}
        </div>
      ) : (
        <div className="header-custom">
          {props.onBack && (
            <div className="header--onBack">
              <FontAwesomeIcon
                size="xl"
                icon={faArrowLeft}
                onClick={
                  props.onClick && props.onClick
                    ? props.onClick
                    : () => nav("/")
                }
              />
              <span style={{marginLeft: '5px', fontWeight: 600}}>Trở lại</span>
            </div>
          )}
        </div>
      )}
    </>
  );
}

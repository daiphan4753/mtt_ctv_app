import React, { useEffect, useState } from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import {
  faUser,
  faHouse,
  faBell,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

export default function BottomNav(props) {
  const [value, setValue] = useState(props.value);
  const opa = 0.4;
  const nav = useNavigate();
  const fsize = "xl";

  useEffect(() => {
    switch (value) {
      case "product":
       nav("/product");
        break;
      case "main":
        nav("/home");
        break;
      case "notification":
        nav("/notification");
        break;
      case "account":
        nav("/account");
        break;
      default:
        nav("/home");
        break;
    }
  }, [value,nav]);
  return (
    <div className="bottom--nav">
      <div
        className="bn--button"
        onClick={() => {
          setValue("main");
        }}
      >
        {value === "main" ? (
          <FontAwesomeIcon icon={faHouse} size={fsize} />
        ) : (
          <FontAwesomeIcon
            icon={faHouse}
            size={fsize}
            style={{ opacity: opa }}
          />
        )}
      </div>
      <div
        className="bn--button"
        onClick={() => {
          setValue("product");
        }}
      >
        {value === "product" ? (
          <FontAwesomeIcon icon={faCartShopping} size={fsize} />
        ) : (
          <FontAwesomeIcon
            icon={faCartShopping}
            size={fsize}
            style={{ opacity: opa }}
          />
        )}
      </div>
      <div
        className="bn--button"
        onClick={() => {
          setValue("notification");
        }}
      >
        {value === "notification" ? (
          <FontAwesomeIcon icon={faBell} size={fsize} />
        ) : (
          <FontAwesomeIcon
            icon={faBell}
            size={fsize}
            style={{ opacity: opa }}
          />
        )}
      </div>
      <div
        className="bn--button"
        onClick={() => {
          setValue("account");
        }}
      >
        {value === "account" ? (
          <FontAwesomeIcon icon={faUser} size={fsize} />
        ) : (
          <FontAwesomeIcon
            icon={faUser}
            size={fsize}
            style={{ opacity: opa }}
          />
        )}
      </div>
    </div>
  );
}

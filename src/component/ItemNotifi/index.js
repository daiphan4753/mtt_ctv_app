import React from "react";
import "./index.css";
export default function ItemNotifi(props) {
  return (
    <div className="item-noti" onClick={props.onClick}>
      <div className="item-noti--img-box">
        <img className="item-noti--img" src={props.src} alt={""} />
      </div>
      <div className="item-noti--box">
        <p className="p item--p-status">{props.status}</p>
        <p className="p">{props.describe}</p>
        <p className="p item--p-date">{props.date}</p>
      </div>
    </div>
  );
}

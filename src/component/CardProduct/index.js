import React from "react";
import "./index.css";

export default function CardProduct(props) {
  return (
    <div className="card-product">
      <div className="card--img-box">
        <img className="card--img" src={props.src} alt={props.alt} />
      </div>
      <div className="card--title-box fa">
        <p className="card--title-brand mp">{props.brand}</p>
        <p className="card--title-name mp">{props.name}</p>
        <p className="card--title-price mp">{props.price}<span>đ</span></p>
        <button className="card--btn" onClick={props.onClick}>Thêm vào đơn</button>
      </div>
    </div>
  );
}

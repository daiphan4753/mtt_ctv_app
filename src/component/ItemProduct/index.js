import React from "react";
import "./index.css";

export default function ItemProduct(props) {
  return (
    <div className="item-product">
      <div className="item--img-box">
        <img className="item--img" src={props.src} alt={props.alt} />
      </div>
      <div className="item--title-box fa">
        <p className="item--title-brand mp">{props.brand}</p>
        <p className="item--title-name mp">{props.name}</p>
        <p className="item--title-price mp">{props.price}<span>đ</span></p>
        <button className="item--btn" onClick={props.onClick}>Thêm vào đơn</button>
      </div>
    </div>
  );
}

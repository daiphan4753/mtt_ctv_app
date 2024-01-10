import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { changeVND } from "../../core/cores";
export default function ItemProduct(props) {
  return (
    <div className="item-product" onClick={props.onClick}>
      {props.src && (
        <div className="item-product--img-box">
          <img className="item-product--img" src={props.src} alt="" />
        </div>
      )}
      {props.brand && (
        <div className="item-product--brand">
          <p>{props.brand}</p>
        </div>
      )}
      <Link to={props.href} style={{textDecoration: 'none'}} >
        {props.name && props.name ? (
          <div className="item-product--name">{props.name}</div>
        ) : (
          <p>Link to</p>
        )}
      </Link>
      {props.price && <div className="item-product--price">{changeVND.format(props.price)}</div>}
    </div>
  );
}

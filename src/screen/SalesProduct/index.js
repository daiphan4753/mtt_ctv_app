import React, { useState, Component } from "react";
import "./index.css";
import { HeaderCustom } from "../../component";
import { useParams } from "react-router-dom";
import { ProductData } from "../../data/ProductData";

export default function SalesProduct() {
  const [detail, setDetail] = useState({});
  let idProduct = useParams();
  const data = ProductData.filter((item) => item.id === parseInt(idProduct.id));
  console.log(data);
  return (
    <>
      <HeaderCustom onBack title={"Minh Thông Technology"} />
      <div className="">
        <ul>
          {ProductData.filter((item) => item.id === parseInt(idProduct.id)).map(
            (item) => (
              <li>{item.id}</li>
            )
          )}
        </ul>
      </div>
    </>
  );
}

import React, { useState } from "react";
import "./index.css";
import { HeaderCustom } from "../../component";
import { useParams } from "react-router-dom";
import { ProductData } from "../../data/ProductData";
import { changeVND, isInteger } from "../../core/cores";

export default function SalesProduct() {
  let idProduct = useParams();
  const [quantity, setQuantity] = useState(1);
  console.log(quantity);
  return (
    <>
      <HeaderCustom onBack title={"Minh Thông Technology"} />
      <div className="">
        {ProductData.filter((item) => item.id === parseInt(idProduct.id)).map(
          (item) => (
            <div className="sales-product">
              <div className="sales-product--img">
                <img src={item.img} />
              </div>
              <div className="sales-product--box">
                <h2 className="sales-product--name mr">{item.name}</h2>
                <p className="sales-product--price mr">
                  {changeVND.format(item.price)}
                </p>
                <div className="sales-product--disc">
                  <div className="sales-product--disc-box">
                    <p className="sales-product--disc-title">Mô tả sản phẩm</p>
                  </div>
                  <p className="sales-product--disc-content">
                    {item.description}
                  </p>
                </div>
              </div>
              <div className="bot-nav">
                <div className="sales-product--disc-box-btn">
                  <div className="sales-product--quantity">
                    <button
                      className="btn-count mr b"
                      onClick={() => setQuantity(isInteger(quantity - 1))}
                    >
                      -
                    </button>
                    <div className="mr sales-product--count b">
                      <p className="mr">{quantity}</p>
                    </div>
                    <button
                      onClick={() => setQuantity(isInteger(quantity + 1))}
                      className="btn-count mr b"
                    >
                      +
                    </button>
                  </div>
                  <button className="sales-product--disc-btn">
                    Thêm vào giỏ hàng
                  </button>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
}

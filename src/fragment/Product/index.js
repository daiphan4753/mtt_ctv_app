import React, { useState } from "react";
import "./index.css";
import { SeachInput, BottomNav, ItemProduct } from "../../component";
import { ProductData } from "../../data/ProductData";

export default function Product() {
  const [findProduct, setFindProduct] = useState("");
  const [list, setlist] = useState(ProductData);
  const [count, setCount] = useState(Number);

  function handleSearch(e) {
    setFindProduct(e);
    if (e.length > 0) {
      var nameArr = ProductData.filter((item) =>
        new RegExp(e.toUpperCase()).test(item.name)
      );

      let brandArr = ProductData.filter((item) =>
        new RegExp(e.toUpperCase()).test(item.brand)
      );
      let arr = new Set(nameArr.concat(brandArr));
      console.log();
      setlist(...arr);
    } else {
      setlist(ProductData);
    }
  }
  const click = () => {
    console.log(findProduct);
  };
  const addProduct = () => {
    setCount(count + 1);
    console.log(count);
  };
  let listItem = list.map((item) => (
    <li className="product--li-item" key={item.id}>
      <ItemProduct
        src={item.img}
        name={item.name}
        price={item.price}
        brand={item.brand}
        onClick={addProduct}
      />
    </li>
  ));

  return (
    <>
      <div className="product">
        <SeachInput
          value={findProduct}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder={"Nhập nội dung tìm kiếm"}
          onClick={click}
        />
        <div className="product--item-box">
          <ul className="product--ul-item">{listItem}</ul>
        </div>
      </div>
      <BottomNav value={"product"} />
    </>
  );
}

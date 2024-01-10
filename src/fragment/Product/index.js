import React, { useState } from "react";
import "./index.css";
import { SeachInput, BottomNav, CardProduct } from "../../component";
import { ProductData } from "../../data/ProductData";
import {changeVND} from '../../core/cores';

export default function Product() {
  const [findProduct, setFindProduct] = useState("");
  const [list, setlist] = useState(ProductData);
  const [count, setCount] = useState(Number);

  function handleSearch(e) {
    setFindProduct(e);
    // if (e.length > 0) {
    //   var nameArr = ProductData.filter((item) =>
    //     new RegExp(e.toUpperCase()).test(item.name)
    //   );

    //   var brandArr = ProductData.filter((item) =>
    //     new RegExp(e.toUpperCase()).test(item.brand)
    //   );
    //   let arr = new Set(nameArr.concat(brandArr));
    //   console.log();
    //   setlist(...arr);
    // } else {
    //   setlist(ProductData);
    // }
    if (e.length > 0){
      console.log(list);
    } else{
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
          <ul className="product--ul-item">
            {list.map((item) => (
              <li className="product--li-item" key={item.id}>
                <CardProduct
                  src={item.img}
                  name={item.name}
                  price={changeVND.format(item.price)}
                  brand={item.brand}
                  onClick={addProduct}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <BottomNav value={"product"} />
    </>
  );
}

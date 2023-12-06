import React from "react";
import { BottomNav, ItemProduct } from "../../component";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import "./index.css";
import { ProductData } from "../../data/ProductData";
import { NewsData } from "../../data/NewsData";
import { changeVND, cutText } from "../../core/cores";

export default function Main() {
  const totalW = 202020585;
  const totalM = 2000000000;
  const color = "#0573ff";

  const data = [
    {
      label: "Doanh thu",
      data: [900, 500, 1001, 805, 911, 1213, 1489],
    },
  ];
  const list = data.map((d) => {
    return { label: d.label, backgroundColor: color, data: d.data };
  });
  return (
    <>
      <div className="main--container">
        <div className="statistic m-lr">
          <div className="statistic--container">
            <h2 className="margin-start-end fs2">Thống kê</h2>
            <div className="statistic--box">
              <div className="statistic--total">
                <p className="margin-start-end">Doanh thu tuần </p>
                <p className="margin-start-end green">
                  {changeVND.format(totalW)}
                </p>
              </div>
              <div className="statistic--total fr">
                <p className="margin-start-end">Doanh thu tháng </p>
                <p className="margin-start-end red">
                  {changeVND.format(totalM)}
                </p>
              </div>
            </div>
            <Bar
              className="bar"
              data={{
                labels: [
                  "thứ 2",
                  "thứ 3",
                  "thứ 4",
                  "thứ 5",
                  "thứ 6",
                  "thứ 7",
                  "chủ nhật",
                ],
                datasets: list,
              }}
              options={{
                legend: { display: false },
                title: { display: true, text: "Đơn vị" },
              }}
            />
          </div>
          <div className="news">
            <h2 className="margin-start-end">Tin tức cập nhật</h2>
            <ul>
              {NewsData.map((item) => (
                <li key={item.title}>{cutText(item.title, 30)}</li>
              ))}
            </ul>
          </div>
          <div className="best-sales">
            <h2 className="margin-start-end fs2">Sản phẩm bán chạy</h2>
            <ul className="best-sales--ul">
              {ProductData.map((item) => (
                <li className="best-sales--li" key={item.id}>
                  <ItemProduct
                    href={`/home/sales/${item.id}`}
                    src={item.img}
                    brand={item.brand}
                    name={item.name}
                    price={item.price}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <BottomNav value={"main"} />
    </>
  );
}

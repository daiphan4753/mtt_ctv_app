import React from "react";
import { BottomNav, HeaderCustom, ItemNotifi } from "../../component";
import { NotiData } from "../../data/NotiData";
import "./index.css";

export default function Notification() {
  return (
    <>
      <HeaderCustom title={"Thông báo"} />
      <div className="notification">
        <ul className="notification--ul">
          {NotiData.map((item) => (
            <li key={item.id}>
            {console.log(item.id)}
              <ItemNotifi
                src={item.src}
                status={item.noti}
                describe={item.message}
                date={item.id}
              />
            </li>
          ))}
        </ul>
      </div>
      <BottomNav value={"notification"} />
    </>
  );
}

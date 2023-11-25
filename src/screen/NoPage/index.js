import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import { HeaderCustom } from "../../component";
import {IMG404} from '../../assets';

export default function NoPage() {
  const nav = useNavigate();
  return (
    <div className="no-page">
      <HeaderCustom onBack onClick={() =>nav('/')}/>
      <div className="np--img-box">
      <img src={IMG404} alt="img404"/>
      </div>
    </div>
  );
}

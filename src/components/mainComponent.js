import React from "react";
import "../styles/main.css";
export default function Main() {
  return (
    <div className="guideBox">
      <a href="/slide1">
        <div className="header">
          <div className="subHeadLine">A demo on </div>
          <div className="mainHeadLine">REACT-REDUX</div>
          <img src="/logo512.png" height="200px" width="200px" alt=" " />
          <div className="myName">Siddhesh Sathe</div>
        </div>
      </a>
    </div>
  );
}

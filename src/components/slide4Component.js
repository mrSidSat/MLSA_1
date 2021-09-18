import React from "react";
import "../styles/main.css";
export default function Slide4() {
  return (
    <div className="guideBox">
      <a href="/">
        <div className="header">
          <div className="mainHeadLine">Thank You...</div>
          <div className="subHeadLine">
            Thats it for redux for now...Keep Exploring...
          </div>

          <img
            src="/mlsa_logo.png"
            height="200px"
            width="200px"
            style={{ borderRadius: "50%" }}
            alt=" "
          />
          <div className="myName">Siddhesh Sathe</div>
        </div>
      </a>
    </div>
  );
}

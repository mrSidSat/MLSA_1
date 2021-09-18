import React from "react";
import "../styles/slide1.css";
export default function TopBar(props) {
  return (
    <div className="topBar">
      <div>MLSA</div>
      <div>React-Redux</div>
      <div>
        <a href={props.next} style={{ color: "white", cursor: "pointer" }}>
          Next
        </a>
      </div>
    </div>
  );
}

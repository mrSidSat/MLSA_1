import React from "react";
import "../styles/slide1.css";
import SlideShow from "./slideShowComponent";
import TopBar from "./topBarComponent";
import { useState } from "react";
import { withRouter, useHistory } from "react-router";
export default withRouter(function Slide1Component() {
  const [slideNo, setslideNo] = useState(1);
  const history = useHistory();
  function handelClick(num) {
    if (num == 0 && slideNo != 1) setslideNo(slideNo - 1);

    if (num == 1 && slideNo != 3) setslideNo(slideNo + 1);
    if (num == 1 && slideNo == 3) history.push("/slide2");
  }
  return (
    <>
      <TopBar next="/slide2" />
      <div className="slide">
        <div className="slideOperator" onClick={() => handelClick(0)}>
          {`< `}
        </div>
        <div className="slideBody">
          <SlideShow number={slideNo} />
        </div>
        <div className="slideOperator" onClick={() => handelClick(1)}>
          {`> `}
        </div>
      </div>
    </>
  );
});

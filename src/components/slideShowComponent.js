import React from "react";
import "../styles/slideShow.css";
export default function SlideShow(props) {
  const slideData = {
    1: {
      left: "what is redux?",
      right:
        "Redux is an open-source JavaScript library for managing and  centralizing application state.",
    },
    2: {
      left: "what is state?",
      right:
        "A state is an inbuilt object, means it is a reserved key in the 	React JS The state holds the property value with the keys that belong to the 	components",
    },
    3: {
      left: "What is react-redux?",
      right: "It is the version of redux build in accordance with react.",
    },
  };
  var currSlideData = slideData[props.number];
  return (
    <div className="slideMain">
      <div className="leftSide">
        <br></br>
        <div className="leftSide__question">{currSlideData.left}</div>
      </div>
      <div className="rightSide">
        <br></br>
        <div className="leftSide__question">{currSlideData.right}</div>
      </div>
    </div>
  );
}

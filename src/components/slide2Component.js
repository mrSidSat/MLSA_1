import React, { useEffect } from "react";
import TopBar from "./topBarComponent";
import "../styles/slide2.css";
import { useState } from "react";
const modalData = {
  0: {
    heading: "",
    body: "",
  },
  1: {
    heading: "View",
    body: "This contains the components and viewport / DOM Tree ",
  },
  2: {
    heading: "Actions",
    body: "It is a function which returns an object.The object consists of a property named as type(compulsory) ,which is used by reducer to figure out how the state needs to be changed",
  },
  3: {
    heading: "Dispatcher",
    body: "It is a function which provides a object(known as action) as a argument to the store .Store can be made up of one or many reducers.",
  },
  4: {
    heading: "Reducer",
    body: "1)it is a function which returns new state depending on the changes caused by the action that was passed to store by dispatch. basically this is the function that changes the state.and returns the previous or the unchanged state if the action is invalid.one or more reducers together make a store.",
  },
  5: {
    heading: "State",
    body: "This is the current global state of the whole application",
  },
  6: {
    heading: "Store",
    body: "A store is object which holds the whole state tree of your application. The only way to change the state inside it is to dispatch an action on it.",
  },
};
export default function Slide2() {
  const [clickbox, setclickbox] = useState(0);
  const [firstTime, setfirstTime] = useState(false);
  document.addEventListener(
    "click",
    function (event) {
      console.dir(event.target);
      switch (event.target.classList[0]) {
        case "slide2_view": {
          setclickbox(1);
          openModal();
          break;
        }
        case "slide2_actions": {
          setclickbox(2);
          openModal();
          break;
        }
        case "slide2_dispatcher": {
          setclickbox(3);
          openModal();
          break;
        }
        case "slide2_reducer": {
          setclickbox(4);
          openModal();
          break;
        }
        case "slide2_state": {
          setclickbox(5);
          openModal();
          break;
        }
        case "slide2_store": {
          setclickbox(6);
          openModal();
          break;
        }
        default:
          setclickbox(0);
      }
      if (
        !event.target.closest(".modal") &&
        !event.target.matches(".slide2_view") &&
        !event.target.matches(".slide2_actions") &&
        !event.target.matches(".slide2_reducer") &&
        !event.target.matches(".slide2_store") &&
        !event.target.matches(".slide2_dispatcher") &&
        !event.target.matches(".slide2_state")
      ) {
        closeModal();
      }
    },
    false
  );

  function closeModal() {
    document.querySelector(".modal").style.display = "none";
  }
  function openModal() {
    document.querySelector(".modal").style.display = "";
  }
  var currModal = modalData[clickbox];

  return (
    <>
      <TopBar next="/practical" />
      <div className="modal" style={{ display: "none" }}>
        <h2>{currModal.heading}</h2>

        <p>{currModal.body}</p>
      </div>
      {/*  */}
      <div className="slide2_view slide2_pointer"></div>
      <div className="slide2_actions slide2_pointer"></div>
      <div className="slide2_reducer slide2_pointer"></div>
      <div className="slide2_store slide2_pointer"></div>
      <div className="slide2_dispatcher slide2_pointer"></div>
      <div className="slide2_state slide2_pointer"></div>
      <div className="slide2__body">
        <img
          className="slide2__image"
          src="/react-redux-image.png"
          alt="asa"
          height="400px"
          width="400px"
        />
      </div>
    </>
  );
}

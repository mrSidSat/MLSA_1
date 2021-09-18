import React, { useEffect, useState } from "react";
import TopBar from "./topBarComponent";
import "../styles/slide3.css";

export default function Slide3Component() {
  useEffect(() => {
    var t = document.getElementsByClassName("pro");
    var p = document.getElementsByClassName("con");
    for (let i = 0; i < t.length; i++) {
      document
        .getElementsByClassName("pro")
        [i].addEventListener("click", (e) => {
          console.dir(e.target);
          if (e.target.nextSibling != null)
            e.target.nextSibling.style.display = "flex";
        });
    }
    for (let i = 0; i < p.length; i++) {
      document
        .getElementsByClassName("con")
        [i].addEventListener("click", (e) => {
          console.dir(e.target);
          if (e.target.nextSibling != null)
            e.target.nextSibling.style.display = "flex";
        });
    }
  });

  return (
    <>
      <TopBar next="/slide4" />
      <div className="backgroundImage">
        <div className="slide3_headers">
          <div className="slide3_header">Pros</div>
          <div className="slide3_header">Cons</div>
        </div>
        <div className="slide3_content">
          <div className="slide3_content_side">
            <div id="firstpro" className="pro">
              There is always one source of truth, the store. Thus, there is no
              confusion about how to sync the current state with actions and
              other parts of the application.
            </div>
            <div className="pro">
              The code is easier to maintain because it has a predictable
              outcome and strict structure.
            </div>
            <div className="pro">
              Redux makes coding more consistent due to more stringent code
              organization procedures
            </div>
            <div className="pro">
              It’s very useful, especially during the initial render, making for
              better user experience and search engine optimization.
            </div>
            <div className="pro">
              Developers can track everything going on in the app in
              real-time—from actions to state changes
            </div>
          </div>
          <div className="slide3_content_side">
            <div id="firstcon" className="con">
              Since it has no encapsulation, any component can access data,
              which may potentially cause security issues
            </div>
            <div className="con">
              Some parts of the code are just boilerplate. However, these parts
              have to be incorporated with no alteration, and this restricts the
              design
            </div>
            <div className="con">
              As the state is immutable in Redux, the reducer updates the state
              by returning a new state every time which can cause excessive use
              of memory
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

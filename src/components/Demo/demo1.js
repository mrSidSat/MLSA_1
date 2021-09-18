import React from "react";
import actionCreators from "./actions/actionCreators";
import TopBar from "../topBarComponent";
import { useSelector, useDispatch } from "react-redux";
import "../../styles/demo1.css";
export default function Demo1() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  function handleInrc() {
    dispatch(actionCreators.Increment());
  }
  function handleDerc() {
    dispatch(actionCreators.Decrement());
  }
  function handleLetterInrc() {
    dispatch(actionCreators.LetterIncrement());
  }
  function handleLetterDerc() {
    dispatch(actionCreators.LetterDecrement());
  }
  return (
    <>
      <TopBar next="/slide3" />

      {/* This is count changer */}

      {/* <div className="demo1_message">
        {state.counterMessage} (Store is supplied with a single reducer named
        counterStateChanger)
      </div>
      <div className="counter_row">
        <div>
          <button type="submit" onClick={handleInrc}>
            Increase
          </button>
        </div>
        <div className="demo1_counter">{state.counter}</div>
        <div>
          <button type="submit" onClick={handleDerc}>
            Decrease
          </button>
        </div>
      </div> */}

      {/* This is Alphabet Changer */}

      {/* <div className="demo1_message">
        {state.letterMessage} (Store is supplied with a single reducer named
        letterStateChanger)
      </div>
      <div className="counter_row">
        <div>
          <button type="submit" onClick={handleLetterInrc}>
            Next Alphabet
          </button>
        </div>
        <div className="demo1_counter">
          {state.letter < 65 || state.letter > 90
            ? dispatch(actionCreators.LetterReset())
            : String.fromCharCode(state.letter)}
        </div>
        <div>
          <button type="submit" onClick={handleLetterDerc}>
            Previous Alphabet
          </button>
        </div>
      </div> */}

      {/* Both Reducers are used */}

      <div className="demo1_message">
        {state.counterStateChanger.counterMessage} (Store is supplied with a
        single reducer named counterStateChanger)
      </div>
      <div className="counter_row">
        <div>
          <button type="submit" onClick={handleInrc}>
            Increase
          </button>
        </div>
        <div className="demo1_counter">{state.counterStateChanger.counter}</div>
        <div>
          <button type="submit" onClick={handleDerc}>
            Decrease
          </button>
        </div>
      </div>
      <div className="demo1_message">
        {state.letterStateChanger.letterMessage} (Store is supplied with a
        single reducer named letterStateChanger)
      </div>
      <div className="counter_row">
        <div>
          <button type="submit" onClick={handleLetterInrc}>
            Next Alphabet
          </button>
        </div>
        <div className="demo1_counter">
          {state.letterStateChanger.letter < 65 ||
          state.letterStateChanger.letter > 90
            ? dispatch(actionCreators.LetterReset())
            : String.fromCharCode(state.letterStateChanger.letter)}
        </div>
        <div>
          <button type="submit" onClick={handleLetterDerc}>
            Previous Alphabet
          </button>
        </div>
      </div>
    </>
  );
}

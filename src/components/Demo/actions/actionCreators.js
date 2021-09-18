import * as actions from "./actionConstants";
const actionCreators = {
  Increment: () => {
    return {
      type: actions.INCREMENT,
      payload: "THIS IS INCREMENT",
    };
  },

  Decrement: () => {
    return {
      type: actions.DECREMENT,
      payload: "THIS IS DECREMENT",
    };
  },
  LetterIncrement: () => {
    return {
      type: actions.LETTERINCREMENT,
      payload: "THIS IS NEXT ALPHABET",
    };
  },

  LetterDecrement: () => {
    return {
      type: actions.LETTERDECREMENT,
      payload: "THIS IS PREVIOUS ALPHABET",
    };
  },
  LetterReset: () => {
    return {
      type: actions.LETTERRESET,
      payload: "ALPHABET IS RESET TO A",
    };
  },
};
export default actionCreators;

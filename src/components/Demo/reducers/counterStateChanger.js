import * as actionConstants from "../actions/actionConstants";
export function counterStateChanger(
  state = { counter: 0, counterMessage: "" },
  action
) {
  switch (action.type) {
    case actionConstants.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
        counterMessage: action.payload,
      };
    case actionConstants.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
        counterMessage: action.payload,
      };
    default:
      return state;
  }
}

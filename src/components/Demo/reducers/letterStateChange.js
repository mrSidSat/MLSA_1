import * as actionConstants from "../actions/actionConstants";
export function letterStateChanger(
  state = { letter: 65, letterMessage: "" },
  action
) {
  switch (action.type) {
    case actionConstants.LETTERINCREMENT:
      return {
        ...state,
        letter: state.letter + 1,
        letterMessage: action.payload,
      };
    case actionConstants.LETTERDECREMENT:
      return {
        ...state,
        letter: state.letter - 1,
        letterMessage: action.payload,
      };
    case actionConstants.LETTERRESET:
      return {
        ...state,
        letter: 65,
        letterMessage: action.payload,
      };
    default:
      return state;
  }
}

import constants from "../Constants/counterConstants";

const initialState = { counter: 0 };
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.ADD:
      return { counter: state.counter + 1 };
    case constants.MINUS:
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};

export default counterReducer;

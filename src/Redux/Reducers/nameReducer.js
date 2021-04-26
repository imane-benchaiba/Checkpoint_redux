import constants from "../Constants/nameConstants";

const initialState = { name: "" };

const nameReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.CHANGE:
      return { name: action.payload };
    case constants.RESET:
      return { name: "" };
    default:
      return state;
  }
};

export default nameReducer;

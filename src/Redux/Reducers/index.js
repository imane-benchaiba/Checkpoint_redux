import counterReducer from "./counterReducer";
import nameReducer from "./nameReducer";
import postReducer from "./postReducer";
import { combineReducers } from "redux";

const reducer = combineReducers({
  state1: nameReducer,
  state2: counterReducer,
  state3: postReducer,
});

export default reducer;

import "./App.css";
import { useReducer, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import counterActions from "./Redux/Actions/counterActions";
import nameActions from "./Redux/Actions/nameActions";
import postActions from "./Redux/Actions/postActions";
import axios from "axios";
// const ADD = "add";
// const MINUS = "minus";
// const CHANGE = "changeName";
// const RESET = "resetName";

// const initialState = { counter: 0, name: "" };
// const reducer = (state, action) => {
//   switch (action.type) {
//     case ADD:
//       return { counter: state.counter + 1, name: state.name };
//     case MINUS:
//       return { counter: state.counter - 1, name: state.name };
//     case CHANGE:
//       return { counter: state.counter, name: action.payload };
//     case RESET:
//       return { counter: state.counter, name: "" };
//     default:
//       return state;
//   }
// };

// const addToCounter = () => {
//   return {
//     type: ADD,
//   };
// };

// const removeFromCounter = () => {
//   return {
//     type: MINUS,
//   };
// };

// const changeName = (name) => {
//   return {
//     type: CHANGE,
//     payload: name,
//   };
// };

// const resetName = () => {
//   return {
//     type: RESET,
//   };
// };

function App() {
  //const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    dispatch(postActions.initiatePosts());
  }, [])
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const counter = useSelector((state) => state.state1.counter);
  const name = useSelector((state) => state.state2.name);
  const posts = useSelector((state) => state.state3.posts);
  return (
    <div className="App">
      <p> Counter : {counter}</p>
      <button onClick={() => dispatch(counterActions.addToCounter())}>+</button>
      <button onClick={() => dispatch(counterActions.removeFromCounter())}>
        -
      </button>
      <p> Name : {name}</p>
      <input onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => dispatch(nameActions.changeName(input))}>
        Change
      </button>
      <button onClick={() => dispatch(nameActions.resetName())}>Reset</button>
      <p> Posts : {posts} </p>
    </div>
  );
}

export default App;

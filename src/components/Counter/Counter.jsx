import React from "react";
import "./Counter.css";
import { useSelector, useDispatch } from "react-redux";

//Action
const increment = () => {
  return {
    type: "INCREMENT",
  };
};

const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

const Counter = () => {
  const counter = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div className="counter">
      <p>The count is</p>
      <div className="count"> {counter} </div>

      <div className="wrap">
        <button className="btn" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button className="btn" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;

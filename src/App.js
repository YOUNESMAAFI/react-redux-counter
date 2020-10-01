import React from "react";
import "./App.css";
import { createStore } from "redux";
import { Provider } from "react-redux";

//components
import Counter from "./components/Counter/Counter";

//Reducer
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;

    default:
      return state;
  }
};

//Store
let store = createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => console.log(store.getState()));

//Dispatch

function App() {
  return (
    <div className="App">
      <h1>Simple React/Redux</h1>
      <Provider store={store}>
        <Counter></Counter>
      </Provider>
    </div>
  );
}

export default App;

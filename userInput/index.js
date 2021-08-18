import React, { useState } from "react";
import ReactDOM from "react-dom";
import { userInput } from "./userInput";

import "./styles.css";

const App = () => {
  const maxlen = (value) => !value.includes("@"); //value.length <= 10;
  const name = userInput("Mr. ", maxlen);
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
    </div> //<!-- value={name.value} onChange={name.onChange}-->
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

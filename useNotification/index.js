import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import { useNotification } from "./useNotification";

const App = () => {
  const triggerNotif = useNotification(
    "Notification: You clicked the button.",
    { body: "Notification from Hooks example" }
  );
  return (
    <div className="App">
      <button onClick={triggerNotif}>Hello</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

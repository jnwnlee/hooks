import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import { useFullscreen } from "./useFullscreen";

const App = () => {
  const onFullS = (isFull) => {
    console.log(isFull ? "Full-screen" : "Small-screen");
  };
  const { element, triggerFull, exitFull } = useFullscreen(onFullS);
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <div ref={element}>
        <img
          width="20%"
          src="https://images.aint-bad.com/wp-content/uploads/2018/02/23113739/li_hui_1.jpg"
        />
        <button onClick={triggerFull}>Make fullscreen</button>
        <button onClick={exitFull}>Exit fullscreen</button>
      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

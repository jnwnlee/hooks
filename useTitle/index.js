import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useTitle } from "./useTitle";

import "./styles.css";

const App = () => {
    const titleUpdater = useTitle("Loading...");
    setTimeout(() => titleUpdater("Home"), 2000);
    return (
      <div className="App">
        <div>Hi</div>
      </div>
    );
  };
  
  const rootElement = document.getElementById("root");
  ReactDOM.render(<App />, rootElement);
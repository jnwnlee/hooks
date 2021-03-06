import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import { useConfirm } from "./useConfirm";

const App = () => {
    const deleteworld = () => console.log("Deleting the world");
    const abort = () => console.log("Aborted");
    const confirmDelete = useConfirm("Are you sure", deleteworld, abort);
    return (
        <div className="App">
            <button onClick={confirmDelete}>Delete the world</button>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
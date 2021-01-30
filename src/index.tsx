import React from "react";
import ReactDOM from "react-dom";
import App from './App';

console.log("JiraTemplates has started successfully!");

const body = document.querySelector("body");
const container = document.createElement("div");
body?.appendChild(container);
ReactDOM.render(<App />, container);

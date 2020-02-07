import React from "react";
import ReactDOM from "react-dom";
import Form from "./components/form.js";

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Form />, wrapper) : false;

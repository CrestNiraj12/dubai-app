import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./Main";

if (document.getElementById("content")) {
    ReactDOM.render(
        <Router>
            <App />
        </Router>,
        document.getElementById("content")
    );
}

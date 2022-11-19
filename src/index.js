import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./store (context)/AuthContext";

ReactDOM.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>,
  document.getElementById("root")
);

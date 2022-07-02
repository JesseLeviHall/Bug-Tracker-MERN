import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./Controllers/Reducers/authSlice.js";
import bugReducer from "./Controllers/Reducers/bugSlice.js";
import { registerLicense } from "@syncfusion/ej2-base";

registerLicense(
  "ORg4AjUWIQA/Gnt2VVhiQlFadVlJWnxKf0x0RWFbb1h6cFVMYlRBJAtUQF1hS35UdkdiWn9ccnJRRWZf"
);

const reducer = combineReducers({
  auth: authReducer,
  bugs: bugReducer,
});

const store = configureStore({
  reducer,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

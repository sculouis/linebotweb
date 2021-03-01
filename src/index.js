import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import productRed from "./reducers";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

import App from "./App";
const rootElement = document.getElementById("root");
const store = createStore(productRed, composeWithDevTools());
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);

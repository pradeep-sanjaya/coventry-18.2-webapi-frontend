import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./store/reducers";

const store = createStore(
  rootReducer,
  {
    products: [
      {
        name: "Zayden XL",
        price: 3000,
        in_stock: true
      },
      {
        name: "iNippa DC",
        price: 5000,
        in_stock: true
      },
      {
        name: "Corona Pakaya",
        price: 1400,
        in_stock: false
      }
    ],
    user: "heshan",
    cart: []
  },
  window.devToolsExtension && window.devToolsExtension()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();

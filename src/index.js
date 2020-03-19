import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./store/reducers";
import reduxthunk from "redux-thunk";
import getProducts from "./services/product";

const store = createStore(
    rootReducer,
    {
        products: [],
        user: JSON.parse(localStorage.getItem('user')),
        cart: []
    },
    compose(
        applyMiddleware(reduxthunk),
        window["__REDUX_DEVTOOLS_EXTENSION__"]
            ? window["__REDUX_DEVTOOLS_EXTENSION__"]()
            : (f) => f
    )
);

store.dispatch(getProducts());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);

serviceWorker.unregister();

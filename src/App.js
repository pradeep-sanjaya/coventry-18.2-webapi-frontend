import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";

import Home from "./components/home/Home";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import Products from "./components/Products";
import Cart from "./components/Cart.jsx";
import ProductDetails from "./components/ProductDetails";
import NewArrivals from "./components/NewArrivals";
import Contact from "./components/Contact";
import History from './history.js';


class App extends Component {
    render() {
        return (
            <div className="site-wrap">
                <BrowserRouter>
                    <React.Fragment>
                        <Navigation />
                        <Route exact path="/" component={Home}></Route>
                        <Route exact path="/products" component={Products}></Route>
                        <Route exact path="/cart" component={Cart}></Route>
                        <Route exact path="/product/:id" component={ProductDetails}></Route>
                        <Route exact path="/new-arrivals" component={NewArrivals}></Route>
                        <Route exact path="/contact" component={Contact}></Route>
                        <Footer />
                    </React.Fragment>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;

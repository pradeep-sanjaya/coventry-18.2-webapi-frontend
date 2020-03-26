import React, { Component } from "react";
import { Route, Router, Link } from "react-router-dom";

/* helpers */
import AuthenticatedRoute from '../src/components/router/AuthenticatedRoute'
import PreAuthenticatedRoute from '../src/components/router/PreAuthenticatedRoute'
import history from './helpers/route-history'

/* css */
import "./App.css";

/* pages */
import Home from "./components/home/Home";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Products from "./components/products/Products";
import Cart from "./components/Cart.jsx";
import ProductDetails from "./components/ProductDetails";
import Contact from "./components/Contact";
import Login from './components/auth/Login'
import Register from "./components/auth/Register";

class App extends Component {

    render() {
        return (
            <div className="site-wrap">
                <Router history={history}>
                    <React.Fragment>
                        <Navigation />
                        <Route exact path="/" component={Home}></Route>
                        <Route path="/products" component={Products} />
                        <Route exact path="/cart" component={Cart}></Route>
                        <Route path="/product/:id" component={ProductDetails} />
                        <Route exact path="/contact" component={Contact}></Route>
                        <PreAuthenticatedRoute path="/login" component={Login} />
                        <PreAuthenticatedRoute path="/register" component={Register} />
                        <Footer />
                    </React.Fragment>
                </Router>
            </div>
        );
    }
}

export default App;

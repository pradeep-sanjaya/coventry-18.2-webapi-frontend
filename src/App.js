import React, { Component } from "react";
import "./App.css";
import {BrowserRouter, Route, Router} from "react-router-dom";
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import Home from "./components/home/Home";
import Cart from "./components/Cart.jsx";
import ProductDetails from "./components/ProductDetails";
import NewArrivals from "./components/NewArrivals";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Login from './components/auth/Login'
import Register from "./components/auth/Register";
import AuthenticatedRoute from '../src/components/router/AuthenticatedRoute'
import PreAuthenticatedRoute from '../src/components/router/PreAuthenticatedRoute'
import history from './helpers/route-history'
import swal from 'sweetalert';


class App extends Component {
    render() {
        return (
            <div className="site-wrap">
                <Router history={history}>
                    <React.Fragment>
                        <Navigation />
                        <Route exact path="/" component={Home}></Route>
                        <AuthenticatedRoute  path="/products" component={Products}/>
                        <Route exact path="/cart" component={Cart}></Route>
                        <Route exact path="/product/:id" component={ProductDetails}></Route>
                        <Route exact path="/new-arrivals" component={NewArrivals}></Route>
                        <Route exact path="/contact" component={Contact}></Route>
                        <PreAuthenticatedRoute  path="/login" component={Login}/>
                        <PreAuthenticatedRoute  path="/register" component={Register}/>
                        <Footer />
                    </React.Fragment>
                </Router>
            </div>
        );
    }
}

export default App;

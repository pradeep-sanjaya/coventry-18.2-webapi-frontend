import React, { Component } from "react";
import "./App.css";
import { Route , Router, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import Home from "./components/home/Home";
import Cart from "./components/Cart";
import ProductDetails from "./components/ProductDetails";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Login from './components/auth/Login'
import Register from "./components/auth/Register";
import AuthenticatedRoute from '../src/components/router/AuthenticatedRoute'
import PreAuthenticatedRoute from '../src/components/router/PreAuthenticatedRoute'
import history from './helpers/route-history'
import {connect} from "react-redux";


class App extends Component {
    render() {
        return (
            <div className="site-wrap">
                <Router history={history}>
                    <React.Fragment>
                        <Navigation />
                        <Route exact path="/" component={Home}></Route>
                        <AuthenticatedRoute  path="/products" component={Products}/>
                        <AuthenticatedRoute exact path="/cart" component={Cart}/>
                        <AuthenticatedRoute exact path="/product/:id" component={ProductDetails}/>
                        <PreAuthenticatedRoute  path="/login" component={Login}/>
                        <PreAuthenticatedRoute  path="/register" component={Register}/>
                        <AuthenticatedRoute  path="/profile" component={Products}/>
                        <Route exact path="/contact" component={Contact}></Route>
                        <Footer />
                    </React.Fragment>
                </Router>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    loading:state.loading,
    error:state.error
});
export default connect(mapStateToProps)(App);

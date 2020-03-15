import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navigation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="site-navbar bg-white py-2">

                <div className="search-wrap">
                    <div className="container">
                        <a href="#" className="search-close js-search-close"><span className="icon-close2"></span></a>
                        <form action="#" method="post">
                            <input type="text" className="form-control" placeholder="Search keyword and hit enter..."></input>
                        </form>
                    </div>
                </div>

                <div className="container">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="logo">
                            <div className="site-logo">
                                <Link to="/" className="js-logo-clone">Clothing Store</Link>
                            </div>
                        </div>
                        <div className="main-nav d-none d-lg-block">
                            <nav className="site-navigation text-right text-md-center" role="navigation">
                                <ul className="site-menu js-clone-nav d-none d-lg-block">
                                    <li className="active">
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/products">Catalogue</Link>
                                    </li>
                                    <li>
                                        <Link to="/new-arrivals">New Arrivals</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact">Contact</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="icons">
                            <a href="#" className="icons-btn d-inline-block js-search-open"><span className="icon-search"></span></a>

                            <Link to="/cart" className="icons-btn d-inline-block bag">
                                <span className="icon-shopping-bag"></span>
                                <span className="number">2</span>
                            </Link>

                            <a href="#" className="site-menu-toggle js-menu-toggle ml-3 d-inline-block d-lg-none"><span className="icon-menu"></span></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navigation;
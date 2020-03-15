import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <footer className="site-footer custom-border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 ml-auto mb-5 mb-lg-0">
                            <div className="row">
                                <div className="col-md-12">
                                    <h3 className="footer-heading mb-4">Quick Links</h3>
                                </div>
                                <div className="col-md-6 col-lg-6">
                                    <ul className="list-unstyled">
                                        <li><a href="#">Shipping & Returns</a></li>
                                        <li><a href="#">Provacy Policy</a></li>
                                        <li><a href="#">Terms & Conditions</a></li>
                                    </ul>
                                </div>
                                <div className="col-md-6 col-lg-6">
                                    <ul className="list-unstyled">
                                        <li><a href="#">About Us</a></li>
                                        <li><Link to="/contact">Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3">
                            <div className="block-5 mb-5">
                                <h3 className="footer-heading mb-4">Contact Info</h3>
                                <ul className="list-unstyled">
                                    <li className="address">No: 120/5, <br />Wijerama (Vidya) Mawatha, <br />Colombo 07<br />
                                        Sri Lanka</li>
                                    <li className="phone"><a href="tel://23923929210">+94 112 732 1000</a></li>
                                    <li className="email">programes@nibm.lk</li>
                                </ul>
                            </div>

                            <div className="block-7">

                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
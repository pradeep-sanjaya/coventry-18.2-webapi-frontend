import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Collections extends Component {
    render() {
        return (
            <div className="site-section">
                <div className="container">
                    <div className="title-section mb-5">
                        <h2 className="text-uppercase"><span className="d-block">Discover</span> The Collections</h2>
                    </div>
                    <div className="row align-items-stretch">
                        <div className="col-lg-8">
                            <div className="product-item sm-height full-height bg-gray">
                                <Link to={`/category/1`} className="product-category">Women</Link>
                                <img src="images/model_4.png" alt="" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="product-item sm-height bg-gray mb-4">
                                <Link to={`/category/2`} className="product-category">Men</Link>
                                <img src="images/model_5.png" alt="" className="img-fluid" />
                            </div>

                            <div className="product-item sm-height bg-gray">
                                <Link to={`/category/3`} className="product-category">Accessories</Link>
                                <img src="images/model_6.png" alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Collections;
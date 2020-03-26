import React, { Component } from 'react';
import { Link } from "react-router-dom";

class PopularProducts extends Component {

    render() {
        return (
            <div className="site-section">
                <div className="container">
                    <div className="row">
                        <div className="title-section mb-5 col-12">
                            <h2 className="text-uppercase">Popular Products</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 item-entry mb-4">
                            <Link to={`/product/1`} className="product-item md-height bg-gray d-block">
                                <img src="images/prod_1.jpg" alt="" className="img-fluid" />
                            </Link>
                            <h2 className="item-title">
                                <Link to={`/product/1`}>LONG SLEEVE SHIRT WITH EMBShop Now</Link>
                            </h2>
                            <strong className="item-price">LKR 3,390.00</strong>
                        </div>
                        <div className="col-lg-4 col-md-6 item-entry mb-4">
                            <Link to={`/product/2`} className="product-item md-height bg-gray d-block">
                                <img src="images/prod_2.jpg" alt="" className="img-fluid" />
                            </Link>
                            <h2 className="item-title"><Link to={`/product/2`}>BEAT THE HEAT PANT</Link></h2>
                            <strong className="item-price">LKR 3,450.00</strong>
                        </div>

                        <div className="col-lg-4 col-md-6 item-entry mb-4">
                            <Link to={`/product/3`} className="product-item md-height bg-gray d-block">
                                <img src="images/prod_3.jpg" alt="" className="img-fluid" />
                            </Link>
                            <h2 className="item-title"><Link to={`/product/3`}>BUCKLE DETAILED LINEN PANT</Link></h2>
                            <strong className="item-price">LKR 3,490.00</strong>
                        </div>
                        <div className="col-lg-4 col-md-6 item-entry mb-4">
                            <Link to={`/product/4`} className="product-item md-height bg-gray d-block">
                                <img src="images/prod_4.jpg" alt="" className="img-fluid" />
                            </Link>
                            <h2 className="item-title"><Link to={`/product/4`}>VNECK SHIFT LINEN DRESS</Link></h2>
                            <strong className="item-price">LKR 3,675.00</strong>
                        </div>

                        <div className="col-lg-4 col-md-6 item-entry mb-4">
                            <Link to={`/product/5`} className="product-item md-height bg-gray d-block">
                                <img src="images/prod_5.jpg" alt="" className="img-fluid" />
                            </Link>
                            <h2 className="item-title"><Link to={`/product/5`}>RIB TUBE TOP</Link></h2>
                            <strong className="item-price">LKR 2,075.00</strong>
                        </div>
                        <div className="col-lg-4 col-md-6 item-entry mb-4">
                            <Link to={`/product/6`} className="product-item md-height bg-gray d-block">
                                <img src="images/prod_6.jpg" alt="" className="img-fluid" />
                            </Link>
                            <h2 className="item-title"><Link to={`/product/6`}>IN HER POWER</Link></h2>
                            <strong className="item-price">LKR 3,350.00</strong>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default PopularProducts;
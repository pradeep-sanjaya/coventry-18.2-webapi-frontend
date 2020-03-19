import React, { Component } from 'react';

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
                                <a href="!#" className="product-category">Women <span>25 items</span></a>
                                <img src="images/model_4.png" alt="" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="product-item sm-height bg-gray mb-4">
                                <a href="!#" className="product-category">Men <span>25 items</span></a>
                                <img src="images/model_5.png" alt="" className="img-fluid" />
                            </div>

                            <div className="product-item sm-height bg-gray">
                                <a href="!#" className="product-category">Shoes <span>25 items</span></a>
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
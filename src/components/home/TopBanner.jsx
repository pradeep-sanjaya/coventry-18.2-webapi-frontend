import React, { Component } from "react"
import { Link } from "react-router-dom";

class TopBanner extends Component {

    render() {
        const productId = '5e7cdc94b6bb2f007656f8c8';

        return (
            <div className="site-blocks-cover" data-aos="fade">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 ml-auto order-md-2 align-self-start">
                            <div className="site-block-cover-content">
                                <h2 className="sub-title">#New Summer Collection 2019</h2>
                                <h1>Arrivals Sales</h1>
                                <p>
                                    <Link to={`/product/${productId}`} className="btn btn-black rounded-0">Shop Now</Link>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 order-1 align-self-end">
                            <img src={`images/model_3.png`} alt="" className="img-fluid"></img>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default TopBanner;
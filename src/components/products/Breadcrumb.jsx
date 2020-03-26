import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Breadcrumb extends Component {
    render() {
        return (
            <div className="custom-border-bottom py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-0"><Link to="/">Home</Link> <span className="mx-2 mb-0">/</span> <strong className="text-black">Shop</strong></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Breadcrumb;
import React, { Component } from "react";
import { connect } from "react-redux";
import Product from "../Product";
import { productService } from "../../services";

class Products extends Component {

    constructor(props) {
        super(props);
        this.getProducts = this.getProducts.bind(this);
    }

    componentWillMount() {
        console.log("hi")
        //this.props.fetchProducts()
    }

    componentDidMount() {
        this.props.fetchProducts()
    }

    getProducts() {

    }

    render() {
        return (
            <div>
                <div className="site-blocks-cover inner-page" data-aos="fade">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 ml-auto order-md-2 align-self-start">
                                <div className="site-block-cover-content">
                                    <h2 className="sub-title">#New Summer Collection 2019</h2>
                                    <h1>Arrivals Sales</h1>
                                    <p><a href="#" className="btn btn-black rounded-0">Shop Now</a></p>
                                </div>
                            </div>
                            <div className="col-md-6 order-1 align-self-end">
                                <img src="images/model_4.png" alt="Image" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="custom-border-bottom py-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 mb-0"><a href="index.html">Home</a> <span className="mx-2 mb-0">/</span> <strong className="text-black">Shop</strong></div>
                        </div>
                    </div>
                </div>

                <div style={{ display: "flex" }}>
                    {this.props.products.map((product, key) => {
                        return (
                            <div key={key}>
                                <Product product={product} />;
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    products: state.products
});

const mapDispacthToProps = {
    fetchProducts: productService.getAll
};

export default connect(mapStateToProps, mapDispacthToProps)(Products);

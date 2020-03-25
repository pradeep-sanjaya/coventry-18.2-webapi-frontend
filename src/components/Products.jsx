import React, { Component } from "react";
import { connect } from "react-redux";
import Product from "./Product";
import { productService } from "../services";

class Products extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Products</h1>
                <div style={{ display: "flex" }}>
                    {this.props.products.map((product, key) => {
                        return (
                            <div key={key}>
                                <Product product={product}/>;
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    products: state.products,
    cart : state.cart
});

const mapDispacthToProps = {
};

export default connect(mapStateToProps, mapDispacthToProps)(Products);

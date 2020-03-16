import React, { Component } from "react";
import { connect } from "react-redux";
import Product from "./Product";
class Products extends Component {

    render() {
        return (
            <div>
                <h1>Products</h1>
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

export default connect(mapStateToProps)(Products);

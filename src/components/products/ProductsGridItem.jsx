import React, { Component } from 'react';
import { connect } from "react-redux";
import { addToCart } from "../../store/actions/cart.action";

class ProductsGridItem extends Component {

    constructor(props) {
        super(props);
        this.onAddToCart = this.onAddToCart.bind(this);
    }

    onAddToCart() {
        this.props.onAddToCart(this.props.product);
    }

    render() {
        return (
            <div className="col-lg-6 col-md-6 item-entry mb-4">
                <a href="#" className="product-item md-height bg-gray d-block">
                    <img src={this.props.product.imageUrl} alt="Image" className="img-fluid" />
                </a>
                {this.props.product.isAvailable ?
                    (<a href="!#" className="badge badge-primary">In stock</a>)
                    :
                    (<a href="!#" className="badge badge-warning">Out of stock</a>)
                }
                <h2 className="item-title"><a href="#">{this.props.product.name}</a></h2>
                <strong className="item-price">Rs.{this.props.product.price}.00</strong>
                <div className="text-center">
                    <button className="btn btn-primary" onClick={this.onAddToCart}>
                        ADD TO CART
                    </button>
                </div>
            </div >
        );
    }
}

const mapStateToProps = (state) => ({
    products: state.products
});

const mapDispatchToProps = {
    onAddToCart: addToCart
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsGridItem);
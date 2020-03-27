import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { decodeUrl } from "../../helpers/url-parser";
import { productService } from "../../services";

class ProductsGridItem extends Component {

    constructor(props) {
        super(props);
        this.onAddToCart = this.onAddToCart.bind(this);
        this.onUpdateCart = this.onUpdateCart.bind(this);
    }

    onAddToCart() {
        this.props.onAddToCart(this.props.product);
    }

    onUpdateCart() {
        this.props.onUpdateCart(this.props.product, this.props.cart);
    }

    addedToCart() {
        return this.props.cart.filter((item) => {
            return this.props.product._id === item._id
        }).length > 0;
    }

    checkCartIsEmpty() {
        return this.props.cart.length === 0;
    }

    render() {
        return (
            <div className="col-lg-6 col-md-6 item-entry mb-4">
                <Link to={`/product/${this.props.product._id}`} className="product-item md-height bg-gray d-block">
                    <img src={decodeUrl(this.props.product.imageUrl)} alt="Image" className="img-fluid" />
                </Link>
                {this.props.product.isAvailable ?
                    (<a href="!#" className="badge badge-primary">In stock</a>)
                    :
                    (<a href="!#" className="badge badge-warning">Out of stock</a>)
                }
                <h2 className="item-title"><Link to={`/product/${this.props.product._id}`}>{this.props.product.name}</Link></h2>
                <strong className="item-price">LKR {this.props.product.price}.00</strong>
                <div className="text-center">
                    <button className="btn btn-primary" onClick={this.checkCartIsEmpty() ? this.onAddToCart : this.onUpdateCart} disabled={this.addedToCart()}>
                        {
                            this.addedToCart() ? ' ADDED TO CART ' : 'ADD TO CART'
                        }
                    </button>
                </div>
            </div >
        );
    }
}

const mapStateToProps = (state) => ({
    products: state.products,
    cart: state.cart
});

const mapDispatchToProps = {
    onAddToCart: productService.addItemToCart,
    onUpdateCart: productService.updateCart
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsGridItem);
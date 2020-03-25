import React, { Component } from "react";
import { connect } from "react-redux";
import {decodeUrl} from "../helpers/url-parser";
import {productService} from "../services";

class Product extends Component {

    constructor(props) {
        super(props);
        this.onAddToCart = this.onAddToCart.bind(this);
        this.onUpdateCart = this.onUpdateCart.bind(this);
    }
    onAddToCart() {
        this.props.onAddToCart(this.props.product);
    }
    onUpdateCart() {
        this.props.onUpdateCart(this.props.product,this.props.cart);
    }
    addedToCart() {
        return this.props.cart.filter((item)=>{
            return this.props.product._id === item._id
        }).length > 0;
    }
    checkCartIsEmpty() {
        return this.props.cart.length === 0;
    }
    render() {
        return (
            <div>
                <div style={{ margin: "20px" }}>
                    <div className="card" style={{ width: "18em", margin: "15px", height:'25em'}}>
                        <img className="card-img-top" src={decodeUrl(this.props.product.imageUrl)} alt="" />
                        <div className="card-body">
                            <h5 className="card-title">{this.props.product.name}</h5>
                            {this.props.product.isAvailable ?
                                (<a href="!#" className="badge badge-primary">In stock</a>)
                                :
                                (<a href="!#" className="badge badge-warning">Out of stock</a>)
                            }
                            <h5>Rs.{this.props.product.price}.00</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up
								the bulk of the card's content.
                            </p>
                            <div className="text-center">
                                <button className="btn btn-primary"  onClick={this.checkCartIsEmpty() ? this.onAddToCart : this.onUpdateCart } disabled={this.addedToCart()}>
                                    {
                                       this.addedToCart() ?' ADDED TO CART ': 'ADD TO CART'
                                    }
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    products: state.products,
    cart :state.cart
});

const mapDispatchToProps = {
    onAddToCart: productService.addItemToCart,
    onUpdateCart:productService.updateCart
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
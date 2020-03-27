import React, { Component } from 'react';
import { connect } from 'react-redux';
import axiosInstance from '../helpers/axios';
import { config } from '../config/config'
import { decodeUrl } from "../helpers/url-parser";
import { productService } from "../services";


class ProductDetails extends Component {

    state = {
        product: null,
        qty: 1
    }

    constructor(props) {
        super(props);
        this.onAddToCart = this.onAddToCart.bind(this);
        this.onUpdateCart = this.onUpdateCart.bind(this);
    }

    async componentDidMount() {
        const { match: { params } } = this.props;
        let { data } = await axiosInstance.get(`${config.API_BASE_URL}/products?productId=${params.id}`);
        let product = data.data;
        console.log(product);
        this.setState({ product: product });
    }

    onAddToCart = () => {
        this.props.onAddToCart(this.props.product);
    }

    onUpdateCart = () => {
        this.props.onUpdateCart(this.props.product, this.props.cart);
    }

    addedToCart = () => {
        console.log("addedToCart");
        return this.props.cart.filter((item) => {
            return this.props.product._id === item._id
        }).length > 0;
    }

    checkCartIsEmpty() {
        return this.props.cart.length === 0;
    }

    qtyIncrement = () => {
        if (this.state.qty < this.state.product.qty) {
            this.setState({
                qty: this.state.qty + 1
            });
        }
    }

    qtyDecrement = () => {
        if (this.state.qty > 1) {
            this.setState({
                qty: this.state.qty - 1
            });
        }
    }

    render() {
        return (
            <div className="site-section">
                <div className="container">
                    {this.state && this.state.product &&
                        <div className="row">
                            <div className="col-md-6">
                                <div className="item-entry">
                                    <img src={decodeUrl(this.state.product.imageUrl)} alt="Image" className="img-fluid" />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <h2 className="text-black">{this.state.product.name}</h2>
                                <p><strong className="text-primary h4">LKR {this.state.product.price}.00</strong></p>

                                {this.state.product.isAvailable == true &&
                                    (
                                        <div>
                                            <div className="mb-5">
                                                <div className="input-group mb-3" style={{ maxWidth: "120px" }}>
                                                    <div className="input-group-prepend">
                                                        <button className="btn btn-outline-primary js-btn-minus" type="button" onClick={() => { this.qtyDecrement() }}>&minus;</button>
                                                    </div>
                                                    <input type="text" className="form-control text-center" value={this.state.qty} placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                                                    <div className="input-group-append">
                                                        <button
                                                            className="btn btn-outline-primary js-btn-plus" type="button"
                                                            onClick={() => { this.qtyIncrement() }}>+</button>
                                                    </div>
                                                </div>

                                            </div>
                                            <p>
                                                <button className="buy-now btn btn-sm height-auto px-4 py-3 btn-primary" onClick={this.checkCartIsEmpty() ? this.onAddToCart : this.onUpdateCart} disabled={this.addedToCart()}>
                                                    {
                                                        this.addedToCart() ? ' ADDED TO CART ' : 'ADD TO CART'
                                                    }
                                                </button>
                                            </p>
                                        </div>
                                    )
                                }
                            </div>

                        </div>
                    }
                </div>
            </div>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
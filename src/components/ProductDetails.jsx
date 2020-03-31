import React, { Component } from 'react';
import { connect } from 'react-redux';
import axiosInstance from '../helpers/axios';
import { decodeUrl } from "../helpers/url-parser";
import Loading from "./spinners/Loading";
import { productService } from "../services";

class ProductDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product: {},
            inCart: false,
            loading: false,
            qty: 1
        }
        this.increaseQty = this.increaseQty.bind(this);

        this.decreaseQty = this.decreaseQty.bind(this);

        this.onAddToCart = this.onAddToCart.bind(this);

        this.onUpdateCart = this.onUpdateCart.bind(this);


    }
    onAddToCart() {
        this.props.onAddToCart(this.state.product, this.state.qty);
    }
    onUpdateCart() {
        this.props.onUpdateCart(this.state.product, this.props.cart, this.state.qty);
    }
    addedToCart() {
        return this.props.cart.filter((item) => {
            return this.state.product._id === item.productId
        }).length > 0;
    }

    checkCartIsEmpty() {
        return this.props.cart.length === 0;
    }
    async componentDidMount() {
        const { id } = this.props.match.params;
        this.setState({
            loading: true
        });
        axiosInstance.get('/products/' + id).then((data) => {
            this.setState({
                product: data.data.data,
                loading: false
            })
            let item = this.props.cart.filter((item) => {
                return item.productId === this.state.product._id
            }).length > 0;

            if (item) {
                this.setState({
                    inCart: true
                })
            }
        }).catch((er) => {
            console.log(er);
            this.setState({
                loading: false
            })
        });
    }
    increaseQty() {
        let newQty = this.state.qty + 1;
        this.setState({
            qty: newQty
        })
    }
    decreaseQty() {
        let newQty = this.state.qty - 1;
        this.setState({
            qty: newQty
        })
    }
    render() {

        return (
            <div className="site-section">
                <Loading loading={this.state.loading} />
                <div className="container">
                    {this.state && this.state.product && !this.state.loading &&
                        <div className="row">
                            <div className="col-md-6">
                                <div className="item-entry">
                                    <img src={decodeUrl(this.state.product.imageUrl ?? "")} alt="Image" className="img-fluid" />
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
                                                        <button className="btn btn-outline-primary js-btn-minus" type="button" onClick={() => { this.decreaseQty() }} disabled={this.state.inCart || this.state.qty <= 0}>&minus;</button>
                                                    </div>
                                                    <input type="text" className="form-control text-center" value={this.state.qty} placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" onChange={() => { }} />
                                                    <div className="input-group-append">
                                                        <button
                                                            className="btn btn-outline-primary js-btn-plus" type="button" disabled={this.state.inCart}
                                                            onClick={() => { this.increaseQty() }}>+</button>
                                                    </div>
                                                </div>

                                            </div>

                                            <div className="text-center">
                                                {
                                                    this.state.product.isAvailable ? (
                                                        <button className="btn btn-primary" onClick={this.checkCartIsEmpty() ? this.onAddToCart : this.onUpdateCart} disabled={this.addedToCart()}>
                                                            {
                                                                this.addedToCart() ? ' ADDED TO CART ' : 'ADD TO CART'
                                                            }
                                                        </button>
                                                    ) : (
                                                            <button className="btn btn-warning">
                                                                {
                                                                    'OUT OF STOCK '
                                                                }
                                                            </button>
                                                        )
                                                }

                                            </div>

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
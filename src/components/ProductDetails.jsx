import React, { Component } from 'react';
import { axios } from 'axios';
import { connect } from 'react-redux';
import { addToCart } from '../store/actions/cart.action';

class ProductDetails extends Component {

    state = {
        product: null
    }

    constructor(props) {
        super(props);

        console.log(this.props.match.params.id);
        this.onAddToCart = this.onAddToCart.bind(this);
    }

    componentDidMount() {
        const { match: { params } } = this.props;

        axios.get(`/api/users/${params.userId}`)
            .then(({ data: user }) => {
                console.log('user', user);

                this.setState({ user });
            });
    }

    onAddToCart() {
        this.props.onAddToCart(this.props.product);
    }

    render() {
        return (
            <div className="site-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="item-entry">
                                <a href="#" className="product-item md-height bg-gray d-block">
                                    <img src="images/prod_2.png" alt="Image" className="img-fluid" />
                                </a>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <h2 className="text-black">Gray Shoe</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, vitae, explicabo? Incidunt facere, natus soluta dolores iusto! Molestiae expedita veritatis nesciunt doloremque sint asperiores fuga voluptas, distinctio, aperiam, ratione dolore.</p>
                            <p className="mb-4">Ex numquam veritatis debitis minima quo error quam eos dolorum quidem perferendis. Quos repellat dignissimos minus, eveniet nam voluptatibus molestias omnis reiciendis perspiciatis illum hic magni iste, velit aperiam quis.</p>
                            <p><strong className="text-primary h4">$50.00</strong></p>
                            <div className="mb-5">
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <button className="btn btn-outline-primary js-btn-minus" type="button">&minus;</button>
                                    </div>
                                    <input type="text" className="form-control text-center" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-primary js-btn-plus" type="button">&plus;</button>
                                    </div>
                                </div>

                            </div>
                            <p><a href="cart.html" className="buy-now btn btn-sm height-auto px-4 py-3 btn-primary">Add To Cart</a></p>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

const mapStateToProps = (state) => ({
    product: null
});

const mapDispatchToProps = {
    onAddToCart: addToCart
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
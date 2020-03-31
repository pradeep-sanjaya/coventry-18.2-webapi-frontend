import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axiosInstance from '../../helpers/axios';
import { config } from '../../config/config';
import { decodeUrl } from "../../helpers/url-parser";


class PopularProducts extends Component {

    state = {
        products: [
        ]
    };

    render() {
        return (
            <div className="site-section">
                <div className="container">
                    <div className="row">
                        <div className="title-section mb-5 col-12">
                            <h2 className="text-uppercase">Popular Products</h2>
                        </div>
                    </div>
                    <div className="row">

                        {
                            this.state.products.map((product, key) => {
                                return (
                                    <div className="col-lg-4 col-md-6 item-entry mb-4">
                                        <Link to={`/product/${product.id}`} className="product-item md-height bg-gray d-block">
                                            <img src={decodeUrl(product.imageUrl)} alt="" className="img-fluid" />
                                        </Link>
                                        <h2 className="item-title">
                                            <Link to={`/product/${product._id}`}>{product.name}</Link>
                                        </h2>
                                        <strong className="item-price">LKR {product.price}</strong>
                                    </div>
                                );
                            })
                        }

                    </div>
                </div>
            </div>
        );
    }

    async componentDidMount() {
        let { data } = await axiosInstance.get(config.API_BASE_URL + '/products');
        let products = data.data.map(product => {
            return ({
                id: product._id,
                name: product.name,
                imageUrl: product.imageUrl,
                price: product.price,
                qty: product.qty
            });
        });

        this.setState({ products: products });
    }
}

export default PopularProducts;
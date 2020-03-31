import React, { Component } from 'react';
import axiosInstance from '../../helpers/axios';
import { config } from '../../config/config';
import Category from '../categories/CategoryDetails';

class Collections extends Component {

    state = {
        firstCategory: null,
        categories: [
        ]
    };

    render() {
        return (
            <div className="site-section">
                <div className="container">
                    <div className="title-section mb-5">
                        <h2 className="text-uppercase"><span className="d-block">Discover</span> The Collections</h2>
                    </div>
                    <div className="row align-items-stretch">
                        {this.state.firstCategory != null ?
                            (
                                <div className="col-lg-8">
                                    <Category category={this.state.firstCategory} cls="product-item sm-height full-height bg-gray" />
                                </div>
                            ) : null
                        }

                        <div className="col-lg-4">
                            {
                                this.state.categories.map((category, key) => {
                                    return (
                                        <Category category={category} key={key} cls="product-item sm-height bg-gray mb-4" />
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </div >
        );
    }

    async componentDidMount() {
        let { data } = await axiosInstance.get(config.API_BASE_URL + '/categories');
        let categories = data.data.map(category => {
            return ({
                id: category._id,
                name: category.name,
                imageUrl: category.imageUrl
            });
        });

        if (Array.isArray(categories) && categories.length > 0) {
            let firstCategory = categories[0];
            let otherCategories = categories.splice(1);
            this.setState({ firstCategory: firstCategory, categories: otherCategories });
        }

    }
}

export default Collections;
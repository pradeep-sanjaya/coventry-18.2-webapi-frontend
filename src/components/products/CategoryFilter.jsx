import React, { Component } from 'react';
import { config } from '../../config/config'
import { Link } from 'react-router-dom';
import axiosInstance from '../../helpers/axios';

class CategoryFilter extends Component {

    state = {
        categories: [
        ]
    };

    render() {
        return (
            <div className="col-md-3 order-2 mb-5 mb-md-0">
                <div className="border p-4 rounded mb-4">
                    <h3 className="mb-3 h6 text-uppercase text-black d-block">Categories</h3>
                    <ul className="list-unstyled mb-0">
                        {
                            this.state.categories.map((category, key) => {
                                return (
                                    <li className="mb-1" key={key}>
                                        <Link to={`/category/${category.id}`} className="d-flex"><span>{category.name}</span></Link>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }

    async componentDidMount() {
        console.log(config.API_BASE_URL)
        let { data } = await axiosInstance.get(config.API_BASE_URL + '/categories');
        let categories = data.data.map(category => {
            return ({
                id: category._id,
                name: category.name,
                imageUrl: category.imageUrl
            });
        });

        if (Array.isArray(categories) && categories.length > 0) {
            this.setState({ categories: categories });
        }
    }
}

export default CategoryFilter;
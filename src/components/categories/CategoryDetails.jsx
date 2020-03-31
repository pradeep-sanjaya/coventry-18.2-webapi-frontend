import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {decodeUrl} from "../../helpers/url-parser";

class CategoryDetails extends Component {
    render() {
        return (
            (this.props.category !== null && this.props.category !== undefined) ? (
                <div className={this.props.cls}>
                    <Link to={`/category/${this.props.category.id}`} className="product-category">{this.props.category.name}</Link>
                    <img src={decodeUrl(this.props.category.imageUrl ?? "")} alt="" className="img-fluid" />
                </div>
            )
                : null
        );
    }

}


export default CategoryDetails;
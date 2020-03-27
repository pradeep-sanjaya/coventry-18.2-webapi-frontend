import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CategoryDetails extends Component {
    render() {
        return (
            (this.props.category !== null && this.props.category !== undefined) ? (
                <div className={this.props.cls}>
                    <Link to={`/category/${this.props.category.id}`} className="product-category">{this.props.category.name}</Link>
                    <img src={this.getUrl(this.props.category.imageUrl)} alt="" className="img-fluid" />
                </div>
            )
                : null
        );
    }

    getUrl(encodedUrl) {
        if (this.props.category.imageUrl !== undefined) {
            return atob(this.props.category.imageUrl);
        }
        return '';
    }
}


export default CategoryDetails;
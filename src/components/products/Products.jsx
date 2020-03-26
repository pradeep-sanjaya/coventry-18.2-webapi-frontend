import React, { Component } from 'react';
import { connect } from 'react-redux';
import { productService } from '../../services';
import TopBanner from './TopBanner';
import Breadcrumb from './Breadcrumb';
import ProductsGrid from './ProductsGrid';

class Products extends Component {

    render() {
        return (
            <div>
                <TopBanner></TopBanner>
                <Breadcrumb></Breadcrumb>
                <ProductsGrid></ProductsGrid>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    products: state.products
});

const mapDispacthToProps = {
    fetchProducts: productService.getAll
};

export default connect(mapStateToProps, mapDispacthToProps)(Products);

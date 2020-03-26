import React, { Component } from 'react';
import { connect } from 'react-redux';
import { productService } from '../../services';
import ProductsGridItem from './ProductsGridItem';

class ProductsGrid extends Component {

    componentDidMount() {
        this.props.fetchProducts()
    }

    render() {
        return (
            <div className="site-section">
                <div className="container">

                    <div className="row mb-5">
                        <div className="col-md-9 order-1">

                            <div className="row align">
                                <div className="col-md-12 mb-5">
                                    <div className="float-md-left"><h2 className="text-black h5">Shop All</h2></div>
                                    <div className="d-flex">
                                        <div className="dropdown mr-1 ml-md-auto">
                                            <button type="button" className="btn btn-white btn-sm dropdown-toggle px-4" id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Latest
                                            </button>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                                                <a className="dropdown-item" href="#">Men</a>
                                                <a className="dropdown-item" href="#">Women</a>
                                                <a className="dropdown-item" href="#">Children</a>
                                            </div>
                                        </div>
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-white btn-sm dropdown-toggle px-4" id="dropdownMenuReference" data-toggle="dropdown">Reference</button>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuReference">
                                                <a className="dropdown-item" href="#">Name, A to Z</a>
                                                <a className="dropdown-item" href="#">Name, Z to A</a>
                                                <div className="dropdown-divider"></div>
                                                <a className="dropdown-item" href="#">Price, low to high</a>
                                                <a className="dropdown-item" href="#">Price, high to low</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-5">
                                {this.props.products.map((product, key) => {
                                    return (
                                        <ProductsGridItem product={product} key={key} />
                                    );
                                })}
                            </div>
                        </div>

                        <div className="col-md-3 order-2 mb-5 mb-md-0">
                            <div className="border p-4 rounded mb-4">
                                <h3 className="mb-3 h6 text-uppercase text-black d-block">Categories</h3>
                                <ul className="list-unstyled mb-0">
                                    <li className="mb-1"><a href="#" className="d-flex"><span>Men</span></a></li>
                                    <li className="mb-1"><a href="#" className="d-flex"><span>Women</span></a></li>
                                    <li className="mb-1"><a href="#" className="d-flex"><span>Children</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
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

export default connect(mapStateToProps, mapDispacthToProps)(ProductsGrid);
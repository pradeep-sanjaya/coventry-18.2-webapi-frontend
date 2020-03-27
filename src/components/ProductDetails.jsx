import React, { Component } from 'react';
import { connect } from 'react-redux';
import axiosInstance from '../helpers/axios';
import { decodeUrl } from "../helpers/url-parser";
import Loading from "./spinners/Loading";

class ProductDetails extends Component {

    constructor(props) {
        super(props);
        this.state ={
            product:{},
            inCart:false,
            loading:false
        }
    }

     async componentDidMount() {
        const { id } = this.props.match.params;
         this.setState({
             loading:true
         });
        axiosInstance.get('/products/'+id).then((data)=>{
           this.setState({
               product:data.data.data,
               loading:false
           })
            let item =  this.props.cart.filter((item)=>{
                return item._id === this.state.product._id
            }).length > 0;

            if(item) {
                this.setState({
                    inCart:true
                })
            }
        }).catch((er)=>{
            console.log(er);
            this.setState({
                loading:false
            })
        });



    }
    render() {

        return (
            <div className="site-section">
              <Loading loading={this.state.loading}/>
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
                                                        <button className="btn btn-outline-primary js-btn-minus" type="button" onClick={() => { }}>&minus;</button>
                                                    </div>
                                                    <input type="text" className="form-control text-center" value={this.state.qty} placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                                                    <div className="input-group-append">
                                                        <button
                                                            className="btn btn-outline-primary js-btn-plus" type="button"
                                                            onClick={() => {  }}>+</button>
                                                    </div>
                                                </div>

                                            </div>
                                            <p> The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href,
                                                but still need the element to resemble a link, use a button and change it with appropriate styles</p>
                                            <p>

                                                <button className="buy-now btn btn-sm height-auto px-4 py-3 btn-primary" onClick={null} disabled={false}>
                                                    {
                                                      this.state.inCart ? 'ADDED TO CART' : 'ADD TO CART'
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
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
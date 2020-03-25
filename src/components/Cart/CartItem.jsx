import React, { Component } from "react";
import {connect} from "react-redux";
import {decodeUrl} from "../../helpers/url-parser";

class CartItem extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
               <div className="row">
               <div className="col-md-2">
                   <img
                       width={80 +"px"}
                       style={{margin: '30px'}}
                       height="auto"
                       src={decodeUrl(this.props.product.imageUrl)}
                       alt=""
                   />
               </div>
                   <div className="col-md-7">
                       <div >
                           <h5 className="card-title">{this.props.product.name}</h5>
                           <h5>Rs.{this.props.product.price}.00</h5>
                           <p className="card-text">
                               Some quick example text to build on the card title and make
                               up the bulk of the card's content.
                           </p>
                           <div className="text-center">
                               <button className="btn btn-primary" disabled={this.props.product.selectedQty < 1}>-</button>
                               <h3>{this.props.product.selectedQty}</h3>
                               <button className="btn btn-primary" disabled={this.props.product.selectedQty > this.props.product.qty }>+</button>
                           </div>
                       </div>
                   </div>
                   <div className="col-md-3">
                       <button className="btn btn-default">X</button>
                   </div>
               </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
   // products: state.products
});

const mapDispatchToProps = {
   // onAddToCart: addToCart
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
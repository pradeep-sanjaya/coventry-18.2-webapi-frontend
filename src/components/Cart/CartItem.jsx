import React, { Component } from "react";
import {connect} from "react-redux";
import {decodeUrl} from "../../helpers/url-parser";
import {productService} from "../../services";

class CartItem extends Component {

    constructor(props) {
        super(props);
        this.deleteItemFromCart = this.deleteItemFromCart.bind(this);
        this.increaseQty = this.increaseQty.bind(this);
        this.descreaseQty = this.descreaseQty.bind(this);
    }
    deleteItemFromCart(){
        this.props.deleteItemFromCart(this.props.product,this.props.cart)
    }
    increaseQty(){

       this.props.increaseQty(this.props.product,this.props.cart)
    }
    descreaseQty(){

        this.props.descreaseQty(this.props.product,this.props.cart)
    }
    render() {
        return (
            <div>
               <div className="row">
               <div className="col-md-2">
                   <img
                       width={80 +"px"}
                       style={{margin: '30px',borderRadius: '10%'}}
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
                           <div className="text-center" style={{display:'flex'}}>
                               <button className="btn btn-primary" disabled={this.props.product.selectedQty < 1} onClick={this.descreaseQty}>-</button>
                               <h5 style={{padding:'10px'}}>{this.props.product.selectedQty}</h5>
                               <button className="btn btn-primary" disabled={this.props.product.selectedQty > this.props.product.qty } onClick={this.increaseQty}>+</button>
                           </div>
                       </div>
                   </div>
                   <div className="col-md-3">
                       <button className="btn btn-default" onClick={this.deleteItemFromCart}>X</button>
                   </div>

               </div>
                <hr/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    products: state.products,
    cart :state.cart
});

const mapDispatchToProps = {
    deleteItemFromCart:productService.deleteFromCart,
    increaseQty:productService.increaseItemQtyCart,
    descreaseQty:productService.decreaseItemQtyCart
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
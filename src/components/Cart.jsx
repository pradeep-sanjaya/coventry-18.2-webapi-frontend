import React, { Component } from "react";
import { connect } from "react-redux";
import CartItem from "./Cart/CartItem";

class Cart extends Component {
    render() {
        return (
            <div>
               <div className="row">
                   <div className="col-md-6">
                       <div className="list-group">
                           {this.props.cart.map((product, key) => {
                               return (
                                   <div key={key}>
                                       <CartItem product = {product} />
                                   </div>
                               );
                           })}
                       </div>
                   </div>
                   <div className="col-md-6">
                       {this.props.cart.length>0 ?
                           <div className="p-3 p-lg-5 border">
                               {<h1>Cart Total : Rs. {this.props.cart.reduce((sum,a)=>{return sum + a.price;},0)}.00</h1>}
                               <div className="form-group row">
                                   <div className="col-md-8">
                                       <label htmlFor="coupon" className="text-black">Coupon Code <span className="text-success">*</span></label>
                                      <div className="col-md-8">
                                          <input type="text" className="form-control" name="coupon"  />
                                      </div>
                                       <div className="col-md-3" style={{marginTop:'10px'}}>
                                           <button  className="btn btn-success">Apply</button>
                                       </div>
                                   </div>
                               </div>
                           </div> :null
                       }
                   </div>
               </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    cart: state.cart
});

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);

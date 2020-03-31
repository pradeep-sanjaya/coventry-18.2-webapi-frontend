import React, { Component } from "react";
import { connect } from "react-redux";
import CartItem from "./Cart/CartItem";
import {couponService} from "../services/coupon.service";
import {productService} from "../services";
import Loading from "./spinners/Loading";

class Cart extends Component {
    constructor(props){
        super(props);
        this.state = { street: '', district: '', paymentType: 'Cash on Delivery', zipCode: '',coupon:'' };
        this.placeOrder=this.placeOrder.bind(this);
        this.addDiscountToCart=this.addDiscountToCart.bind(this);
    }
    inputChangeHandler = (event) => {
        let nam = event.target.name;
        let value = event.target.value;
        this.setState({ [nam]: value });
    };
    placeOrder(){
        const { street, district, paymentType, zipCode } = this.state;
        this.props.placeOrder({paymentType,district,street,zipCode});
    }
    addDiscountToCart(){
        const { coupon } = this.state;
        this.props.addDiscountToCart(coupon);
        this.setState({
            coupon:''
        })
    }
    render() {
        return (
            <div>
                <Loading loading={this.props.loading} />
               <div className="row">
                   <div className="col-md-6">
                       <h2 style={{marginLeft:'30px'}}>Cart Items</h2>
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
                               {<h1>Cart Total : Rs. { (this.props.cartTotal).toFixed(2)}</h1>}
                               <div className="form-group row">
                                   <div className="col-md-8">
                                       <label htmlFor="coupon" className="text-black">Coupon Code <span className="text-success">*</span></label>
                                      <div className="col-md-8" style={{display:"flex"}}>
                                          <input type="text" className="form-control" name="coupon" value={this.state.coupon} onChange={this.inputChangeHandler} placeholder="EX - APR30" />

                                          <button  className="btn btn-outline-success" style={{marginLeft:"20px"}} onClick={this.addDiscountToCart} disabled={this.props.loading}>Apply</button>

                                      </div>
                                       <div style={{display:"flex",paddingLeft:'10px'}} >
                                       {
                                           this.props.coupons.map((coupon,key)=>{
                                               return (
                                                    <span key ={key} className="badge badge-primary" style={{margin:'10px'}}>{coupon.discountCode} - {coupon.deductiblePercentage}% OFF  </span>
                                               );
                                           })
                                       }
                                       </div>

                                   </div>
                               </div>
                               <div className="form-group row">
                                   <div className="col-md-8">
                                       <label htmlFor="coupon" className={this.state.paymentType.length>0 ? 'text-black' :'text-danger'}>Payment Type <span className="text-success">*</span></label>
                                       <select name="gender" value={this.state.paymentType} onChange={this.inputChangeHandler} className="form-control">
                                           <option value="Cash On Delivery">Cash On Delivery</option>
                                           <option value="Credit Card">Credit Card</option>
                                           <option value="Paypal">Paypal</option>
                                       </select>
                                   </div>
                               </div>
                               <div className="form-group row">
                                   <div className="col-md-6">
                                       <label htmlFor="street" className={this.state.street.length >0 ? 'text-black' : 'text-danger'}>Street<span className="text-danger">*</span></label>
                                       <input type="text" className="form-control" value={this.state.street} onChange={this.inputChangeHandler} name="street" />
                                   </div>
                               </div>
                               <div className="form-group row">
                                   <div className="col-md-6">
                                       <label htmlFor="district" className={this.state.district.length>0 ? 'text-black' :'text-danger'}>District<span className="text-danger">*</span></label>
                                       <input type="text" className="form-control" value={this.state.district} onChange={this.inputChangeHandler} name="district" />
                                   </div>
                               </div>
                               <div className="form-group row">
                                   <div className="col-md-6">
                                       <label htmlFor="zipCode" className={this.state.zipCode.length>0 ? 'text-black' :'text-danger'}>Zip Code<span className="text-danger">*</span></label>
                                       <input type="text" className="form-control" value={this.state.zipCode} onChange={this.inputChangeHandler} name="zipCode" />
                                   </div>
                               </div>
                               <div className="form-group row">
                                   <button  className="btn btn-outline-success" style={{marginLeft:"20px"}} onClick={this.placeOrder}>Place Order</button>
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
    cart: state.cart,
    coupons:state.coupons,
    loading:state.loading,
    cartTotal:state.cartTotal
});

const mapDispatchToProps = {
    applyCoupon:couponService.applyCoupon,
    placeOrder:productService.placeOrder,
    addDiscountToCart:productService.addDiscountToCart
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);

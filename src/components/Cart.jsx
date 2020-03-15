import React, { Component } from "react";
import { connect } from "react-redux";

class Cart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Cart </h1>
        <div style={{ display: "flex" }}>
          {this.props.cart.map((product, key) => {
            return (
              <div
                className="card"
                style={{ width: "18em", margin: "15px" }}
                key={key}
              >
                <img
                  className="card-img-top"
                  src={product.image}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>

                  <h5>Rs.{product.price}.00</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <div className="text-center">
                    <button className="btn btn-primary">Quantity : {product.qty}</button>
                  </div>
                </div>
              </div>
            );
          })}
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

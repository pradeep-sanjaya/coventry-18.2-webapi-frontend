import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { authService } from "../services/auth.service";
import SweetAlert from "sweetalert2-react";
import { resetError } from "../services/error";

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);

    }
    logoutUser() {
        this.props.logoutUser()
    }
    render() {
        return (
            <div className="site-navbar bg-white py-2">

                <div className="search-wrap">
                    <div className="container">
                        <a href="!#" className="search-close js-search-close"><span className="icon-close2"></span></a>
                        <form action="!#" method="post">
                            <input type="text" className="form-control" placeholder="Search keyword and hit enter..."></input>
                        </form>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="logo">
                            <div className="site-logo">
                                <Link to="/" className="js-logo-clone">Clothing Store</Link>
                            </div>
                        </div>
                        <div className="main-nav d-none d-lg-block">
                            <nav className="site-navigation text-right text-md-center" role="navigation">
                                <ul className="site-menu js-clone-nav d-none d-lg-block">
                                    <li className="active">
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/products">Shop</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact">Contact</Link>
                                    </li>
                                    {
                                        this.props.user ?
                                            <li> <div className="dropdown show">
                                                <a className="dropdown-toggle" href="#" role="button"
                                                    id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
                                                    aria-expanded="false">
                                                    Welcome | {this.props.user.name}
                                                </a>

                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                    <Link className="dropdown-item" to="/products">Profile</Link>
                                                    <a className="dropdown-item" onClick={this.logoutUser}>Logout</a>
                                                </div>
                                            </div>
                                            </li>
                                            : null

                                    }

                                    {this.props.user ? null :
                                        <React.Fragment>
                                            <li>
                                                <Link to="/login">Login</Link>
                                            </li>
                                            <li>
                                                <Link to="/register">Register</Link>
                                            </li>
                                        </React.Fragment>
                                    }
                                </ul>
                            </nav>
                        </div>
                        <div className="icons">
                            <a href="!#" className="icons-btn d-inline-block js-search-open"><span className="icon-search"></span></a>
                            {
                                this.props.user ?
                                    <Link to="/cart" className="icons-btn d-inline-block bag">
                                        <span className="icon-shopping-bag"></span>
                                        <span className="number">{this.props.cart.length}</span>
                                    </Link> : null
                            }

                            <a href="!#" className="site-menu-toggle js-menu-toggle ml-3 d-inline-block d-lg-none"><span className="icon-menu"></span></a>
                        </div>
                    </div>
                </div>
                {
                    this.props.error &&   this.props.error.message!=null ?
                        <SweetAlert
                            show={true}
                            title="Alert"
                            type={this.props.error.type ? 'success' :'error'}
                            text={this.props.error.message}
                            onConfirm={this.props.resetErrorMessage}
                        /> : null

                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    cart: state.cart,
    user: state.user,
    error: state.error
});

const mapDispatchToProps = {
    logoutUser: authService.logoutUser,
    resetErrorMessage: resetError
};
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);

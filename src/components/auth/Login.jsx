import React, { Component } from "react";
import { connect } from "react-redux";
import {authService} from "../../services/auth.service";
import SweetAlert from 'sweetalert2-react';
import {Link} from "react-router-dom";

class Login extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = { email: '',password:''};

    }
    inputChangeHandler = (event) => {
        let nam = event.target.name;
        let value = event.target.value;
        this.setState({[nam]: value});
    };
    handleSubmit(){
        const {email,password} = this.state;
        this.props.handleSubmit({email,password})
    }
    render() {
        return (
            <div>
                <div className="custom-border-bottom py-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 mb-0">
                                <Link to="/">Home</Link>
                                <span className="mx-2 mb-0">/</span> <strong className="text-black">Login</strong>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2 className="h3 mb-3 text-black">Login</h2>
                            </div>
                            <div className="col-md-12">

                                    <div className="p-3 p-lg-5 border">
                                        <div className="form-group row">
                                            <div className="col-md-6">
                                                <label htmlFor="email" className="text-black">Email <span className="text-danger">*</span></label>
                                                <input type="text" className="form-control"  name="email" value={this.state.email} onChange={this.inputChangeHandler}/>
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="password" className="text-black">Password <span className="text-danger">*</span></label>
                                                <input type="password" className="form-control"  name="password" value={this.state.password} onChange={this.inputChangeHandler} />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <div className="col-lg-12">
                                                <button type="button"  className="btn btn-primary btn-lg btn-block" onClick={this.handleSubmit}>{this.props.loading? 'Signing In' : 'LOGIN' }</button>
                                                <SweetAlert
                                                    show={this.props.loading}
                                                    title="Alert"
                                                    text="Log in in please wait.."
                                                />

                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                 </div>
            </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    authentication: state.authentication,
    user:state.user,
    loading:state.loading,
});

const mapDispatchToProps  = {
    handleSubmit : authService.loginUser,
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);

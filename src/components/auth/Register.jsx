import React, { Component } from "react";
import { connect } from "react-redux";
import {registerUser} from "../../services/auth";
import SweetAlert from "sweetalert2-react";
import {Link} from "react-router-dom";
import {setError} from "../../services/error";

class Register extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.handleRegister = this.handleRegister.bind(this);
        this.state = { email: '',password:'',gender:'Male',firstName:'',lastName:''};
    }
    inputChangeHandler = (event) => {
        let nam = event.target.name;
        let value = event.target.value;
        console.log(value)
        this.setState({[nam]: value});
    };
    handleRegister(){
        const {email,password,gender,firstName,lastName} = this.state;
        if(email&&password&&gender&&firstName&&lastName){
            this.props.handleRegister({email,password,gender,firstName,lastName})
        }else {
          this.props.setError("Please fill all fields")
        }
    }
    render() {
        return (
            <div>
                <div>
                    <div className="custom-border-bottom py-3">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 mb-0">
                                    <Link to="/">Home</Link>
                                    <span className="mx-2 mb-0">/</span> <strong className="text-black">Register</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="site-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <h2 className="h3 mb-3 text-black">Register</h2>
                                </div>
                                <div className="col-md-12">

                                    <div className="p-3 p-lg-5 border">
                                        <div className="form-group row">
                                            <div className="col-md-6">
                                                <label htmlFor="email" className="text-black">Email <span className="text-danger">*</span></label>
                                                <input type="text"  className="form-control" value={this.state.email} onChange={this.inputChangeHandler} name="email"/>
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="password" className="text-black">Password <span className="text-danger">*</span></label>
                                                <input type="password"  className="form-control" value={this.state.password} onChange={this.inputChangeHandler} name="password"/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-md-6">
                                                <label htmlFor="email" className="text-black">Gender <span className="text-danger">*</span></label>
                                                    <select name="gender" value={this.state.gender} onChange={this.inputChangeHandler} className="form-control">
                                                        <option value="Male">Male</option>
                                                        <option value="Female">Female</option>
                                                    </select>
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="password" className="text-black">First Name <span className="text-danger">*</span></label>
                                                <input type="text"  className="form-control" value={this.state.firstName} onChange={this.inputChangeHandler} name="firstName"/>
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <div className="col-md-6">
                                                <label htmlFor="lastName" className="text-black">Last Name <span className="text-danger">*</span></label>
                                                <input type="text"  className="form-control" value={this.state.lastName} onChange={this.inputChangeHandler} name="lastName"/>
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <div className="col-lg-12">
                                                <button type="button"  className="btn btn-primary btn-lg btn-block" onClick={this.handleRegister}>{this.props.loading? 'Registering' : 'REGISTER' }</button>
                                                <SweetAlert
                                                    show={this.props.loading}
                                                    title="Alert"
                                                    text="Registering please wait.."
                                                />
                                            </div>
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

const mapDispatchToProps = {
    handleRegister: registerUser,
    setError:setError
};
export default connect(mapStateToProps, mapDispatchToProps)(Register);

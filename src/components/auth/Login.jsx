import React, { Component } from "react";
import { connect } from "react-redux";
import {loginUser} from "../../services/auth";
import SweetAlert from 'sweetalert2-react';

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
                <h1>Login </h1>
                 <div className="container">
                 <div className="text-center">
                     <div className="form-group">

                         <input type="text"  className="form-control" value={this.state.email} placeholder="Enter email" name="email" onChange={this.inputChangeHandler}/>
                     </div>
                     <div className="form-group">

                         <input type="password"  className="form-control" value={this.state.password} placeholder="Enter Password" name="password" onChange={this.inputChangeHandler}/>

                     </div>
                     <div className="form-group">

                         <button type="button"  className="btn btn-success" onClick={this.handleSubmit}>{this.props.loading? 'Signing In' : 'LOGIN' }</button>
                         <SweetAlert
                             show={this.props.loading}
                             title="Alert"
                             text="Loggin in please wait.."

                         />
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
    loading:state.loading
});

const mapDispatchToProps  = {
    handleSubmit : loginUser
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);

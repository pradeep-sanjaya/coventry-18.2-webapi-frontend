import React, { Component } from "react";
import { connect } from "react-redux";
import { authService } from "../../services";
import SweetAlert from "sweetalert2-react";

class Register extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.handleRegister = this.handleRegister.bind(this);
        this.state = { email: '', password: '', gender: '', firstName: '', lastName: '' };
    }

    inputChangeHandler = (event) => {
        let nam = event.target.name;
        let value = event.target.value;
        this.setState({ [nam]: value });
    };

    handleRegister() {
        const { email, password, gender, firstName, lastName } = this.state;
        this.props.handleRegister({ email, password, gender, firstName, lastName })
    }

    render() {
        return (
            <div>
                <h1>Register </h1>
                <div className="container">
                    <div className="text-center">
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" className="form-control" value={this.state.email} onChange={this.inputChangeHandler} name="email" />

                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="text" className="form-control" value={this.state.password} onChange={this.inputChangeHandler} name="password" />

                        </div>
                        <div className="form-group">
                            <label>Gender</label>
                            <div className="form-group">
                                <select name="gender" value={this.state.gender} onChange={this.inputChangeHandler} className="form-control">
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>

                        </div>
                        <div className="form-group">
                            <label>First Name</label>
                            <input type="text" className="form-control" value={this.state.firstName} onChange={this.inputChangeHandler} name="firstName" />

                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input type="text" className="form-control" value={this.state.lastName} onChange={this.inputChangeHandler} name="lastName" />

                        </div>
                        <div className="form-group">

                            <button type="button" className="btn btn-success" onClick={this.handleRegister}>{this.props.loading ? 'Registering' : 'REGISTER'}</button>

                        </div>
                        <SweetAlert
                            show={this.props.loading}
                            title="Alert"
                            text="Loggin in please wait.."

                        />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    authentication: state.authentication,
    user: state.user,
    loading: state.loading,
    // registerStatus:state.registerStatus
});

const mapDispatchToProps = {
    handleRegister: authService.registerUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);

import React, { Component } from "react";
import { Link } from "react-router-dom";

class Contact extends Component {
    render() {
        return (
            <div>
                <div className="site-blocks-cover inner-page" style={
                    {
                        backgroundImage: `url('./images/contact.jpg')`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }
                } data-aos="fade">
                    < div className="container" >
                        <div className="row">

                        </div>
                    </div>
                </div>

                <div className="custom-border-bottom py-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 mb-0">
                                <Link to="/">Home</Link>
                                <span className="mx-2 mb-0">/</span> <strong className="text-black">Contact</strong>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="site-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2 className="h3 mb-3 text-black">Get In Touch</h2>
                            </div>
                            <div className="col-md-7">

                                <form action="#" method="post">

                                    <div className="p-3 p-lg-5 border">
                                        <div className="form-group row">
                                            <div className="col-md-6">
                                                <label for="c_fname" className="text-black">First Name <span className="text-danger">*</span></label>
                                                <input type="text" className="form-control" id="c_fname" name="c_fname" />
                                            </div>
                                            <div className="col-md-6">
                                                <label for="c_lname" className="text-black">Last Name <span className="text-danger">*</span></label>
                                                <input type="text" className="form-control" id="c_lname" name="c_lname" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-md-12">
                                                <label for="c_email" className="text-black">Email <span className="text-danger">*</span></label>
                                                <input type="email" className="form-control" id="c_email" name="c_email" placeholder="" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-md-12">
                                                <label for="c_subject" className="text-black">Subject </label>
                                                <input type="text" className="form-control" id="c_subject" name="c_subject" />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <div className="col-md-12">
                                                <label for="c_message" className="text-black">Message </label>
                                                <textarea name="c_message" id="c_message" cols="30" rows="7" className="form-control"></textarea>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-lg-12">
                                                <input type="submit" className="btn btn-primary btn-lg btn-block" value="Send Message" />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-5 ml-auto">
                                <div className="p-4 border mb-3">
                                    <span className="d-block text-primary h6 text-uppercase">Sri Lanka</span>
                                    <p className="mb-0">
                                        No: 120/5, <br />
                                        Wijerama (Vidya) Mawatha, <br />
                                        Colombo 7<br />
                                        Sri Lanka
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default Contact;
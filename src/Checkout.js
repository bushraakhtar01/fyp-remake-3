import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
// import Footer from './footer';
import { Link } from "react-router-dom";
import { UserData } from './services/UserData';

import MainNavBar from './MainNavBar';
import Footer from './Footer';
import ImgView from './ImgView';

import './UI.css';
import './Checkout.css'
import MainPage from './MainPage';

class SignUp extends Component {
 



    render() {
     

        return (
            <div>
                <MainNavBar />
                <div className="container-fluid py-lg-5 py-4">
                    <p className=""><span className="maindetails">Your Details </span></p>


                    <div className="row p-2">
                        <div className="col-lg-8 col-md-8 col-sm-8 col-12 dashboard-panel-6  py-5" >
                         
                            <form className="signupForm">
                            
                                <div className="form-group" id="usersignupform">
                                    <p className="loginPara">First Name <span >*</span></p>
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
                                </div>
                                <div className="form-group" id="usersignupform">
                                    <p className="loginPara">Last Name <span >*</span></p>
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
                                </div>

                                <div className="form-group" id="usersignupform">
                                    <p className="loginPara"> Email <span >*</span></p>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <h3 className="details py-2">Address Details</h3>
                                <div className="form-group" id="usersignupform">
                                    <p className="loginPara">Full Address <span >*</span></p>
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
                                </div>
                           
                                <h3 className="details py-2">Payment Details</h3>
                                <div className="form-group" id="usersignupform">
                                    <p className="loginPara">Cash on Card  (If Cash on card then please enter your card number below) <span >*</span></p>
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
                                </div>
                          

                                <div className="form-group" id="usersignupform">
                                <input type="checkbox" name="vehicle1" value="Bike"/>
  <label for="vehicle1" className="loginPara"> &nbsp; Cash on delivery <span >*</span></label><br></br>
                                </div>

                                <div className="response pb-2 pt-2 px-2 mb-2"><i class="fa fa-check fa-lg" aria-hidden="true"></i> &nbsp; You are signed up successfully!</div>
                                <div className="decline pb-2 pt-2 px-2 mb-2"><i class="fa fa-times fa-lg" aria-hidden="true"></i> &nbsp;Please fill all fields</div>
                                <img src="loader.gif" className="loader"></img>
                                <button type="submit" className="btn RegisterBtn" >Confirm</button>

                            </form>


                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-4 col-12 pt-lg-0 pt-md-0 pt-sm-0 pt-4' >
                        <p className=""><span className="maindetails">Order Summary </span></p>
                        <p className="cartQuantity pt-2">1 Item in Cart</p>
                        <div className="row">
                            <div className='col-lg-6 col-6'>
                                <img src="sadd.jpg" className="ordersumimg"></img>

                            </div>
                               <div className='col-lg-6 col-6'>

                            </div>

                        </div>
                    
                        </div>

                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
export default SignUp;
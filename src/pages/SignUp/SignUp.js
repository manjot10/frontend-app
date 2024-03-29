import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


import './SignUp.scss';

class SignUp extends Component {
  render(){
    return <div className="signin-container">
                <div >
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control" id="userName" placeholder="Uername"></input>
                        </div>
                        <div className="form-group">
                            <input type="password" class="form-control" id="password" placeholder="Password"></input>
                        </div>
                        <div className="form-group">
                            <input type="email" class="form-control" id="email" placeholder="Email"></input>
                        </div>
                        <div className="form-group">
                            <input type="text" class="form-control" id="referralCode" placeholder="Referral code"></input>
                        </div>
                        <div >{/*Bootstrap button style = signin-btn*/}
							<Button name="signIn" className="signin-btn">Sign Up</Button>
                        </div>
                    </form>
                </div>
                <div class="signup-options-container">
                    <NavLink to="/signIn" className="signup-link" >Sign In</NavLink>
                    <NavLink to="/forgotpassword" className="forgot-password-link">Forgot</NavLink>

                </div>
            </div>
  }
}

export default SignUp;

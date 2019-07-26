import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


import './ForgotPassword.scss';

class ForgotPassword extends Component {
  render(){
    return <div className="signin-container">
        <div >
          <form >
            <div className="form-group">
              <input type="email" className="form-control" id="email" placeholder="Email"></input>
            </div>
            <div >{/*Bootstrap button style = reset-btn*/}
				<Button name="signIn" className="reset-btn">Resset Password</Button>
            </div>
          </form>
        </div>
        <div className="signup-options-container">
          <NavLink to="/signIn" className="signup-link">Sign In</NavLink>
          <NavLink to="/signUp" className="forgot-password-link">Sign Up</NavLink>

        </div>
      </div>
  }
}

export default ForgotPassword;

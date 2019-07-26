import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchToken } from '../../actions/signInActions';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import './SignIn.scss';

class SignIn extends Component {
  render(){
    return (
		<div className="signin-container">
				<form>
					<div className="form-group">
						<input type="text" className="form-control" id="userName" placeholder="Username"></input>
					</div>
					<div className="form-group">
						<input type="password" className="form-control" id="password" placeholder="Password" ></input>
					</div>
					<div>{/*Bootstrap button style = signin-btn*/}
						<Button name="signIn" className="signin-btn">Login</Button>
					</div>
				</form>
				<Nav className="signup-options-container">
					<NavLink to="/signup" className="signup-link">Sign Up</NavLink>
					<NavLink to="/forgotpassword" className="forgot-password-link">Forgot</NavLink>
				</Nav>
		</div>
    );
  }
}

function mapStateToProps(state){
  return {
    UserStore: state.UserStore
  }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(
            {
                fetchToken,
            },
            dispatch
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignIn)

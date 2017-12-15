import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { userLogout } from '../../actions';

const Header = (props) => {
	let headerLinks;

	if (Object.keys(props.user).length === 0) {
		headerLinks = (
			<div>
	      <NavLink className="login" to='/login'>Login</NavLink>
	      <NavLink className="signup" to='/signup'>Sign-up</NavLink>
			</div>
		)
	} else {
		headerLinks = (
			<div>
		    <div className="login">Welcome, {props.user.userInfo.name}</div>
		    <NavLink className="signup" to='/' onClick={props.logoutUser} >Sign-Out</NavLink>
	    </div>
		)
	}

	return (
		<div className="header">
		  <h1>Movie Tracker</h1>
		  {headerLinks}
		</div>
	)
}

export const mapStateToProps = store => {
  return {
    user: store.user
  };
};

export const mapDispatchToProps = (dispatch) => {
	return {
		logoutUser: () => dispatch(userLogout()) 
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
// export default Header;
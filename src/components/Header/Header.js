import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { userLogout } from '../../actions';
import { getMovies } from '../../actions';

class Header extends Component {
	componentDidMount = () => {
    this.props.storeMovies()
  }

	noUserRender = () => {
		return (
			<div>
	      <NavLink className="login" to='/login'>Login</NavLink>
	      <NavLink className="signup" to='/signup'>Sign-up</NavLink>
			</div>
		)
	}

	userRender = () => {
		return (
			<div>
					<div className="login">Welcome, {this.props.user.userInfo.name}</div>
					<NavLink className="signup" to='/' onClick={this.props.logoutUser} >Sign-Out</NavLink>
				</div>
		)
	}

	render() {
		var headerLinks = determainUser(this.props.user)  ? this.noUserRender() 
																											: this.userRender()
		return (
			<div className="header">
				<h1>Movie Tracker</h1>
				{headerLinks}
			</div>
		)
	}
}

export const mapStateToProps = store => {
  return {
    user: store.user
  };
};

export const mapDispatchToProps = (dispatch) => {
	return {
		logoutUser: () => dispatch(userLogout()),
		storeMovies: () => dispatch(getMovies())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

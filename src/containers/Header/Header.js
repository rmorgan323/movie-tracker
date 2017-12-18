import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import determineUser from '../../helper/determineUser/determineUser';
import { userLogout, getMovies } from '../../actions';
import PropTypes from 'prop-types';
import './Header.css';

export class Header extends Component {
  componentDidMount = () => {
    this.props.storeMovies();
  };

  noUserRender = () => {
    return (
      <div className="header-box">
        <NavLink className="login nav-link" to="/login">
          Login
        </NavLink>

        <NavLink className="signup nav-link" to="/signup">
          Sign-up
        </NavLink>
      </div>
    );
  };

  userRender = () => {
    return (
      <div className="header-box">
        <div className="login login-message">
          Welcome, {this.props.user.userInfo.name}
        </div>

        <NavLink to="/favorites">
          <button>FAVORITES</button>
        </NavLink>

        <NavLink
          className="signup nav-link"
          to="/"
          onClick={this.props.logoutUser}
        >
          Sign-Out
        </NavLink>
      </div>
    );
  };

  render() {
    var headerLinks = determineUser(this.props.user)
      ? this.userRender()
      : this.noUserRender();

    return (
      <div className="header">
        <NavLink to="/">
          <h1>
            <span>MOVIE</span>TRACKER
          </h1>
        </NavLink>

        {headerLinks}
      </div>
    );
  }
}

export const mapStateToProps = store => {
  return {
    user: store.user
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => dispatch(userLogout()),
    storeMovies: () => dispatch(getMovies())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

Header.propTypes = {
  storeMovies: PropTypes.func,
  user: PropTypes.object,
  logoutUser: PropTypes.func
};

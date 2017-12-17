import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions';
import './ControlledForm.css';

class ControlledForm extends Component {
  constructor() {
    super();
    this.state = {
      users: {
        name: '',
        password: '',
        email: ''
      },
      errorMessage: ''
    };
  }

  handleInputChange = event => {
    let value = event.target.value;
    let property = event.target.className;

    this.setState({
      users: { ...this.state.users, [property]: value }
    });
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.user === 'error-signup') {
      this.setState({
        errorMessage:
          'That email is already registered. Please use another email or try logging in.'
      });

    } else if (nextProps.user === 'error-login') {
      this.setState({
        errorMessage:
          'That email and password do not match. Try again or create an account.'
      });

    } else if (nextProps.user.signedIn === true) {
      this.props.history.push('/');
      this.props.getUserFavorites(nextProps.user.userInfo.id);
    }
  }

  handleSubmit = async event => {
    event.preventDefault();
    const endPoint = this.props.location.pathname;

    if (endPoint === '/login') {
      await this.props.checkUsers(this.state.users);
    } else if (endPoint === '/signup') {
      await this.props.getUsers(this.state.users);
    }
  };

  render() {
    let endPoint = this.props.location.pathname;
    return (
      <div className="form-component">
        <div className="form-button-container">
          <div className="login-buttons">
            <NavLink className="login-button form-button" to="/login">
              Login
            </NavLink>
            <NavLink className="login-button form-button" to="/signup">
              Sign-up
            </NavLink>
          </div>

          <form onSubmit={this.handleSubmit}>
            {endPoint === '/signup' && (
              <input
                className="name"
                type="text"
                placeholder="Name"
                onChange={this.handleInputChange}
                value={this.state.users.name}
              />
            )}

            <input
              className="email"
              type="text"
              placeholder="Email"
              onChange={this.handleInputChange}
              value={this.state.users.email}
            />

            <input
              className="password"
              type="password"
              placeholder="Password"
              onChange={this.handleInputChange}
              value={this.state.users.password}
            />

            <button
              type="submit"
              className="submit-button"
              onClick={this.handleSubmit}
            >
              Submit
            </button>
          </form>

          <div className="error-message">{this.state.errorMessage}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    user: store.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUsers: user => {
      dispatch(actions.fetchUsers(user));
    },
    checkUsers: user => {
      dispatch(actions.checkForUser(user));
    },
    getUserFavorites: id => {
      dispatch(actions.checkUserFavorites(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ControlledForm);

ControlledForm.propTypes = {
  user: PropTypes.object,
  history: PropTypes.object,
  getUserFavorites: PropTypes.func,
  location: PropTypes.string,
  checkUsers: PropTypes.func,
  getUsers: PropTypes.func
};

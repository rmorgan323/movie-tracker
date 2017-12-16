import React, { Component } from 'react';
import { userSignIn } from '../../helper/userSignIn/userSignIn';
import * as actions from '../../actions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './ControlledForm.css'

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
      }
    };

    handleInputChange = (e) => {
        let value = e.target.value;
        let property = e.target.className

        this.setState({
            users:{...this.state.users, [property]: value}
        })
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.user === 'error-signup') {
            this.setState({errorMessage: 'User email is being used. Please use a new email or login if you already have an account'})
        } else if (nextProps.user === 'error-login') {
           this.setState({errorMessage: 'email and password do not match please try again or create an account'})
        } else if (nextProps.user.signedIn === true) {
            this.props.history.push('/')
            this.props.getUserFavorites(nextProps.user.userInfo.id)
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const endPoint = this.props.location.pathname

        if (endPoint === '/login') {
            await this.props.checkUsers(this.state.users);
        } else if (endPoint === '/signup') {
            await this.props.getUsers(this.state.users);
        }
    }

    navRedirect = (e, category) => {
      console.log(category)
      e.preventDefault();
      this.props.history.push(`${category}`);
    }

    render() {
        let endPoint = this.props.location.pathname
        return (
            <div>
            <div className = "login-buttons">
            <button 
              onClick={(event) => this.navRedirect(event, 'login')}
              className = 'login-button redirect-button'> Login </button>
            <button
              onClick = {(event) => this.navRedirect(event, 'signup')}
              className = 'signup-button redirect-button'> Sign-up </button>
             
             </div>   
                <form onSubmit={this.handleSubmit}>
                    {endPoint === '/signup' && 
                    <input className='name' 
                           type='text' 
                           placeholder='Name' 
                           onChange={this.handleInputChange} 
                           value={this.state.users.name} />}

                    <input className='email' 
                           type='text' 
                           placeholder='Email' 
                           onChange={this.handleInputChange} 
                           value={this.state.users.email} />

                    <input className='password' 
                           type='password' 
                           placeholder='Password' 
                           onChange={this.handleInputChange} 
                           value={this.state.users.password}/>

                    <button type='submit'
                            className = "submit-button" 
                            onClick={this.handleSubmit} >Submit</button>
                </form>
                <div className = "error-message">
                  {this.state.errorMessage}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
  return {
    user: store.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: (user) => {
      dispatch(actions.fetchUsers(user))
    },
    checkUsers: (user) => {
      dispatch(actions.checkForUser(user))
    },
    getUserFavorites: (id) => {
      dispatch(actions.getUserFavorites(id))
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ControlledForm))
import React, { Component } from 'react';
import { addNewUser } from '../helper/addNewUser/addNewUser';
import { addUser } from '../../actions/index.js'
import { userSignIn } from '../helper/userSignIn/userSignIn';
import * as actions from '../../actions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


class ControlledForm extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            password: '',
            email: ''
        }
    };

    handleInputChange = (e) => {
        let value = e.target.value;
        let property = e.target.className

        this.setState({
            [property]: value
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const endPoint = this.props.location.pathname
        // debugger;
        if(endPoint === '/signup') {
            const callback = this.props.getUsers(this.state);
            console.log(callback)   
            this.props.user.status === 200 ? this.props.createUser(this.state) : console.log('500')
            console.log(this.props.user)
        } else {
            const callback = await userSignIn(this.state)
            callback.status === 200 ? this.props.history.push('/') : console.log('User does not match')
        }
    }

    // handleSubmit = async (e) => {
    //     e.preventDefault();

    // }

    render() {
        let endPoint = this.props.location.pathname

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {endPoint === '/signup' && <input className='name' type='text' placeholder='Name' onChange={this.handleInputChange} value={this.state.name}/>}
                    <input className='email' type='text' placeholder='Email' onChange={this.handleInputChange} value={this.state.email}/>
                    <input className='password' type='password' placeholder='Password' onChange={this.handleInputChange} value={this.state.password}/>
                    <button type='submit' onClick={this.handleSubmit}>Submit</button>
                    </form>
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
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ControlledForm))

// export default ControlledForm;
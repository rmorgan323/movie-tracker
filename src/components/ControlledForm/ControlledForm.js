import React, { Component } from 'react';
import { addNewUser } from '../helper/addNewUser/addNewUser';
import { userSignIn } from '../helper/userSignIn/userSignIn';

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

        if(endPoint === '/signup') {
            addNewUser(this.state);
        } else {
            const callback = await userSignIn(this.state)
            callback.status === 200 ? this.props.history.push('/') : console.log('User does not match')
        }
    }

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

export default ControlledForm;
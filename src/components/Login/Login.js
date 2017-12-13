import React, { Component } from 'react';
import { backEndApiPost } from '../helper/backEndApiPost/backEndApiPost';

class Login extends Component {
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

    handleSubmit = (e) => {
        e.preventDefault();
        backEndApiPost(this.state)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input className='name' type='text' placeholder='Username' onChange={this.handleInputChange} value={this.state.name}/>
                    <input className='password' type='password' placeholder='Password' onChange={this.handleInputChange} value={this.state.password}/>
                    <input className='email' type='text' placeholder='Email' onChange={this.handleInputChange} value={this.state.email}/>
                    <button type='submit' onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        )
    }

}

export default Login;
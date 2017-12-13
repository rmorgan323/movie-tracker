import React, { Component } from 'react';
import { backEndApiPost } from '../helper/backEndApiPost/backEndApiPost';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            favorites: []
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
        //this.state
        //send to fetch post
        console.log('Submit')
        backEndApiPost(this.state)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input className='username' type='text' placeholder='Username' onChange={this.handleInputChange} value={this.state.username}/>
                    <input className='password' type='password' placeholder='Password' onChange={this.handleInputChange} value={this.state.password}/>
                    <button type='submit' onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        )
    }

}

export default Login;
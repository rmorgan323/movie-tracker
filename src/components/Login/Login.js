import React, { Component } from 'react';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    };

    handleInputChange = (e) => {
        let value = e.target.value;
        let property = e.target.className

        this.setState({
            [property]: value
        })
    }

    render() {
        return (
            <div>
                <form>
                    <input className='username' type='text' placeholder='Username' onChange={this.handleInputChange} value={this.state.username}/>
                    <input className='password' type='password' placeholder='Password' onChange={this.handleInputChange} value={this.state.password}/>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }

}

export default Login;
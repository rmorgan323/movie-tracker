import React, { Component } from 'react';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    };

    render() {
        return (
            <div>
                Login Page!
            </div>
        )
    }

}

export default Login;
// view 2 
    // has a button that returns the user to view 1

import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';


class Login extends Component {
    state = {
        redirect: false
    }

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to ='/'/>
        }
    }

    render() {
        return (
            <div>
                {this.renderRedirect()}
                <button onClick={this.setRedirect}>Login</button>
            </div>
        );
    }
}

export default Login; 
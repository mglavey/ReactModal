// view 1
// will show a modal after 10 seconds
    // inside modal will be an 'im still here button'
    // if this isn't clicked in 5 seconds, user redirected to view 2
// if user dismisses the modal, it should pop up again after 10 seconds

import React, { Component } from 'react';
import './home.css'


class Home extends Component {
    render() {
        return (
            <div>
                <p>Home Page</p>
            </div>
        );
    }
}

export default Home;
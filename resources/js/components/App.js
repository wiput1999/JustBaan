import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Example from './Example'

class App extends Component {
    render() {
        return (
            <Example></Example>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));


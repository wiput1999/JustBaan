import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Example from './Example'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Example} />
                    <Route path='/test' component={Example} />
                </Switch>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

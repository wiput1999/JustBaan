import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "antd/dist/antd.css";

import Home from "./pages/Home/index";
import ProductDetail from "./pages/Home/detail";
import Content from "./pages/Content/index";
import Search from "./pages/SearchResult/index";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/content" component={Content} />
                    <Route exact path="/detail" component={ProductDetail} />
                    <Route exact path="/search" component={Search} />
                </Switch>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));

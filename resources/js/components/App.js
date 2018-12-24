import React, { Component } from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";
import "antd/dist/antd.css";

import Home from "./pages/Home/index";
import ProductDetail from "./pages/Home/detail";
import Content from "./pages/Content/index";
import ContentDetail from "./pages/ContentDetail/index";
import Search from "./pages/SearchResult/index";

class App extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/content/:id" component={ContentDetail} />
                    <Route path="/content" component={Content} />
                    <Route exact path="/detail" component={ProductDetail} />
                    <Route exact path="/search" component={Search} />
                </Switch>
            </HashRouter>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));

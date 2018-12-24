import React, { Component } from "react";

import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

class Home extends Component {
    render() {
        return (
            <>
                <Header />
                <Content title="Christmas Season" />
                <Content title="Promotion" />
                <Footer />
            </>
        );
    }
}

export default Home;

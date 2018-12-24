import React, { Component } from "react";
import styled from "styled-components";

import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

class Home extends Component {
    render() {
        return (
            <>
                <Header />
                <Content title="Christmas Season" />
                <Footer />
            </>
        );
    }
}

export default Home;

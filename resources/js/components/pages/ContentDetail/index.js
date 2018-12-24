import React, { Component } from "react";
import styled from "styled-components";

import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

class ContentPage extends Component {
    render() {
        return (
            <>
                <Header />
                <Content params={this.props.match.params} />
                <Footer />
            </>
        );
    }
}

export default ContentPage;

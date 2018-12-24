import React, { Component } from "react";
import { Button } from "antd";
import styled from "styled-components";
import image from "../../../../images/content-banner.png";

const Banner = styled.div`
    height: 180;
    width: 200
    background-image: url(${image});
`;

class Index extends Component {
    render() {
        return <Banner />;
    }
}

export default Index;

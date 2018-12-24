import React, { Component } from "react";
import { Row, Col } from "antd";
import styled from "styled-components";

import Title from "./Title";
import Box from "./Box";

import CoverImage from "../../../../images/sample.jpg";

const ContentRow = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    align-content: center;
    grid-gap: 1em;
    margin: auto 1em;

    @media (max-width: 900px) {
        grid-template-columns: auto auto;
    }

    @media (max-width: 600px) {
        grid-template-columns: auto;
    }
`;
class Content extends Component {
    render() {
        return (
            <div>
                <Title>Sofabed</Title>
                <ContentRow>
                    <Box
                        photo={CoverImage}
                        name="Sofabed"
                        price={5000}
                        color={["black", "white", "yellow", "green", "red"]}
                        brand="IKEA"
                        ad={false}
                        reccomend={true}
                    />
                    <Box
                        photo={CoverImage}
                        name="Sofabed"
                        price={5000}
                        color={["black", "white"]}
                        brand="IKEA"
                        ad={false}
                        reccomend={true}
                    />
                    <Box
                        photo={CoverImage}
                        name="Sofabed"
                        price={5000}
                        color={["black", "orange"]}
                        brand="IKEA"
                        ad={false}
                        reccomend={false}
                    />
                </ContentRow>
            </div>
        );
    }
}

export default Content;

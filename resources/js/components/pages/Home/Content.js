import React from "react";
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

const Content = ({ title }) => {
    return (
        <>
            <Title>{title}</Title>
            <ContentRow>
                <Box
                    photo={CoverImage}
                    name="BRUSALI บรูสซาลีโต๊ะเข้ามุม"
                    price={3290}
                    color={["black", "white"]}
                    brand="IKEA"
                    ad={false}
                    reccomend={true}
                />
                <Box
                    photo={CoverImage}
                    name="BRUSALI บรูสซาลีโต๊ะเข้ามุม"
                    price={3290}
                    color={["black", "white"]}
                    brand="IKEA"
                    ad={false}
                    reccomend={true}
                />
                <Box
                    photo={CoverImage}
                    name="BRUSALI บรูสซาลีโต๊ะเข้ามุม"
                    price={3290}
                    color={["black", "white"]}
                    brand="IKEA"
                    ad={false}
                    reccomend={false}
                />
            </ContentRow>
        </>
    );
};

export default Content;

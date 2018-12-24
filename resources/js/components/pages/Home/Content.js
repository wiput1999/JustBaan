import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
                <Link to="/detail">
                    <Box
                        photo={CoverImage}
                        name="Melona เตียง 3.5 ฟุต"
                        price={3290}
                        color={["red", "white"]}
                        brand="KONCEPT FURNITURE"
                        ad={false}
                        reccomend={true}
                    />
                </Link>
                <Link to="/detail">
                    <Box
                        photo={CoverImage}
                        name="BRUSALI บรูสซาลีโต๊ะเข้ามุม"
                        price={13500}
                        color={["black", "white"]}
                        brand="Officemate"
                        ad={false}
                        reccomend={true}
                    />
                </Link>
                <Link to="/detail">
                    <Box
                        photo={CoverImage}
                        name="โต๊ะกลาง Luxury"
                        price={9500}
                        color={["black", "orange", "cyan"]}
                        brand="Norhor Design"
                        ad={false}
                        reccomend={false}
                    />
                </Link>
            </ContentRow>
        </>
    );
};

export default Content;

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Title from "./Title";
import Box from "./Box";

import Article1 from "../../../../images/article1.jpg";
import Article2 from "../../../../images/article2.jpg";
import Article3 from "../../../../images/article3.jpg";
import Gallery1 from "../../../../images/gallery1.jpg";
import Gallery2 from "../../../../images/gallery2.png";
import Gallery3 from "../../../../images/gallery3.png";
import Gallery4 from "../../../../images/gallery4.png";
import Gallery5 from "../../../../images/gallery5.png";
import Gallery6 from "../../../../images/gallery6.png";

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

const CenterTitle = styled(Title)`
    width: 100%;
    text-align: center;
`;

const Content = () => {
    return (
        <>
            <CenterTitle>Article</CenterTitle>
            <Title>Trending</Title>
            <ContentRow>
                <Link to="/content/1">
                    <Box
                        photo={Article1}
                        title="จัดห้องฉลองคริสต์มาสง่ายๆ สไตล์ IKEA"
                    />
                </Link>

                <Box
                    photo={Article2}
                    title="รีวิว : จัดบ้านหวานๆสไตล์เจ้าหญิง
                    ด้วยงบไม่เกินหนึ่งพันบาท"
                />
            </ContentRow>
            <Title>Popular</Title>
            <ContentRow>
                <Box photo={Article3} title="5 ITEM เสริมดวงประจำปี 2019" />
            </ContentRow>
            <CenterTitle>Gallery</CenterTitle>
            <ContentRow>
                <Box photo={Gallery1} />
                <Box photo={Gallery2} />
                <Box photo={Gallery3} />
                <Box photo={Gallery4} />
                <Box photo={Gallery5} />
                <Box photo={Gallery6} />
            </ContentRow>
        </>
    );
};

export default Content;

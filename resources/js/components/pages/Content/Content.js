import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Title from "./Title";
import Box from "./Box";

import Article1 from "../../../../images/article1.jpg";
import Article2 from "../../../../images/article2.jpg";

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
    max-width: 400px;
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
                <Box
                    photo={Article1}
                    title="จัดห้องฉลองคริสต์มาสง่ายๆ สไตล์ IKEA"
                />
                <Box
                    photo={Article1}
                    title="จัดห้องฉลองคริสต์มาสง่ายๆ สไตล์ IKEA"
                />
            </ContentRow>
        </>
    );
};

export default Content;

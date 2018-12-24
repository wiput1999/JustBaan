import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Title from "./Title";
import Box from "./Box";

import CoverImage1 from "../../../../images/sample1.jpg";
import CoverImage2 from "../../../../images/sample2.jpg";
import CoverImage3 from "../../../../images/sample3.jpg";
import CoverImage4 from "../../../../images/sample4.jpg";
import CoverImage5 from "../../../../images/sample5.jpg";
import CoverImage6 from "../../../../images/sample6.jpg";

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
    switch (title) {
        case "Christmas Season":
            return (
                <>
                    <Title>{title}</Title>
                    <ContentRow>
                        <Link to="/detail">
                            <Box
                                photo={CoverImage1}
                                name="BRUSALI บรูสซาลีโต๊ะเข้ามุม"
                                price={3290}
                                color={["black"]}
                                brand="KONCEPT FURNITURE"
                                ad={false}
                                reccomend={true}
                            />
                        </Link>
                        <Link to="/detail">
                            <Box
                                photo={CoverImage2}
                                name="โต๊ะกลาง Luxury"
                                price={9500}
                                color={["black", "cyan", "orange"]}
                                brand="Norhor Design"
                                ad={true}
                                reccomend={false}
                            />
                        </Link>
                        <Link to="/detail">
                            <Box
                                photo={CoverImage3}
                                name="โซฟาเข้ามุม 3 ที่นั่ง+สตูล"
                                price={13500}
                                color={["black", "yellow"]}
                                brand="Officemate"
                                ad={false}
                                reccomend={false}
                            />
                        </Link>
                    </ContentRow>
                </>
            );
            break;
        case "Promotion":
            return (
                <>
                    <Title>{title}</Title>
                    <ContentRow>
                        <Link to="/detail">
                            <Box
                                photo={CoverImage4}
                                name="DEVIL เก้าอี้โมเดิร์นขาไม้"
                                price={1690}
                                color={["red", "cyan"]}
                                brand="Asfurniturehome "
                                ad={false}
                                reccomend={true}
                            />
                        </Link>
                        <Link to="/detail">
                            <Box
                                photo={CoverImage5}
                                name="WINNER FASHION BOX"
                                price={1190}
                                color={["red"]}
                                brand="Index"
                                ad={true}
                                reccomend={false}
                            />
                        </Link>
                        <Link to="/detail">
                            <Box
                                photo={CoverImage6}
                                name="ที่นอน Dunlopillo"
                                price={15210}
                                color={["black"]}
                                brand="SB Design Square"
                                ad={false}
                                reccomend={false}
                            />
                        </Link>
                    </ContentRow>
                </>
            );
            break;
    }
};

export default Content;

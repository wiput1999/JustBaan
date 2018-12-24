import React from "react";
import { Input } from "antd";
import { Redirect, Link } from "react-router-dom";
import styled from "styled-components";

import Feature1 from "../../../../images/feature1.jpg";
import Feature2 from "../../../../images/feature2.jpg";
import Feature3 from "../../../../images/feature3.jpg";
import CoverImage from "../../../../images/header.jpg";
import CoverLogo from "../../../../images/logo.png";

const Search = Input.Search;

const TopWrapper = styled.div`
    height: 40vh;
    background-image: url(${CoverImage});
    background-size: cover;
`;

const SearchBar = styled.div`
    width: 50%;
    height: 60px;
    margin: -30px auto;
    text-align: center;
    background-color: transparent;
`;

const SearchBox = styled(Search)`
    & > input,
    button {
        font-family: "Bai Jamjuree", sans-serif;
        background-color: #d2c9c0;
        border: none;
        text-shadow: none;
        box-shadow: none;
        outline: none;
        color: #3b5042;
        height: 60px;
        font-size: 1.5em;
    }

    & > input {
        padding-left: 46px;
    }

    & > input::placeholder {
        color: #3b5042;
    }
`;

const FeaturedWrapper = styled.div`
    height: 50vh;
    background-color: #ddd;
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: center;
    align-items: center;
`;

const Logo = styled.div`
    background-color: #fff;
    width: 150px;
    height: 150px;
    margin-left: auto;
    margin-right: auto;
`;

const Image = styled.img`
    padding: 10px;
    width: 100%;
    height: auto;
`;

const HeaderQuoteWrapper = styled.div`
    position: absolute;
    width: 100%;
    text-align: center;
    top: 160px;
    margin: 0 auto;
`;

const HeaderQuoteText = styled.div`
    width: 50%;
    margin: 0 auto;
    font-size: 2em;
    font-family: "Bai Jamjuree", sans-serif;
    padding: 1.5em;
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
`;

const Text = styled.div`
    width: 100%;
    font-family: "Bai Jamjuree", sans-serif;
    color: #000;
    font-size: 1.5em;
    text-decoration: underline;
    text-align: center;
    margin-top: -3em;
`;

const Header = () => {
    return (
        <>
            <TopWrapper>
                <Link to="/">
                    <Logo>
                        <Image src={CoverLogo} />
                    </Logo>
                </Link>
                <HeaderQuoteWrapper>
                    <HeaderQuoteText>
                        เรื่องบ้านๆ จัดการที่เรา
                        การแต่งบ้านของคุณจะไม่ใช่เรื่องยากอีกต่อไป
                    </HeaderQuoteText>
                </HeaderQuoteWrapper>
            </TopWrapper>
            <SearchBar>
                <SearchBox
                    size={10}
                    placeholder="ค้นหาเฟอร์นิเจอร์"
                    onSearch={value => <Redirect to="/search" />}
                    enterButton
                    size="large"
                />
            </SearchBar>
            <FeaturedWrapper>
                <Image src={Feature1} />
                <Image src={Feature2} />
                <Image src={Feature3} />
            </FeaturedWrapper>
            <Link to="/content">
                <Text>รู้จักสไตล์ของตัวเองมากขึ้นผ่านบทความ</Text>
            </Link>
        </>
    );
};

export default Header;

import React from "react";
import { Input } from "antd";
import styled from "styled-components";

import Feature1 from "../../../../images/feature1.jpg";
import Feature2 from "../../../../images/feature2.jpg";
import Feature3 from "../../../../images/feature3.jpg";
import CoverImage from "../../../../images/header.jpg";

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

    /* line-height: 60px;
    padding: 0 1em;
    font-size: 2em;
    border: none;
    outline: none;
    background: #d2c9c0; */
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
    width: 200px;
    height: 200px;
    margin-left: auto;
    margin-right: auto;
`;

const Image = styled.img`
    padding: 10px;
    width: 100%;
    height: auto;
`;

const Header = () => {
    return (
        <>
            <TopWrapper>
                <Logo />
            </TopWrapper>
            <SearchBar>
                <SearchBox
                    size={10}
                    placeholder="ค้นหาเฟอร์นิเจอร์"
                    onSearch={value => console.log(value)}
                    enterButton
                    size="large"
                />
            </SearchBar>
            <FeaturedWrapper>
                <Image src={Feature1} />
                <Image src={Feature2} />
                <Image src={Feature3} />
            </FeaturedWrapper>
        </>
    );
};

export default Header;

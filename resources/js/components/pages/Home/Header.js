import React from "react";
import styled from "styled-components";

const TopWrapper = styled.div`
    height: 40vh;
    background-color: #3b5042;
    position: relative;
`;

const SearchBar = styled.div`
    width: 100%;
    height: 60px;
    bottom: -30px;
    position: absolute;
    text-align: center;
    background-color: #eee;
    z-index: 5;
`;

const FeaturedWrapper = styled.div`
    height: 50vh;
    background-color: #ddd;
    position: relative;
`;

const Logo = styled.div`
    background-color: #fff;
    width: 200px;
    height: 200px;
    margin-left: auto;
    margin-right: auto;
`;

const Header = () => {
    return (
        <>
            <TopWrapper>
                <Logo />
                <SearchBar />
            </TopWrapper>
            <FeaturedWrapper />
        </>
    );
};

export default Header;

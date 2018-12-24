import React from "react";

import styled from "styled-components";

import CoverImage from "../../../../images/header.jpg";

const TopWrapper = styled.div`
    height: 40vh;
    background-image: url(${CoverImage});
    background-size: cover;
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
            </TopWrapper>
        </>
    );
};

export default Header;

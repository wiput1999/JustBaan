import React from "react";

import styled from "styled-components";

import CoverImage from "../../../../images/header.jpg";
import CoverLogo from "../../../../images/logo.png";

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

const Image = styled.img`
    padding: 10px;
    width: 100%;
    height: auto;
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
            </TopWrapper>
        </>
    );
};

export default Header;

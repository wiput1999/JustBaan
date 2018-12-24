import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
    color: #000;
    font-family: "Bai Jamjuree", sans-serif;
    width: 100%;
    background-color: #d2c9c0;
    margin-top: 2em;
    text-align: center;
    font-size: 2em;
    height: 80px;
    justify-content: center;
    align-items: center;
    display: grid;
`;

const Text = styled.div`
    color: #000;
`;

const Footer = () => {
    return (
        <Wrapper>
            <Link to="/content">
                <Text>รู้จักสไตล์ของตัวเองมากขึ้นผ่านบทความ</Text>
            </Link>
        </Wrapper>
    );
};

export default Footer;

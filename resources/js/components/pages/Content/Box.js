import React from "react";
import styled from "styled-components";

const BoxWrapper = styled.div`
    width: 100%;
    height: 480px;
    font-family: "Bai Jamjuree", sans-serif;
    background-image: url(${props => props.image});
`;

const BoxCover = styled.div`
    position: relative;
    height: 300px;
    background-repeat: no-repeat;
    background-size: cover;
`;

const BoxDetail = styled.div`
    background-color: #bbbbbb;
    position: absolute;
    font-size: 1.3em;
    padding: 0.5em;
`;

const Box = ({ title, photo }) => {
    return (
        <>
            <BoxWrapper image={photo}>
                <BoxDetail>{title}</BoxDetail>
            </BoxWrapper>
        </>
    );
};

export default Box;

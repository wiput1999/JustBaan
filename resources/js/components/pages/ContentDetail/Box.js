import React from "react";
import styled from "styled-components";

const BoxWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 480px;
    font-family: "Bai Jamjuree", sans-serif;
    background-image: url(${props => props.image});
`;

const BoxDetail = styled.div`
    color: #fff;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    position: absolute;
    font-size: 1.3em;
    padding: 1em;
    bottom: 0;
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

import React from "react";
import styled from "styled-components";

import HeartBlank from "../../../../images/heart.svg";
import HeartFill from "../../../../images/heart_fill.svg";

const BoxWrapper = styled.div`
    width: 100%;
    font-family: "Bai Jamjuree", sans-serif;
`;

const BoxCover = styled.div`
    position: relative;
    height: 300px;
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-size: cover;
`;

const BoxDetail = styled.div`
    color: #000;
    background-color: #bbbbbb;
    position: relative;
    font-size: 1.3em;
    padding: 0.5em;
`;

const BoxReccomend = styled.div`
    color: #000;
    background-color: #ffe24d;
    position: absolute;
    right: 10px;
    bottom: 0;
    padding: 0 7.5px;
    font-size: 0.9em;
`;

const Heart = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
`;

const Image = styled.img`
    width: 30px;
    height: 30px;
`;

const Circle = styled.div`
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
    margin: 0 0.3em;
    display: inline-block;
    background-color: ${props => props.color};
`;

const Box = ({
    photo,
    price,
    color,
    brand,
    name,
    heart,
    ad = false,
    reccomend = false
}) => {
    return (
        <>
            <BoxWrapper>
                <BoxCover image={photo}>
                    {reccomend && <BoxReccomend>Reccomend</BoxReccomend>}
                    {heart ? (
                        <Heart>
                            <Image src={HeartFill} />
                        </Heart>
                    ) : (
                        <Heart>
                            <Image src={HeartBlank} />
                        </Heart>
                    )}
                </BoxCover>
                <BoxDetail>
                    <div>Name {name}</div>
                    <div>Price {price} Baht</div>
                    <div>
                        Color{" "}
                        {color.map(c => (
                            <Circle color={c} />
                        ))}
                    </div>
                    <div>Brand {brand}</div>
                </BoxDetail>
            </BoxWrapper>
        </>
    );
};

export default Box;

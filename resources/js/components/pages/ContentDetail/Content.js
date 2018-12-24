import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Title from "./Title";
import Box from "./Box";

import CoverImage from "../../../../images/sample.jpg";
import Article1 from "../../../../images/article1.jpg";
import Article11 from "../../../../images/article11.jpg";
import Article2 from "../../../../images/article2.jpg";
import Article3 from "../../../../images/article3.jpg";

import ProductBox from "../Home/Box";
import ProductTitle from "../Home/Title";

const ProductContentRow = styled.div`
    font-family: "Bai Jamjuree", sans-serif;
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

const ContentRow = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    font-family: "Bai Jamjuree", sans-serif;
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-content: center;
    grid-gap: 1em;
    padding: 0 3em;
`;

const Image = styled.img`
    width: 100%;
    height: auto;
`;

const ContentField = styled.p`
    max-width: 1200px;
    text-indent: 2em;
    padding: 0.5em;
    color: #000;
    font-size: 1.2em;
`;

class Content extends Component {
    componentDidMount() {
        console.log(this.props.match);
    }

    render() {
        const { title, match } = this.props;
        return (
            <>
                <Title>{match}จัดห้องฉลองคริสต์มาสง่ายๆ สไตล์ IKEA</Title>

                <ContentRow>
                    <div>
                        <Image src={Article11} />
                        <ContentField>
                            อีกไม่นานแล้วที่จะถึงค่ำคืนแห่งวันคริสต์มาสต่างคนก็ต่างลางานกลับไปใช้ชีวิตในวันหยุดร่วมกับญาติมิตรหรือครอบครัวกันเป็นธรรมดา
                            กลับไปบ้านทั้งทีในช่วงเทศกาลแบบนี้ก็ต้องหวังที่จะได้สัมผัสกับบรรยากาศคริสต์มาสสุดสมจริงกันอยู่แน่ๆ
                            แต่ใครกันล่ะ
                            ที่จะสามารถตกแต่งบรรยายกาศนั้นได้ตรงใจเท่ากับตัวของเราเอง
                            ห้องของ IKEA เองก็ได้มีการจัดคริสต์มาสต์ตามสไตล์ของ
                            IKEA อีกด้วยนะ!
                            จะเป็นยังไงก็ตามกันเข้ามาดูได้เลยมาเริ่มกันที่ทางเข้า
                            ห้องแห่งนี้เป็นห้องขนาด 30 ตารางเมตร
                            เมื่อเราเปิดประตูเข้ามาเราจะเจอกับชั้นวางของสีขาวยาว
                            IKEA LACK
                            ซึ่งประดับประดาไปด้วยของตกแต่งมากมายแขวนลงมาทางปลายแต่ละชั้น
                            สีขาวของชั้นวางของทำให้บรรดาของตกแต่งทั้งบอลคริสต์มาสสีแดงที่ตัดด้วยกระดาษเขียวได้อย่างเด่นชัด
                            อุปกรณ์ตกแต่งบ้านที่สามารถนำมาจัดวางเพิ่มเติมได้จะเป็นของที่มีโทนสีเขียวและแดงตามบรรยากาศของเทศกาลคริสต์มาส
                            การได้เอนหลังนั่งพักลงบนโซฟาตัวเล็ก IKEA GRÖNLID
                            ดื่มด่ำไปกับบรรยากาศวันคริสต์มาสต์เองก็เป็นเรื่องที่ทำให้มีความสุขได้ไม่น้อย
                            สามารถที่จะนั่งล้อมวงเล่นพูดคุยเรื่อยเปื่อยไปกับครอบครัว
                            เก็บเกี่ยวช่วงเวลาแห่งความสุขร่วมกันได้ตลอดทั้งค่ำคืน
                        </ContentField>
                    </div>
                    <div>
                        <Box
                            photo={Article1}
                            title="จัดห้องฉลองคริสต์มาสง่ายๆ สไตล์ Index"
                        />
                        <br />
                        <Box
                            photo={Article3}
                            title="5 ITEM เสริมดวงประจำปี 2019"
                        />
                    </div>
                </ContentRow>

                <ProductTitle>
                    เฟอร์นิเจอร์ที่เกี่ยวข้องกับคริสมาสต์
                </ProductTitle>
                <ProductContentRow>
                    <ProductBox
                        photo={CoverImage}
                        name="BRUSALI บรูสซาลีโต๊ะเข้ามุม"
                        price={3290}
                        color={["black", "white"]}
                        brand="IKEA"
                        ad={false}
                        reccomend={true}
                    />
                    <ProductBox
                        photo={CoverImage}
                        name="BRUSALI บรูสซาลีโต๊ะเข้ามุม"
                        price={3290}
                        color={["black", "white"]}
                        brand="IKEA"
                        ad={false}
                        reccomend={true}
                    />
                    <ProductBox
                        photo={CoverImage}
                        name="BRUSALI บรูสซาลีโต๊ะเข้ามุม"
                        price={3290}
                        color={["black", "orange"]}
                        brand="IKEA"
                        ad={false}
                        reccomend={false}
                    />
                </ProductContentRow>
            </>
        );
    }
}

export default Content;

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
    componentDidMount() {}

    render() {
        const {
            title,
            params: { id }
        } = this.props;

        let data;
        switch (parseInt(id)) {
            case 1:
                data = (
                    <>
                        <Title>จัดห้องฉลองคริสต์มาสง่ายๆ สไตล์ IKEA</Title>

                        <ContentRow>
                            <div>
                                <Image src={Article11} />
                                <ContentField>
                                    อีกไม่นานแล้วที่จะถึงค่ำคืนแห่งวันคริสต์มาสต่างคนก็ต่างลางานกลับไปใช้ชีวิตในวันหยุด
                                    ร่วมกับญาติมิตรหรือครอบครัวกันเป็นธรรมดา
                                    กลับไปบ้านทั้งทีในช่วงเทศกาลแบบนี้ก็ต้องหวังที่จะได้สัมผัสกับบรรยากาศคริสต์มาสสุดสมจริงกันอยู่แน่ๆ
                                    แต่ใครกันล่ะ
                                    ที่จะสามารถตกแต่งบรรยากาศนั้นได้ตรงใจเท่ากับตัวของเราเอง
                                    ห้องของ IKEA
                                    เองก็ได้มีการจัดคริสต์มาสตามสไตล์ของ IKEA
                                    อีกด้วยนะ! จะเป็นยังไงก็ตามกันเข้ามาดูได้เลย
                                </ContentField>

                                <ContentField>
                                    มาเริ่มกันที่ทางเข้า ห้องแห่งนี้เป็นห้องขนาด
                                    30 ตารางเมตร
                                    เมื่อเราเปิดประตูเข้ามาเราจะเจอกับชั้นวางของสีขาวยาว
                                    IKEA LACK
                                    ซึ่งประดับประดาไปด้วยของตกแต่งมากมายแขวนลงมาทางปลายแต่ละชั้น
                                    สีขาวของชั้นวางของทำให้บรรดาของตกแต่งทั้งบอลคริสต์มาสสีแดงที่ตัดด้วยกระดาษเขียว
                                    ได้อย่างเด่นชัด
                                    อุปกรณ์ตกแต่งบ้านที่สามารถนำมาจัดวางเพิ่มเติมได้จะเป็นของที่มี
                                    โทนสีเขียวและแดงตามบรรยากาศของเทศกาลคริสต์มาส
                                    การได้เอนหลังนั่งพักลง บนโซฟาตัวเล็ก IKEA
                                    GRÖNLID
                                    ดื่มด่ำไปกับบรรยากาศวันคริสต์มาสต์เอง
                                    ก็เป็นเรื่องที่ทำให้มีความสุขได้ไม่น้อย
                                    สามารถที่จะนั่งล้อมวงเล่นพูดคุยเรื่อยเปื่อย
                                    ไปกับครอบครัว
                                    และเก็บเกี่ยวช่วงเวลาแห่งความสุขร่วมกันได้ตลอดทั้งค่ำคืน
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

                break;
            case 2:
                data = (
                    <>
                        <Title>
                            รีวิว :
                            จัดบ้านหวานๆสไตล์เจ้าหญิงด้วยงบไม่เกินหนึ่งพันบาท
                        </Title>

                        <ContentRow>
                            <div>
                                <ContentField>
                                    สาวๆ
                                    ทุกคนคงมีโมเมนต์ที่อยากจะเป็นเจ้าหญิงกันบ้างใช่มั้ยล่ะคะ?
                                    เมื่ออาทิตย์ที่แล้ว เราได้โอกาสสานฝันสักที
                                    เพราะลูกสาวชวนเพื่อนมาทานข้าวในงานวันเกิดที่บ้าน
                                    แม่อย่างเราก็ต้องจัดหนักจัดเต็ม
                                    ทำให้งานออกมาเพอร์เฟ็กต์ที่สุดค่ะ
                                </ContentField>
                                <ContentField>
                                    และไอเท็มที่เราเลือกใช้ก็คืออออออ.. ‘ดอกไม้’
                                    นั่นเอง
                                </ContentField>
                                <ContentField>
                                    ใช่แล้ว ดอกไม้อะไรก็ได้เลยค่ะ
                                    แต่ที่เราเลือกใช้หลักๆ
                                    ในงานนี้จะเป็นดอกกุหลาบ เพราะ ลูกสาวชอบ
                                    แล้วส่วนตัวเราว่ามันเป็นดอกไม้ที่คลาสสิกมากๆ
                                    มิกซ์กับอะไรก็ดูเข้ากันไปหมด
                                    แถมให้ความรู้สึกเหมือนอยู่ในการ์ตูนดิสนีย์
                                    Disney เรื่อง Beauty and the Beast ด้วย
                                </ContentField>
                                <ContentField>
                                    หลายๆ คนอาจจะคิดว่าดอกไม้เนี่ยมันไม่คงทน
                                    แป๊บเดียวก็เน่า ซึ่งก็จริงค่ะ
                                    แต่เรามีเทคนิคมานำเสนอ (บางคนอาจจะรู้แล้ว
                                    เพราะวิธีก็เหมือนตอนจัดพานไหว้ครูช่วงมัธยม)
                                    คือ เราใช้ M150 ผสมกับน้ำในอัตรา ¼ และ
                                    เปลี่ยนน้ำทุกวัน
                                    เพียงแค่นี้ดอกไม้เราอยู่ได้เกือบอาทิตย์นึงเลยค่า
                                    ไม่เหม็น ไม่เน่าด้วย
                                </ContentField>
                                <ContentField>
                                    นอกจากตัวดอกไม้เองจะสวย มีกลิ่นหอม
                                    น่ามองแล้ว
                                    เรายังสามารถมีความสุขกับมันไปอีกเท่าด้วยการมานั่งจัดดอกไม้เองได้
                                    หรือ
                                    จัดดอกไม้เป็นกิจกรรมยามว่างกับลูกก็ได้ค่ะ
                                </ContentField>
                            </div>
                            <div>
                                <Box
                                    photo={Article1}
                                    title="จัดห้องฉลองคริสต์มาสง่ายๆ สไตล์ IKEA"
                                />
                                <br />
                                <Box
                                    photo={Article3}
                                    title="5 ITEM เสริมดวงประจำปี 2019"
                                />
                            </div>
                        </ContentRow>
                        <ProductTitle>
                            เฟอร์นิเจอร์ที่เกี่ยวข้องกับเจ้าหญิง
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
                break;
            case 3:
                data = (
                    <>
                        <Title>5 ITEM เสริมดวงประจำปี 2019!</Title>

                        <ContentRow>
                            <div>
                                <ContentField>
                                    1. ชั้นวางของ สำหรับชาวราศีธนู เมถุน และมีน
                                    อาจต้องพบเจอมรสุมการงานที่หนักหนาสาหัสในต้นปี
                                    2019 นี้
                                    ควรระมัดระวังและมีสติหากต้องติดต่อกับผู้ที่อาวุสโสกว่า
                                    อาจมีเรื่องขัดแย้งเล็กน้อยจนทำให้สิ่งที่ตั้งใจทำสำเร็จล้าช้ากว่ากำหนดเดิมอยู่เสียหน่อย
                                    Item ที่จะมาช่วยเหลือชาวราศีกลุ่มนี้คือ
                                    ชั้นวางของ ซึ่งมีชั้นจัดวางสิ่งของมากถึง 3
                                    ชั้น
                                    เหมาะกับผู้ที่อาจพบเจออุปสรรคในการทำงานเข้ามาอย่างไม่ต่อเนื่อง
                                    เพียงปล่อยวางความคาดหวังเหล่านั้นลงบนชั้นวางของที่มั่นคงนี้ได้
                                </ContentField>

                                <ContentField>
                                    2. โซฟา
                                    เรื่องสุขภาพดูจะน่าเป็นห่วงสำหรับชาวราศีเมษ
                                    สิงห์ และตุลย์ ความเครียดจากสภาพแวดล้อมเดิมๆ
                                    อาจมีผลให้เกิดอาการนอนไม่หลับได้ง่าย
                                    ควรระวังในเรื่องของการรับข่าวสารเกี่ยวกับสุขภาพที่วนเวียนเข้ามาเยอะ
                                    Item สำหรับชาวราศีกลุ่มนี้จึงเหมาะกับ โซฟา
                                    เพื่อคลายล้าจากความเหน็ดเหนื่อยจนนำมาสู่ความเครียดโดยไม่จำเป็น
                                    สามารถเป็นพื้นที่ส่วนตัวเล็กๆ
                                    ที่จะผ่อนคลายและให้เวลาเป็นของตัวเองได้
                                </ContentField>
                                <ContentField>
                                    3. โคมไฟ ความสัมพันธ์ของชาวราศีพฤษภ กันย์
                                    และตุลย์อาจดูไม่สู้ดีนักในปี 2019 นี้
                                    ด้วยระยะทางที่ห่างกันมากขึ้นอาจทำให้คุณดูแลคนใกล้ตัวของคุณน้อยลง
                                    ถึงเวลาที่ควรจะหวนย้อนมามองเรื่องราวเก่าๆ
                                    และชวนกันไปเที่ยวพักผ่อนสร้างความทรงจำต่างๆ
                                    ขั้นอีกครั้ง โคมไฟ เป็นหนึ่งใน Item
                                    ที่น่าสนใจสำหรับกลุ่มคนราศีนี้
                                    แสงสว่างและการพักผ่อนสายตาอย่างเหมาะสม
                                    สามารถช่วยให้เรามีสมาธิจดจ่ออยู่กับสถานการณ์ความสัมพันธ์ในปัจจุบันได้ดียิ่งขึ้น
                                </ContentField>

                                <ContentField>
                                    4. แจกัน กลุ่มราศีมังกร พิจิก
                                    และกรกฎที่กำลังตั้งใจกับการสร้างเนื้อ
                                    สร้างตัว
                                    อาจมีปัญหาเกี่ยวกับความไม่สะดวกของนายทุนผู้สนับสนุนเข้ามาถี่
                                    แต่หากผ่านพ้นไปได้ก็มีเกณฑ์จะได้รับโชคลาภที่เด่นชัด
                                    จนทำให้ธุรกิจกลับมามีความคล่องตัวมากขึ้นได้
                                    ความพยายามจะก้าวหน้าในเส้นทางธุกิจ
                                    เป็นคำตอบสำคัญให้ แจกัน เป็น Item
                                    ที่จะช่วยสนับสนุนและแสดงออกถึงความไม่ย้อท้อของกลุ่มชาวราศีนี้ได้
                                    ทั้งยังเป็นสัญลักษณ์คอยเดือนให้ยังรู้สึกสดใส
                                    เบิกบานท่ามกลางอุปสรรคที่เกิดขึ้นได้
                                </ContentField>
                            </div>
                            <div>
                                <Link to="/content/1">
                                    <Box
                                        photo={Article1}
                                        title="จัดห้องฉลองคริสต์มาสง่ายๆ สไตล์ IKEA"
                                    />
                                </Link>
                                <br />
                                <Link to="/content/2">
                                    <Box
                                        photo={Article2}
                                        title="รีวิว : จัดบ้านหวานๆสไตล์เจ้าหญิง
                                    ด้วยงบไม่เกินหนึ่งพันบาท"
                                    />
                                </Link>
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
                break;
        }

        return <>{data}</>;
    }
}

export default Content;

import React, { Component } from "react";
import { Layout, Row, Col, Card } from "antd";
import styled from "styled-components";
import Background from "../../../../images/content-banner.png";
import White_Brusali from "../../../../images/White_brusali.png";
import sofa from "../../../../images/sofa.jpg";

const { Header, Content } = Layout;

const InfoCard = styled.div`
    padding: 40px;
    background: #c4c4c4;
    width: 300px;
    margin-top: 50px;
`;
const GreenText = styled(Col)`
    color: #3b5042;
    font-size: 21px;
    margin-bottom: 10px;
`;
const WhiteDot = styled.div`
    height: 25px;
    width: 25px;
    background-color: #fff;
    border-radius: 50%;
    display: inline-block;
`;
const Detail = props => {
    return (
        <Layout>
            <Header
                className="header"
                style={{ height: 180, backgroundImage: `url(${Background})` }}
            >
                <h1 style={{ color: "white", textAlign: "center" }}>LOGO</h1>
            </Header>
            <Content style={{ paddingBottom: 50 }}>
                <Row
                    style={{ maxWidth: 1280, margin: "auto" }}
                    justify="center"
                    type="flex"
                >
                    <Col xs={24}>
                        <Row type="flex" justify="center">
                            <InfoCard>
                                <p
                                    style={{
                                        color: "white",
                                        marginLeft: -10,
                                        fontSize: 21
                                    }}
                                >
                                    ABOUT
                                </p>
                                <GreenText>
                                    BRUSALI บรูสซาลีโต๊ะเข้ามุม
                                </GreenText>
                                <Row type="flex">
                                    <GreenText xs={12}>Price</GreenText>
                                    <GreenText xs={12}>3,290 B</GreenText>
                                    <GreenText xs={12}>Color</GreenText>
                                    <GreenText xs={12}>
                                        <WhiteDot />
                                    </GreenText>
                                    <GreenText xs={12}>Brand</GreenText>
                                    <GreenText xs={12}>IKEA</GreenText>
                                    <GreenText xs={12}>Size</GreenText>
                                    <GreenText xs={12}>...</GreenText>
                                </Row>
                            </InfoCard>
                            <div>
                                <img
                                    alt=""
                                    src={White_Brusali}
                                    height={450}
                                    width={"100%"}
                                    style={{ marginLeft: -60, marginTop: 50 }}
                                />
                            </div>
                        </Row>
                        <Row
                            type="flex"
                            justify="end"
                            style={{ marginTop: 20 }}
                        >
                            <Col>
                                <h4>Department Homeware</h4>
                                <p>Type Bedroom</p>
                                <p>Meterial</p>
                                <p>Designer IKEA</p>
                                <p>Inspired by</p>
                            </Col>
                        </Row>
                        <h2 style={{ marginBottom: 20 }}>
                            Sofa ตัวไหนเหมาะกับบ้านสไตล์แบบ...
                        </h2>
                        <Row type="flex" justify="space-between">
                            <Card
                                hoverable
                                style={{ width: 400 }}
                                cover={<img alt="" src={sofa} />}
                            >
                                <Card.Meta
                                    title="Europe Street beat"
                                    description="www.instagram.com"
                                />
                            </Card>
                            <Card
                                hoverable
                                style={{ width: 400 }}
                                cover={<img alt="" src={sofa} />}
                            >
                                <Card.Meta
                                    title="Europe Street beat"
                                    description="www.instagram.com"
                                />
                            </Card>
                            <Card
                                hoverable
                                style={{ width: 400 }}
                                cover={<img alt="" src={sofa} />}
                            >
                                <Card.Meta
                                    title="Europe Street beat"
                                    description="www.instagram.com"
                                />
                            </Card>
                        </Row>
                    </Col>
                </Row>
            </Content>
        </Layout>
    );
};

export default Detail;

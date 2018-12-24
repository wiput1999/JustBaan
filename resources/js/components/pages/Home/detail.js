import React, { Component } from "react";
import { Layout, Row, Col, Card  } from 'antd'
import styled from 'styled-components'
const { Header, Content } = Layout;

const InfoCard = styled.div`
    padding: 30px;
    background: white;
    width: 300px;
    margin-top: 50px; 
`

const Detail = props => {
    return <Layout>
                <Header className="header">
                    <div className="logo" >
                        <h1 style={{ color: 'white', textAlign: 'center'}}>Logo</h1>
                    </div>
                </Header>
                <Content >
                    <Row style={{maxWidth: 1280, margin: 'auto'}} justify='center' type='flex'>
                        <Col xs={24}>
                            <Row type='flex' justify='center'>
                                <InfoCard>
                                    <h4>About</h4>
                                    <p>Color</p>
                                    <p>Color</p>
                                    <p>Price</p>
                                    <p>Band</p>
                                    <p>Size</p>
                                </InfoCard>
                                <div>
                                    <img alt='' src='' />
                                </div>
                            </Row>
                            <Row type='flex' justify='end'>
                                <Col>
                                    <p>Departure</p>
                                    <p>Type</p>
                                    <p>Meterial</p>
                                    <p>Designer</p>
                                </Col>
                            </Row>
                            <Col>Inspired by</Col>
                            <Col>Sofa ตัวไหนเหมาะกับบ้านสไตล์ไหน</Col>
                            <Row type='flex' justify='space-around'>
                                <Card
                                    hoverable
                                    style={{ width: 240 }}
                                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                >
                                    <Card.Meta
                                    title="Europe Street beat"
                                    description="www.instagram.com"
                                    />
                                </Card>
                                <Card
                                    hoverable
                                    style={{ width: 240 }}
                                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                >
                                    <Card.Meta
                                    title="Europe Street beat"
                                    description="www.instagram.com"
                                    />
                                </Card>
                                <Card
                                    hoverable
                                    style={{ width: 240 }}
                                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
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
}

export default Detail;

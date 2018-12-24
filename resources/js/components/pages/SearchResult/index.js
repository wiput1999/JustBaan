import React, { Component } from "react";
import { Row, Col } from "antd";
import Header from "./Header";
import Footer from "./Footer";
import Sider from "./Sidebar";
import Content from "./content";

class Home extends Component {
    render() {
        return (
            <>
                <Header />
                <Row type="flex">
                    <Col xs={4}>
                        <Sider />
                    </Col>
                    <Col xs={20}>
                        <Content />
                    </Col>
                </Row>
                <Footer />
            </>
        );
    }
}

export default Home;

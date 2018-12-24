import React, { Component } from "react";

import { Menu, Icon } from "antd";

const SubMenu = Menu.SubMenu;

class Sider extends React.Component {
    render() {
        return (
            <div>
                <div style={{ padding: 20 }}>Filter</div>
                <Menu
                    style={{ width: 256, background: "#F7F7F7" }}
                    defaultSelectedKeys={["1"]}
                    defaultOpenKeys={["sub1", "sub2", "sub4", "sub5"]}
                    mode="inline"
                >
                    <SubMenu key="sub1" title={"ราคา"}>
                        <Menu.Item key="1">ต่ำ - สูง</Menu.Item>
                        <Menu.Item key="2">สูง - ต่ำ</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        title={
                            <span>
                                <span>Brand</span>
                            </span>
                        }
                    >
                        <Menu.Item key="5">IKEA</Menu.Item>
                        <Menu.Item key="6">Koncept </Menu.Item>
                        <Menu.Item key="26">Index livingmall </Menu.Item>
                        <Menu.Item key="36">SB design square </Menu.Item>
                        <Menu.Item key="46">Bird furniture </Menu.Item>
                        <Menu.Item key="56">Raminthra furniture </Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub4"
                        title={
                            <span>
                                <span>หมวด</span>
                            </span>
                        }
                    >
                        <Menu.Item key="9">โต๊ะ</Menu.Item>
                        <Menu.Item key="10">เตียง</Menu.Item>
                        <Menu.Item key="11">ตู้</Menu.Item>
                        <Menu.Item key="12">ชุดห้องนอน</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub5"
                        title={
                            <span>
                                <span>Style</span>
                            </span>
                        }
                    >
                        <Menu.Item key="13">Loft</Menu.Item>
                        <Menu.Item key="14">Contemp</Menu.Item>
                        <Menu.Item key="15">Moodern</Menu.Item>
                        <Menu.Item key="16">Vintage</Menu.Item>
                        <Menu.Item key="17">Classic</Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}

export default Sider;

import {RootLayout} from "./root-layout";
import {Layout, Menu, MenuProps} from "antd";
import {HeaderLayout} from "./components/header-layout";
import Sider from "antd/es/layout/Sider";
import {Content, Footer, Header} from "antd/es/layout/layout";
import React, {ReactNode} from "react";
import {ItemType, MenuItemType} from "antd/es/menu/hooks/useItems";

const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
}));

export interface MenuItemsProps {
    items: MenuItemType[];
}

export interface DefaultLayoutProps {
    children: ReactNode;
    siderWidth?: number;
    menuItems?: ItemType[];
}

export const DefaultLayout = (props: DefaultLayoutProps) => {
    const {children, siderWidth = 200, menuItems} = props;
    const itemRenderer = (item: MenuItemType) => {
        return (
            <>
                {item.key}
            </>
        )
    }
    return (
        <RootLayout>
            <Layout>
                <Sider width={siderWidth} breakpoint={'lg'} collapsedWidth={0} onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
                >

                    <Menu mode={"inline"} theme={"dark"} items={menuItems} onClick={(e: any) => {
                        console.log(e);
                    }} />
                </Sider>
                <Layout>
                    <Header style={{background:"#fff"}}>
                        1111
                    </Header>
                    <Content style={{margin: '24px 16px 0'}}>
                        <div style={{"padding":24, minHeight: 360, background: "#fff", borderRadius:5}}>
                            {children}
                        </div>

                    </Content>
                    <Footer>
                        Copy Right
                    </Footer>
                </Layout>
            </Layout>
        </RootLayout>
    )
};
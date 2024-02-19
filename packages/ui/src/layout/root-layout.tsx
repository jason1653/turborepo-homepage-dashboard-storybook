import React, {ReactNode} from "react";
import {AntdRegistry} from "@ant-design/nextjs-registry";
import {Layout} from "antd";
import {HeaderLayout} from "./components/header-layout";
import Sider from "antd/es/layout/Sider";
import {Content} from "antd/es/layout/layout";

export interface RootLayoutProps {
    children: ReactNode;

}
export const RootLayout = (props: RootLayoutProps) => {
    const {children} = props;
    return (
        <>
            <AntdRegistry>
                {children}
            </AntdRegistry>
        </>
    )
}

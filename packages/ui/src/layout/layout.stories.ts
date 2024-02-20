import {RootLayout} from "./root-layout";
import type {StoryObj} from "@storybook/react";
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import {DefaultLayout} from "./default-layout";
import React from "react";

const meta = {
    title: 'Layout/레이아웃',
    component: DefaultLayout,
    tags: ['autodocs'],
    argTypes: {
        children: {
            control: { type: 'text' }
        },
        siderWidth: {
            control: { type: 'number' }
        },
        menuItems: {
            control: { type: 'object' }
        },
    },
} as any;


export default meta;
type Story = StoryObj<typeof meta>;


const items = [
    {
        key: '1',
        icon: React.createElement(UserOutlined),
        label: 'nav 1',
    },
    {
        key: '2',
        label: 'nav 2',
        icon: React.createElement(UploadOutlined),
        children: [
            {
                key: '2-1',
                label: 'nav 2-1',
                icon: React.createElement(VideoCameraOutlined),
            },
            {
                key: '2-2',
                label: 'nav 2-2',
                icon: React.createElement(VideoCameraOutlined),
            },
        ],

    },
    {
        key: '3',
        label: 'nav 3',
    },
];

export const 기본레이아웃: Story = {
    args: {
        children: "Hello, world!",
        siderWidth: 200,
        menuItems: items,
    },
}


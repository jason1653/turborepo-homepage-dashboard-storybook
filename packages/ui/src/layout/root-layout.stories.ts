import {RootLayout} from "./root-layout";
import type {StoryObj} from "@storybook/react";

const meta = {
    title: 'Example/RootLayout',
    component: RootLayout,
} as any;



export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
    args: {
        children: "Hello, world!",
    },
}
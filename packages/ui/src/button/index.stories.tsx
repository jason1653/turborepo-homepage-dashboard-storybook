import { DefaultLayout } from "../layout/default-layout";
import type { Meta, StoryObj } from "@storybook/react";
import { CsButton } from "./index";
import { ReactNode } from "react";

const meta: Meta<typeof CsButton> = {
  title: "컴포넌트/버튼",
  component: CsButton,
  tags: ["autodocs"],

  argTypes: {
    type: {
      options: ["primary", "default", "dashed", "link", "text"],
      control: { type: "select" },
    },
    children: {
      control: { type: "text" },
    },
    loading: {
      control: { type: "boolean" },
    },
    danger: {
      control: { type: "boolean" },
    },
    onClick: {
      action: "onClick",
    },
  },
  args: {
    children: "버튼",
    type: "primary",
    loading: false,
    danger: false,
    onClick: () => {
      console.log("버튼 클릭");
    },
  },
};

export default meta;
type Story = StoryObj<typeof CsButton>;

export const 기본_Primary: Story = {
  args: {
    children: "버튼",
    type: "primary",
  },
};

export const 로딩버튼_PRIMARY: Story = {
  args: {
    children: "버튼",
    type: "primary",
    loading: true,
  },
};

export const 위험버튼_PRIMARY: Story = {
  args: {
    children: "버튼",
    type: "primary",
    danger: true,
  },
};

export const 위험버튼_로딩_PRIMARY: Story = {
  args: {
    children: "버튼",
    type: "primary",
    danger: true,
    loading: true,
  },
};

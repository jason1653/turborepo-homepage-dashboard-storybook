import { HomeLayout } from "./home-layout";
import { Meta } from "@storybook/react";

const meta: Meta<typeof HomeLayout> = {
  title: "L-Home/레이아웃",
  component: HomeLayout,
  tags: ["autodocs"],
  args: {
    children: "홈페이지",
  },
};

export default meta;

export const 홈페이지레이아웃 = (args: any) => {
  return <HomeLayout {...args} />;
};

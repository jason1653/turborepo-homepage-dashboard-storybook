import React, { ReactNode } from "react";
import { Col, Layout, Menu, MenuProps, Row } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import styled from "styled-components";

export interface HomeLayoutProps {
  children: ReactNode;
}

const HeaderStyled = styled(Header)`
  text-align: center;
  background: #000;
`;

const HeaderContentStyled = styled(Content)`
  max-width: 1200px;
  margin: 0 auto;
`;

const LogoStyled = styled(Col)`
  text-align: left;
  color: #fff;
`;

const MenuContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const MenuStyled = styled(Col)`
  color: #fff;
`;

const MenuItemsStyled = styled(Menu)`
  background-color: #000000;
  color: #fff;

  .ant-menu-title-content {
    color: #fff;
  }
`;

const ContentsStyled = styled(Content)`
  background-color: #000;
  color: #fff;
`;

const ContentStyledDiv = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding-top: 2em;
  padding-bottom: 2em;
`;

const items: MenuProps["items"] = [
  {
    label: "Home",
    key: "Home",
  },
  {
    label: "About Us",
    key: "AboutUs",
  },
  {
    label: "Services",
    key: "Services",
  },
  {
    label: "Contact",
    key: "Contact",
  },
];

export const HomeLayout = (props: HomeLayoutProps) => {
  const { children } = props;
  return (
    <>
      <Layout>
        <ContentsStyled>
          <HeaderContentStyled>
            <Row>
              <LogoStyled span={12}>Logo</LogoStyled>
              <MenuStyled span={12}>
                <MenuContainer>
                  <MenuItemsStyled
                    mode={"horizontal"}
                    items={items}
                  ></MenuItemsStyled>
                </MenuContainer>
              </MenuStyled>
            </Row>
          </HeaderContentStyled>
        </ContentsStyled>
        <ContentsStyled>
          <ContentStyledDiv>{children}</ContentStyledDiv>
        </ContentsStyled>
      </Layout>
    </>
  );
};

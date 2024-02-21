import React, { ReactNode } from "react";
import { Col, Layout, Menu, MenuProps, Row } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import styled from "styled-components";

const maxWidth = 1200;

export interface HomeLayoutProps {
  children: ReactNode;
}

const HeaderStyled = styled(Header)`
  text-align: center;
  background: #000;
`;

const HeaderContentStyled = styled.div`
  max-width: ${maxWidth}px;
  margin: 0 auto;
`;

const LogoStyled = styled(Col)`
  text-align: left;
  color: #fff;
  align-items: center;
  display: flex;
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
  padding: 0 50px;
`;

const ContentStyledDiv = styled.div`
  margin: 0 auto;
  max-width: ${maxWidth}px;
  padding: 20px 0;
`;

const FooterContainer = styled(Footer)``;

const FooterContainerDiv = styled.div`
  max-width: ${maxWidth}px;
  text-align: left;
  margin: 0 auto;
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

import logo from "../assets/logo.png";

export const HomeLayout = (props: HomeLayoutProps) => {
  const { children } = props;
  return (
    <>
      <Layout>
        <HeaderStyled>
          <HeaderContentStyled>
            <Row>
              <LogoStyled span={12}>
                <img src={logo} />
              </LogoStyled>
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
        </HeaderStyled>
        <ContentsStyled>
          <ContentStyledDiv>{children}</ContentStyledDiv>
        </ContentsStyled>
        <FooterContainer>
          <FooterContainerDiv>11</FooterContainerDiv>
        </FooterContainer>
      </Layout>
    </>
  );
};

"use client";
import React, { ReactNode } from "react";
import { Col, Layout, Menu, MenuProps, Row } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Image from "next/image";
import styled from "styled-components";

const maxWidth = 1200;

export interface HomeLayoutProps {
  children: ReactNode;
}

const HeaderStyled = styled(Header)`
  text-align: center;
  background: #000;
  height: initial;
  padding-top: 20px;
  padding-bottom: 20px;
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
  padding: 40px 0;
`;

const FooterContainer = styled(Footer)`
  background-color: #000;
  color: #fff;
`;

const FooterContainerDiv = styled.div`
  max-width: ${maxWidth}px;
  text-align: left;
  margin: 0 auto;
`;

const FooterMenuRow = styled(Row)`
  margin-top: 20px;
`;

const FooterMenu = styled.div`
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  gap: 50px;
  a {
    color: #fff;
  }
`;

const FooterAddress = styled(Col)`
  margin-top: 60px;
  font-weight: 500;
  font-size: 14px;
  line-height: 30px;
  color: #8c8c8c;
`;

const Gap = styled.span`
  margin-left: 30px;
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
import logoFooter from "../assets/logo_footer.png";

export const HomeLayout = (props: HomeLayoutProps) => {
  const { children } = props;
  return (
    <>
      <Layout style={{ color: "#ffffff" }}>
        <HeaderStyled>
          <HeaderContentStyled>
            <Row>
              <LogoStyled span={12}>
                {/*<Image src={logo} width={120} height={40} alt={"PRLO 로고"} />*/}
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
          <FooterContainerDiv>
            <Row>
              <Col span={24}>
                {/*<Image*/}
                {/*  src={logoFooter}*/}
                {/*  width={159}*/}
                {/*  height={47}*/}
                {/*  alt={"PRLO 로고"}*/}
                {/*/>*/}
              </Col>
            </Row>
            <FooterMenuRow>
              <Col flex={2}>
                <div>(주)디코코</div>
                <div style={{ marginTop: "10px" }}>대표이사 | 박기훈</div>
              </Col>
              <Col flex={3} style={{ textAlign: "right" }}>
                <FooterMenu>
                  <a>PRO 태블릿</a>
                  <a>PRO 테이블오더</a>
                  <a>PRO 키오스크</a>
                  <a>PROL MASTER</a>
                </FooterMenu>
              </Col>

              <FooterAddress span={24}>
                주소 │ 서울시 구로구 디지털로 34길 43,
                1102호(코오롱싸이언스밸리1차)
                <br /> 대표전화 │ 1544-6230 <Gap />
                사업자 번호 │ 494-87-02752
                <br />
                통신판매 신고번호 │ 2023-서울구로-2241호
                <Gap />
                개인정보책임자 │ 박기훈
              </FooterAddress>
            </FooterMenuRow>
          </FooterContainerDiv>
        </FooterContainer>
      </Layout>
    </>
  );
};

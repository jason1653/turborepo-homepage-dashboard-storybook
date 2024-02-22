"use client";

import React from "react";
import Image from "next/image";
import styled from "styled-components";

const FooterContainer = styled.footer`
  padding-top: 200px;
  padding-bottom: 50px;

  background-color: #000;
`;

const FooterContent = styled.div``;

const FooterLogo = styled(Image)`
  @media (max-width: 768px) {
    width: 80px;
    height: auto;
  }
`;

const FooterFlex = styled.div`
  display: flex;
  margin-top: 20px;
  font-size: 20px;
  @media (max-width: 768px) {
    display: block;
    font-size: 14px;
  }
`;

const FooterCompany = styled.div`
  flex-basis: 20%;
  color: #fff;

  @media (max-width: 768px) {
    flex-basis: 100%;
  }
`;

const FooterMenu = styled.div`
  flex-basis: 80%;
  justify-content: flex-end;
  color: #fff;
  text-align: right;

  @media (max-width: 768px) {
    flex-basis: 100%;
    text-align: left;
    margin-top: 50px;
    width: 100%;
    display: flex;
  }
`;

const FooterMenuItems = styled.a`
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  gap: 50px;
  padding-left: 40px;
  @media (max-width: 768px) {
    padding: 0px;
    flex: 1 1 auto;
    gap: 10px;
  }
`;

const FooterAddress = styled.div`
  margin-top: 40px;
  color: #fff;
  font-weight: 500;
  font-size: 14px;
  line-height: 30px;
  @media (max-width: 768px) {
    color: #8c8c8c;
    line-height: 25px;
    margin-top: 20px;
    letter-spacing: -0.5px;
  }
`;

const Gap = styled.span`
  margin-left: 30px;
`;

const Footer = () => {
  return (
    <FooterContainer className={"layout"}>
      <FooterContent className={"container"}>
        <FooterLogo
          alt={"logo"}
          src={"/logo_footer.png"}
          width={159}
          height={47}
        />

        <FooterFlex>
          <FooterCompany>
            (주)테스트
            <p>대표이사 | 테스트</p>
          </FooterCompany>
          <FooterMenu>
            <FooterMenuItems>PRO 태블릿</FooterMenuItems>
            <FooterMenuItems>PRO 테이블오더</FooterMenuItems>
            <FooterMenuItems>PRO 키오스크</FooterMenuItems>
            <FooterMenuItems>PRLO MASTER</FooterMenuItems>
          </FooterMenu>
        </FooterFlex>

        <FooterAddress>
          주소 | 서울시 종로구
          <br />
          대표전화 | 0000-0000
          <Gap />
          사업자 번호 | 000-00-00000
          <br />
          통신판매 신고번호 | 0000-서울종로-000-호 <Gap />
          개인정보책임자 | 테스트
        </FooterAddress>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;

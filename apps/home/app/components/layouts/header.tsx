"use client";

import React from "react";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

const HeaderContainer = styled.header`
  position: fixed;
  height: 100px;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: #000;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const HeaderLogo = styled.div`
  flex-basis: 40%;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    img {
      width: 80px;
      height: auto;
    }
  }
`;

const HeaderMenu = styled.div`
  flex-basis: 60%;
  text-align: right;
  justify-content: flex-end;
`;

const Nav = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const NavItem = styled(Link)`
  display: block;
  font-size: 24px;
  font-weight: 700;
  color: #fff;
  text-decoration: none;
  padding: 0 0px 0px 30px;

  @media (max-width: 768px) {
    display: none;
  }

  :last-child {
    padding-right: 0 !important;
  }
`;

const MobileMenuIcon = styled(Image)`
  display: none;
  text-align: right;
  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
  return (
    <HeaderContainer className={"layout"}>
      <HeaderContent className={"container"}>
        <HeaderLogo>
          <Image
            src={"/logo.png"}
            width={120}
            height={40}
            alt={"로고 이미지"}
          ></Image>
        </HeaderLogo>
        <HeaderMenu>
          <Nav>
            <NavItem href={"/"}>Home</NavItem>
            <NavItem href={"/about"}>About Us</NavItem>
            <NavItem href={"/about"}>Service</NavItem>
            <NavItem href={"/about"}>Contact</NavItem>

            <MobileMenuIcon
              src={"/btn_menu.png"}
              width={30}
              height={30}
              alt={"메뉴"}
            />
          </Nav>
        </HeaderMenu>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;

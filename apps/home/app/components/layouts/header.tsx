"use client";

import React from "react";
import Image from "next/image";
import styled from "styled-components";

const HeaderContainer = styled.header`
  position: fixed;
  height: 60px;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
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

const NavItem = styled.a`
  display: block;
  font-size: 24px;
  font-weight: 700;
  color: #fff;
  text-decoration: none;
  padding: 0 15px;

  @media (max-width: 768px) {
    display: none;
  }

  &:last-child {
    padding-right: 0;
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
            <NavItem>Home</NavItem>
            <NavItem>About Us</NavItem>
            <NavItem>Service</NavItem>
            <NavItem>Contact</NavItem>

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

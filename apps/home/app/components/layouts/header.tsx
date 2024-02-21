"use client";

import React from "react";
import Image from "next/image";
import styled from "styled-components";

const HeaderContainer = styled.header`
  position: fixed;
  height: 60px;
`;

const HeaderContent = styled.div`
  display: flex;
`;

const HeaderLogo = styled.div`
  flex-basis: 40%;
  @media (max-width: 768px) {
    img {
      width: 80px;
      height: auto;
    }
  }
`;

const HeaderMenu = styled.div`
  flex-basis: 60%;
  height: 40px;
  text-align: right;
`;

const Nav = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: "flex-end";
`;

const NavItem = styled.a`
  display: block;
  font-size: 24px;
  font-weight: 700;
  color: #fff;
  text-decoration: none;
  padding: 0 15px;
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
          </Nav>
        </HeaderMenu>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;

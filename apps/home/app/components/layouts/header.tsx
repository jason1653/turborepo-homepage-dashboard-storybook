"use client";

import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header``;

const HeaderContent = styled.div``;

const Header = () => {
  return (
    <HeaderContainer className={"layout"}>
      <HeaderContent className={"container"}>
        <h1>Header</h1>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;

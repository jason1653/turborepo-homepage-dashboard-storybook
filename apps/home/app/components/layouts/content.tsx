"use client";

import React, { ReactNode } from "react";
import styled from "styled-components";

const MainContainer = styled.main`
  padding-top: 80px;
`;

const MainContent = styled.div``;

export interface ContentProps {
  children: ReactNode;
}

const Content = (props: ContentProps) => {
  const { children } = props;
  return (
    <MainContainer className={"layout"}>
      <MainContent className={"container"}>{children}</MainContent>
    </MainContainer>
  );
};

export default Content;

import React, { ReactNode, useState } from "react";
import { Button, ConfigProvider } from "antd";
import type { ButtonType } from "antd/es/button/buttonHelpers";
import theme from "../theme/themeConfig";

export interface CsButtonProps {
  type?: ButtonType;
  danger?: boolean;
  children: ReactNode;
  loading?: boolean;
  onClick?: () => void;
}
export const CsButton = (props: CsButtonProps) => {
  const { type, children, danger = false, loading = false, onClick } = props;

  return (
    <>
      <ConfigProvider theme={theme}>
        <Button type={type} danger={danger} loading={loading} onClick={onClick}>
          {children}
        </Button>
      </ConfigProvider>
    </>
  );
};

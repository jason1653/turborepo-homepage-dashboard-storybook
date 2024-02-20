import React, { ReactNode, useState } from "react";
import { Button } from "antd";
import type { ButtonType } from "antd/es/button/buttonHelpers";

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
      <Button type={type} danger={danger} loading={loading} onClick={onClick}>
        {children}
      </Button>
    </>
  );
};

"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import {
  QueryClient,
  QueryClientProvider,
  useQueryClient,
} from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import MotionWrapper from "../animation/page-motion-wrapper";

export interface RootLayoutProps {
  children: ReactNode;
}

const queryClient = new QueryClient();

export const RootLayout = (props: RootLayoutProps) => {
  const { children } = props;
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
  }, []);

  return (
    <MotionWrapper>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <AntdRegistry>
            {!isLoading ? <>로딩</> : <>{children}</>}
          </AntdRegistry>
        </QueryClientProvider>
      </RecoilRoot>
    </MotionWrapper>
  );
};

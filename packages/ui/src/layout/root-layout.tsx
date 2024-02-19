"use client";
import React, {ReactNode} from "react";
import {AntdRegistry} from "@ant-design/nextjs-registry";
import {QueryClient, QueryClientProvider, useQueryClient} from "@tanstack/react-query";
import {RecoilRoot} from "recoil";

export interface RootLayoutProps {
    children: ReactNode;

}

const queryClient = new QueryClient();


export const RootLayout = (props: RootLayoutProps) => {
    const {children} = props;

    return (
        <>
            <RecoilRoot>
                <QueryClientProvider client={queryClient}>
                    <AntdRegistry>
                        {children}
                    </AntdRegistry>
                </QueryClientProvider>
            </RecoilRoot>
        </>
    )
}

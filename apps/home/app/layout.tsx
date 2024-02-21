"use client";
import "./globals.css";
import React, { ReactNode } from "react";
import { RootLayout } from "@repo/ui/src/layout/root-layout";
import Header from "./components/layouts/header";
import Footer from "./components/layouts/footer";
import Content from "./components/layouts/content";

const maxWidth = 1200;

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body>
        <RootLayout>
          <Header></Header>
          <Content>{children}</Content>
          <Footer></Footer>
        </RootLayout>
      </body>
    </html>
  );
}

"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { DefaultLayout } from "@repo/ui/src/layout/default-layout";
import { HomeLayout } from "@repo/ui/src/layout/home-layout";
import { CsButton } from "@repo/ui/src/button";

export default function Page(): JSX.Element {
  return (
    <DefaultLayout>
      <CsButton danger={true} loading={true} size={"large"}>
        111
      </CsButton>
    </DefaultLayout>
  );
}

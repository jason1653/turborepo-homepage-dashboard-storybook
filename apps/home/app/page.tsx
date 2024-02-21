"use client";
import { useEffect } from "react";

export default function Page(): JSX.Element {
  useEffect(() => {
    document.body.style.background = "#000";
    document.body.style.color = "#fff";
  }, []);
  return <>11111</>;
}

"use client";
import { useEffect } from "react";

const AboutPage = () => {
  useEffect(() => {
    document.body.style.background =
      "#C7DA01 url(/sub02_bg_sec01.png)no-repeat top center";
    document.body.style.backgroundSize = "100%";

    const header = document.getElementsByTagName("header");
    if (header.length > 0) {
      if (header[0] != undefined) {
        header[0].style.backgroundColor = "transparent";
      }
    }
  }, []);
  return (
    <div>
      <h1>About</h1>
    </div>
  );
};

export default AboutPage;

"use client";
import { useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";

const Section = styled.section`
  padding-bottom: 130px;
  background: url("/bg_sec01.png") no-repeat top right;
  background-size: 700px;
`;

const SectionInner = styled.div`
  padding-top: 100px;
  position: relative;
`;

const SectionTxt = styled.p`
  font-size: 70px;
  font-weight: 900;
  line-height: 80px;
`;

const SectionSubTxt = styled.p`
  margin-top: 90px;
  font-size: 28px;
  font-weight: 600;
  line-height: 50px;
`;

export default function Page(): JSX.Element {
  useEffect(() => {
    document.body.style.background = "#000";
    document.body.style.color = "#fff";
  }, []);
  return (
    <Section>
      <SectionInner>
        <SectionTxt>
          오프라인 광고에
          <br />
          DB를 더하다
        </SectionTxt>
        <Image
          src={"/img_sec01.png"}
          alt={"img_sec01"}
          width={362}
          height={107}
        />
        <SectionSubTxt>
          오프라인에서의 데이터 전화, <br />
          보다 효율적인 광고 성과를 경험해 보세요.
        </SectionSubTxt>
      </SectionInner>
    </Section>
  );
}

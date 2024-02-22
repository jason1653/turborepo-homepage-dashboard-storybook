"use client";
import { useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";

const Section = styled.section`
  padding-bottom: 130px;
  background: url("/bg_sec01.png") no-repeat top right;
  background-size: 700px;

  @media (min-width: 769px) and (max-width: 1100px) {
    background-size: 450px;
  }

  @media (max-width: 768px) {
    padding-bottom: 450px;
    border-bottom: 2px solid #c7da01;
    background: url("/bg_sec01.png") no-repeat bottom center;
    background-size: 444px;
  }
`;

const SectionInner = styled.div`
  padding-top: 150px;
  position: relative;

  @media (min-width: 769px) and (max-width: 1100px) {
    padding-top: 80px;
  }

  @media (max-width: 768px) {
    padding-top: 0;
  }
`;

const SectionTxt = styled.p`
  margin: 0;
  font-size: 70px;
  font-weight: 900;
  line-height: 80px;

  @media (min-width: 769px) and (max-width: 1100px) {
    font-size: 40px;
    line-height: 50px;
  }

  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 42px;
  }
`;

const SectionLogoImg = styled(Image)`
  padding-top: 40px;
  @media (min-width: 769px) and (max-width: 1100px) {
    padding-top: 30px;
    width: 212px;
    height: auto;
  }

  @media (max-width: 768px) {
    padding-top: 20px;
    width: 152px;
    height: auto;
  }
`;

const SectionSubTxt = styled.p`
  margin-top: 110px;
  font-size: 28px;
  font-weight: 600;
  line-height: 50px;

  @media (min-width: 769px) and (max-width: 1100px) {
    font-size: 24px;
    line-height: 35px;
    margin-top: 85px;
  }

  @media (max-width: 768px) {
    margin-top: 40px;
    font-size: 20px;
    line-height: 30px;
  }
`;

const O2OSection = styled.section`
  margin-top: 80px;
  color: #fff;
`;

const O2OSectionInner = styled.div``;

const O2OSectionTitle = styled.h2`
  font-size: 64px;
  font-weight: 900;
  letter-spacing: -1px;

  strong {
    color: #c7da01;
    font-weight: 900;
  }

  @media (min-width: 769px) and (max-width: 1100px) {
    font-size: 48px;
    letter-spacing: -0.7px;
  }

  @media (max-width: 768px) {
    font-size: 36px;
    letter-spacing: -0.4px;
  }
`;

const O2OSectionSubTxt = styled.p`
  font-size: 22px;
  line-height: 40px;
  font-weight: 600;

  @media (min-width: 769px) and (max-width: 1100px) {
    font-size: 20px;
    line-height: 30px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 26px;
  }
`;

const O2OImgInner = styled.div`
  position: relative;
  margin-top: 54px;
  text-align: right;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const O2OImg1 = styled(Image)`
  position: relative;
  margin-right: -70px;
  z-index: 2;
  width: calc(100% - 40% - 20%);
  height: auto;
  @media (max-width: 768px) {
    margin-top: 50px;
    margin-right: 0;
    width: calc(100% - 20%);
  }
`;

const O2OImg2 = styled(Image)`
  position: relative;
  margin-top: 54px;
  text-align: right;
  width: calc(100% - 40% - 20%);
  height: auto;

  @media (max-width: 768px) {
    margin-top: 20px;
    width: calc(100% - 20%);
  }
`;

const O2OAdSection = styled.section`
  position: relative;
`;

const O2OAdInner = styled.div`
  :before {
    //background: url("/bg_sec02.png") no-repeat top right;
    //background-size: contain;
    content: "";
    position: absolute;
    top: -300px;
    right: -100px;
    width: calc(100% - 150px);
    height: 1000px;
    background: url(/bg_sec02.png) no-repeat top right;
    -webkit-background-size: contain;
    background-size: contain;
    z-index: -1;
  }

  @media (min-width: 769px) and (max-width: 1100px) {
    :before {
      top: -200px;
    }
  }

  @media (max-width: 768px) {
    :before {
      top: -120px;
      right: 0;
    }
  }
`;

const O2OAdTitle = styled.h2`
  font-size: 64px;
  line-height: 80px;
  margin-top: 200px;

  strong {
    color: #c7da01;
    font-weight: 900;
  }

  @media (min-width: 769px) and (max-width: 1100px) {
    font-size: 48px;
    line-height: 60px;
    margin-top: 150px;
  }

  @media (max-width: 768px) {
    font-size: 36px;
    line-height: 40px;
    margin-top: 100px;
  }
`;

const O2OAdSubTxt = styled.p`
  margin-top: 100px;
  font-size: 32px;
  font-weight: 600;
  line-height: 60px;

  @media (min-width: 769px) and (max-width: 1100px) {
    font-size: 28px;
    margin-top: 60px;
  }

  @media (max-width: 768px) {
    margin-top: 30px;
    font-size: 24px;
  }
  padding-bottom: 500px;
`;

export default function Page(): JSX.Element {
  useEffect(() => {
    document.body.style.background = "#000";
    document.body.style.color = "#fff";

    const header = document.getElementsByTagName("header");
    if (header.length > 0) {
      if (header[0] != undefined) {
        header[0].style.backgroundColor = "#000";
      }
    }
  }, []);
  return (
    <>
      <Section>
        <SectionInner>
          <SectionTxt>
            오프라인 광고에
            <br />
            DB를 더하다
          </SectionTxt>
          <SectionLogoImg
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
      <O2OSection>
        <O2OSectionInner>
          <O2OSectionTitle>
            O2O마케팅 전문 브랜드<strong>PRLO</strong>
          </O2OSectionTitle>
          <O2OSectionSubTxt>
            오프라인 광고파트너 광고 DID를 통해
            <br />
            브랜딩 광고부터 CPA광고까지 클릭 한 번으로
            <br />
            혁신적인 온오프 통합 광고솔루션 PRLO
          </O2OSectionSubTxt>
        </O2OSectionInner>
        <O2OImgInner>
          <O2OImg1
            src={"/img_sec02_1.png"}
            width={678}
            height={383}
            alt={""}
          ></O2OImg1>

          <O2OImg2
            src={"/img_sec02_2.png"}
            width={809}
            height={650}
            alt={""}
          ></O2OImg2>
        </O2OImgInner>
      </O2OSection>
      <O2OAdSection>
        <O2OAdInner>
          <O2OAdTitle>
            <strong>O2O AD</strong>
            <br />
            광고 성과, <strong>DB</strong>로 판단하다
          </O2OAdTitle>
          <O2OAdSubTxt>퍼미션 스킬을 통해 DB 품질 UP</O2OAdSubTxt>
        </O2OAdInner>
      </O2OAdSection>
    </>
  );
}

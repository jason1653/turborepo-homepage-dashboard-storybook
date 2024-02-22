"use client";
import { useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";

const AboutSection = styled.section`
  padding-top: 40px;

  @media (min-width: 769px) and (max-width: 1100px) {
    padding-top: 20px;
  }

  @media (max-width: 768px) {
    padding-top: 0px;
  }
`;

const AboutInner = styled.div``;

const AboutTitle = styled.h2`
  font-size: 70px;
  font-weight: 900;

  @media (min-width: 769px) and (max-width: 1100px) {
    font-size: 50px;
  }

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const AboutSubTxt = styled.p`
  font-size: 48px;
  font-weight: 600;
  line-height: 50px;

  @media (min-width: 769px) and (max-width: 1100px) {
    font-size: 40px;
    line-height: 42px;
  }

  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 35px;
  }
`;

const AboutSubTxt2 = styled.p`
  margin-top: 250px;
  font-size: 32px;
  font-weight: 500;
  line-height: 45px;

  @media (min-width: 769px) and (max-width: 1100px) {
    margin-top: 150px;
    font-size: 28px;
    line-height: 40px;
  }

  @media (max-width: 768px) {
    margin-top: 100px;
    font-size: 20px;
    line-height: 30px;
  }
`;

const AboutNoteContainer = styled.div`
  margin-top: 254px;
  padding-top: 113px;
  position: relative;
  border-top: 5px solid #000;
  z-index: 10;

  @media (min-width: 769px) and (max-width: 1100px) {
    margin-top: 170px;
    padding-top: 380px;
    text-align: center;
  }

  @media (max-width: 768px) {
    margin-top: 130px;
    padding-top: 300px;
    text-align: center;
  }
`;

const AboundNoteInner = styled.div`
  &:before {
    content: "";
    position: absolute;
    top: -160px;
    right: -60px;
    background: url(/sub02_img_sec01.png) no-repeat top center;
    background-size: 1200px;
    width: 100%;
    height: 1000px;
    z-index: -1;
  }

  @media (min-width: 769px) and (max-width: 1100px) {
    &:before {
      content: "";
      top: -110px;
      right: -40px;
      background-size: 800px;
      width: 800px;
      z-index: -1;
    }
  }

  @media (max-width: 768px) {
    &:before {
      content: "";
      top: -100px;
      right: -35px;
      background-size: 700px;
      width: 700px;
      z-index: -1;
    }
  }
`;

const AbountNoteTxt = styled.p`
  content: "";
  font-size: 32px;
  font-weight: 500;
  line-height: 50px;
  color: #000;
  z-index: 11;

  @media (min-width: 769px) and (max-width: 1100px) {
    font-size: 28px;
    line-height: 40px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 30px;
  }
`;

const AboutNoteTxt2 = styled.p`
  font-size: 32px;
  font-weight: 500;
  line-height: 60px;
  color: #000;
  text-align: center;
  margin-top: 500px;

  @media (min-width: 769px) and (max-width: 1100px) {
    margin-top: 100px;
    font-size: 28px;
    line-height: 40px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 30px;
    margin-top: 90px;
  }
`;

const AboutDidContainer = styled.div`
  text-align: center;
`;

const AboutDidImg = styled(Image)`
  width: calc(100% - 30%);
  height: auto;
  padding-top: 100px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    padding-top: 50px;
  }
`;

const AboutPage = () => {
  const handlerScroll = () => {
    const position = window.scrollY;
    if (position > 1) {
      const header = document.getElementsByTagName("header");
      if (header.length > 0) {
        if (header[0] != undefined) {
          header[0].style.backgroundColor = "#C7DA01";
          header[0].style.color = "#fff";
        }
      }
    } else {
      const header = document.getElementsByTagName("header");
      if (header.length > 0) {
        if (header[0] != undefined) {
          header[0].style.backgroundColor = "rgba(200, 218, 3, 0.2)";
        }
      }
    }
  };

  useEffect(() => {
    document.body.style.background =
      "#C7DA01 url(/sub02_bg_sec01.png)no-repeat top center";
    document.body.style.backgroundSize = "100%";

    const header = document.getElementsByTagName("header");
    if (header.length > 0) {
      if (header[0] != undefined) {
        header[0].style.backgroundColor = "rgba(200, 218, 3, 0.2)";
      }
    }

    window.addEventListener("scroll", handlerScroll);
    return () => {
      window.removeEventListener("scroll", handlerScroll);
    };
  }, []);
  return (
    <div>
      <AboutSection>
        <AboutInner>
          <AboutTitle>
            광고가 필요할 땐,
            <br />
            PRLO와 함께 하세요.
          </AboutTitle>
          <AboutSubTxt>About PRLO</AboutSubTxt>
          <AboutSubTxt2>
            오프라인 광고시스템 PRLO를 통해 광고주에게 부담없는 광고비로
            <br />
            지역 타켓 마케팅 및 실시간 광고시스템을 제공합니다.
            <br />
            광고파트너에게는 각종 온라인 마케팅을 제공하며
            <br />
            광고주의 광고를 노출하고 광고 매출 수익 및 결제기기를 제공합니다.
          </AboutSubTxt2>
        </AboutInner>
        <AboutNoteContainer>
          <AboundNoteInner>
            <AbountNoteTxt>
              오프라인에 설치된 PRLO를 통해
              <br />
              온·오프라인 통합 마케팅을 진행 합니다.
            </AbountNoteTxt>
            <AboutNoteTxt2>
              단순 홍보가 아닌 고객 참여 홍보로 DB 수집
              <br />
              저렴한 광고비, 지역타겟설정, 퍼미션 센터를 통한 DB필터 기능까지
            </AboutNoteTxt2>
          </AboundNoteInner>
        </AboutNoteContainer>
        <AboutDidContainer>
          <AboutDidImg
            src={"/sub02_img_sec01_2.png"}
            width={1056}
            height={598}
            alt={"sub02_img_sec01_2"}
          ></AboutDidImg>
        </AboutDidContainer>
      </AboutSection>
    </div>
  );
};

export default AboutPage;

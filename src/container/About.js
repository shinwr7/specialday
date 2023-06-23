import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

import { Col, Container, Row } from "react-bootstrap";
import { FcLike } from "react-icons/fc";
import { useMediaQuery } from "react-responsive";
import japan_05 from "../assets/wrmj/japan_05.jpg";

function About() {
  const isPc = useMediaQuery({
    query: "(min-width:768px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  const [mode, setMode] = useState("");

  useEffect(() => {
    if (isPc) setMode("isPc");
    else if (isMobile) setMode("isMobile");
  }, [isMobile, isPc]);

  return (
    <CustomContainer id="About">
      <Row className="mt-5 title">
        <Col>
          <Title data-aos="fade-right" mode={mode}>
            About Us
          </Title>
        </Col>
      </Row>

      <Row className="content mt-5">
        <PhotoContainer className="col">
          <Portrait src={japan_05} mode={mode} />
        </PhotoContainer>

        <Col>
          <h2 style={{ fontWeight: "bold" }}>우리 커플은요</h2>
          <h4>만난지 1000일이 되었습니다 !</h4>

          <ContentContainer>
            <li className="Birth" style={{ display: "flex" }}>
              <IconContainer>
                <FcLike size="30" />
              </IconContainer>
              <div style={{ marginLeft: "24px" }}>
                <h5 style={{ margin: "0" }}>우리가 만난 날 :</h5>
                <p style={{ margin: "0", fontSize: "17px" }}>2020.09.26</p>
              </div>
            </li>
          </ContentContainer>          
        </Col>
      </Row>
      <Row className="mt-5 mb-5">
        <Col style={{ textAlign: "center" }}>
          <h4 style={{ fontWeight: "bold", marginBottom: "1rem" }}>
            
          </h4>
          <IntroduceText>                      

안녕 민지야? 우리가 만난지 이제 1000일째야 
<br />
가끔 표현이 서투르고 말도 잘 못해서 답답한 나를  
<br />
사랑해주고 아껴줘서 고맙고 미안해
<br />
1000일동안 나를 겪으니 이제는 좀 익숙해지는 모습에 
<br />
내가 참 다행이라 느껴 ㅋㅋ
<br />
앞으로 더 잘해볼게 .. 
<br />

거창한 이벤트랑 선물은 준비못했지만, 
<br />
여기 우리만의 웹사이트에 앞으로 생길 추억들 많이 저장하자
<br />
            <br />
            <br />
- 1000일을 기념하며 
  민지를 사랑하는 우람이가
            
            <br />
            
          </IntroduceText>
        </Col>
      </Row>
    </CustomContainer>
  );
}

const CustomContainer = styled(Container)`
  padding-top: 90px;
  margin-top: 30px;
  padding-bottom: 70px;
`;

const Title = styled.h1`
  font-size: 45px;
  ${(props) =>
    props.mode === "isPc"
      ? css``
      : css`
          text-align: center;
        `}
`;

const Portrait = styled.img`
  object-fit: cover;
  border-radius: 50%;
  ${(props) =>
    props.mode === "isPc"
      ? css`
          width: 500px;
        `
      : css`
          width: 350px;
        `};
`;

const ContentContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 20px;
`;

const IconContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PhotoContainer = styled.div`
  text-align: center;
  align-self: center;
`;

const IntroduceText = styled.p`
  text-align: center;
  font-size: 20px;
`;

const A = styled.h1`
  font-weight: bold;
  color: #000080;
  display: inline;
  font-size: 45px;
  text-decoration: underline;
  text-decoration-color: #000080;
`;

const Anchor = styled.a`
  margin: 0;
  font-size: 17px;
  color: black;

  &:hover {
    color: black;
  }
`;

export default About;

import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import styled, { css } from "styled-components";
import japan_01 from "../assets/wrmj/japan_01.jpg";

function Home() {
  let [mode, setMode] = useState("");
  let [quotesCnt, setQuotesCnt] = useState(0);
  const quotes = [
    `항상 재밌는`,
    `행복한`,
    "때로는 함께 울어줄 수 있는",
    "언제나 함께하는",
    "이젠 미래를 약속하는",    
  ];

  const mobileQuotes = [
    `항상 재밌는`,
    `행복한`,
    "때로는 함께 울어줄 수 있는",
    "언제나 함께하는",
    "이젠 미래를 약속하는",  
  ];
  const isPc = useMediaQuery({
    query: "(min-width:768px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  useEffect(() => {
    if (isPc) setMode("isPc");
    else if (isMobile) setMode("isMobile");
  }, [isMobile, isPc]);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuotesCnt((c) => (c + 1) % quotes.length);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [quotes.length]);

  return (
    <>
      <JumbotronContainer id="Home">
        <Image>
          <Contents pos={"leftTop"} mode={mode}>
            1000일 동안, 그리고
          </Contents>
          {mode === "isPc"
            ? quotes.map((quote, index) => (
                <Quotes
                  stat={index === quotesCnt ? "active" : "hide"}
                  mode={mode}
                >
                  '{quote}'
                </Quotes>
              ))
            : mobileQuotes.map((quote, index) => (
                <Quotes
                  stat={index === quotesCnt ? "active" : "hide"}
                  mode={mode}
                >
                  '{quote}'
                </Quotes>
              ))}
          <Contents pos={"rightBot"} mode={mode}>
           우리만의 러브스토리
          </Contents>
        </Image>
      </JumbotronContainer>
    </>
  );
}

const JumbotronContainer = styled.div`
  position: relative;
  z-index: auto;
`;

const Image = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: space-between;
  flex-direction: column;

  background-attachment: fixed;
  background-image: url(${japan_01});
  background-repeat: no-repeat;
  background-size: cover;
`;

const Contents = styled.h1`
  font-size: ${(props) => (props.mode === "isPc" ? "48px" : "36px")};
  color: white;
  text-align: ${(props) => (props.pos === "rightBot" ? "right" : "")};

  ${(props) =>
    props.mode === "isPc" && props.pos === "leftTop"
      ? css`
          margin: 205px 0 0 265px;
        `
      : null};
  ${(props) =>
    props.mode === "isPc" && props.pos === "rightBot"
      ? css`
          margin: 0 265px 150px 0;
        `
      : null};

  ${(props) =>
    props.mode === "isMobile" && props.pos === "leftTop"
      ? css`
          margin: 165px 0 0 2rem;
        `
      : null};
  ${(props) =>
    props.mode === "isMobile" && props.pos === "rightBot"
      ? css`
          margin: 0 2rem 110px 0;
        `
      : null};

  display: inline-flex;
  justify-content: ${(props) => (props.pos === "rightBot" ? "end" : "")};
`;

const Quotes = styled.h1`
  font-size: ${(props) => (props.mode === "isPc" ? "40px" : "28px")};
  white-space: pre-line;
  text-align: center;
  color: white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  margin: 0;

  margin-top: 25px;

  transition: opacity 0.5s ease-out;

  ${(props) =>
    props.stat === "active"
      ? css`
          display: inline-block;
          opacity: 1;
        `
      : css`
          opacity: 0;
        `}
`;

export default Home;

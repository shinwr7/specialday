import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Project from "../components/Project";

import jeju_01 from "../assets/wrmj/jeju_01.jpg";
import jeju_02 from "../assets/wrmj/jeju_02.jpg";
import jeju_03 from "../assets/wrmj/jeju_03.jpg";
import jeju_04 from "../assets/wrmj/jeju_04.jpg";
import jeju_05 from "../assets/wrmj/jeju_05.jpg";
import jeju_06 from "../assets/wrmj/jeju_06.jpg";

import Gumi_01 from "../assets/wrmj/Gumi_01.jpg";
import Gumi_02 from "../assets/wrmj/Gumi_02.jpg";
import cb_01 from "../assets/wrmj/cb_01.jpg";
import cb_02 from "../assets/wrmj/cb_02.jpg";
import japan_01 from "../assets/wrmj/japan_01.jpg";
import japan_03 from "../assets/wrmj/japan_03.jpg";
import japan_04 from "../assets/wrmj/japan_04.jpg";
import japan_05 from "../assets/wrmj/japan_05.jpg";
import seoul_01 from "../assets/wrmj/seoul_01.jpg";
import seoul_02 from "../assets/wrmj/seoul_02.jpg";
import wedding_01 from "../assets/wrmj/wedding_01.jpg";
import wedding_02 from "../assets/wrmj/wedding_02.jpg";
import wedding_03 from "../assets/wrmj/wedding_03.jpg";
import wedding_04 from "../assets/wrmj/wedding_04.jpg";




function ProjectContainer() {
  const projects = [
    {
      id: 1,
      name: "제주도 여행",
      info: `우리의 첫번째 여행!
      제주도 밤바다 보면서 서로 꼭 안아주었던 소중한 추억을 만들었어
      우리가 좋아하는 맛집들도 많이 갔었고
      특히, 석양이 잘 보이는 카페에서 너무 행복했어
      
      태풍처럼 비바람 부는데 편의점에서 라면을 참 맛있게도 먹었지 ㅋㅋ`,
      tag: ["#첫여행", "#맛집", "#카페", "#석양", "#편의점"],
      image: [
        jeju_01,
        jeju_02,
        jeju_03,
        jeju_04,
        jeju_05,
        jeju_06,      
      ],      
      mode: "web",      
    },

    {
      id: 2,
      name: "서울, 구미에서의 일상",
      info: `반지하 방에서도 행복했었던 우리,
      이제는 반지하로 들어가지 말자~
      서울에서 우리 춘배를 처음 만났었지 
      처음엔 참 무서웠는데, 이젠 이렇게 귀여울 줄이야
      새로 이사온 구미의 빌라는 우리에겐 축복이었어`,

      tag: [
        "#서울",
        "#반지하",
        "#춘배와의 첫만남",       
      ],
      image: [seoul_01, seoul_02, cb_01, cb_02, Gumi_01, Gumi_02],     
      mode: "web",
      
    },

    {
      id: 3,
      name: "일본 후쿠오카 여행",
      info: `우리의 첫 해외여행!
      여러 맛집들도 다니고, 유리공 돌리는 공연도 보고
      제일 기억에 남았던건 마지막날 밤에 즉흥으로 갔던 이자카야!
      우리는 역시 즉흥여행을 해야해 ㅋㅋ 
      호텔 안에 온천도 너무 좋았어 그치?`,
      tag: [
        "#후쿠오카",
        "#사실상 온천여행",
        "#스시",
        "#소고기",
        "#이자카야",
        "#다리개아픔",       
      ],
      image: [japan_01, japan_03, japan_04, japan_05],
     
      mode: "app",
      
    },
    {
      id: 4,
      name: "웨딩촬영",
      info: `대망의 웨딩촬영!
      혹여나 늦을까봐, 달려서 왔드만 늦는다고 전화온 실장님ㅋㅋ
      그래서 미리 아침에 카페에서 커피사서 스튜디오 입장
      웨딩 드레스 입은 민지가 넘 예뻤던 하루
      진짜 너무 힘들었지만 결과가 좋아서 다행이야 
      촬영까지 하니 드디어 실감이 좀 난다고 말하던 민지
      앞으로 잘 살자 !!ㅎㅎ `,
      tag: [
        "#배고파",
        "#입꼬리아파",
        "#민지다리아파",
        "#신부가아깝긴하네",
        "#옥상촬영개오바",
        
      ],
      image: [wedding_01, wedding_02, wedding_03, wedding_04],
     
      mode: "app",
      
    },
  ];

  let [mode, setMode] = useState("");

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

  return (
    <>
      <Project projects={projects} mode={mode} />
    </>
  );
}

export default ProjectContainer;

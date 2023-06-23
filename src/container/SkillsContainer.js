import React from "react";
import Skills from "../components/Skills";

import lolIcon from "../assets/favorite/lol-icon.png"
import netIcon from "../assets/favorite/netflix-icon.png"
import pupIcon from "../assets/favorite/puppy-icon.png"
import resIcon from "../assets/favorite/restaurant-icon.png"
import travIcon from "../assets/favorite/travel-icon.png"
import camIcon from "../assets/favorite/camera-icon.png"

function SkillsContainer() {
  const skills = [
    { name: "게임", icon: lolIcon},
    { name: "넷플릭스", icon: netIcon },
    { name: "강아지", icon: pupIcon },
    { name: "맛집", icon: resIcon },
    { name: "여행", icon: travIcon },
    { name: "사진", icon: camIcon },
    
  ];
  return <Skills skills={skills} />;
}

export default SkillsContainer;

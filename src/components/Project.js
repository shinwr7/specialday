import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styled, { css } from "styled-components";

function ProjectPresenter({ projects, mode }) {
  const isPc = useMediaQuery({
    query: "(min-width:768px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  const [screen, setScreen] = useState("");

  useEffect(() => {
    if (isPc) setScreen("isPc");
    else if (isMobile) setScreen("isMobile");
  }, [isMobile, isPc]);

  let settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };
  return (
    <>
      <hr />
      <CustomContainer id="Project">
        <Row className="mt-5 title">
          <Col>
            <Title data-aos="fade-right" screen={screen}>
              Love Diary
            </Title>
          </Col>
        </Row>

        {projects.map((project, index) => (
          <Row className="mt-5 mb-5" key={index}>
            <Col>
              <ProjectContainer mode={mode}>
                <CarouselContainer className="mb-3 ">
                  <Slider {...settings}>
                    {project.image.map((img, index) => (
                      <CarouselItem className="mt-3" key={index}>
                        <ProjectImage src={img} mode={project.mode} />
                      </CarouselItem>
                    ))}
                  </Slider>
                </CarouselContainer>

                <ProjectInfo>
                  <ProjectName mode={mode}>{project.name}</ProjectName>
                  <ProjectContents mode={mode}>{project.info}</ProjectContents>               

                  <TagContainer mode={mode}>
                    {project.tag.map((tag, index) => (
                      <ProjectTag key={index} mode={mode}>
                        {tag}
                      </ProjectTag>
                    ))}
                  </TagContainer>                
                </ProjectInfo>
              </ProjectContainer>
            </Col>
          </Row>
        ))}
      </CustomContainer>
    </>
  );
}

const CustomContainer = styled(Container)`
  padding-top: 90px;
  margin-top: 30px;
`;

const Title = styled.h1`
  font-size: 45px;
  ${(props) =>
    props.screen === "isPc"
      ? css``
      : css`
          text-align: center;
        `}
`;

const ProjectContainer = styled.div`
  text-align: center;
  background: white;
  border-radius: 1rem;

  border: 1px solid #ced4da;
`;

const CarouselContainer = styled.div`
  text-align: -webkit-center;
`;

const CarouselItem = styled.div``;

const ProjectImage = styled.img`
  ${(props) =>
    props.mode === "app"
      ? css`
          height: 500px;
        `
      : css`
          width: 100%;
        `}
`;

const ProjectInfo = styled.div`
  text-align: center;
  margin: 0 auto;
  margin-top: 2rem;
  padding: 12px;
`;

const ProjectName = styled.h1`
  ${(props) =>
    props.mode === "isPc"
      ? css`
          font-size: 26px;
          font-weight: bold;
        `
      : css`
          font-size: 20px;
        `}
`;

const ProjectContents = styled.pre`
  overflow: hidden;
  ${(props) =>
    props.mode === "isPc"
      ? css`
          font-size: 20px;
        `
      : css`
          font-size: 15px;
        `}
  white-space: pre-wrap;
  margin-bottom: 2.5rem;
`;

const TagContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2.5rem;
  align-items: center;

  &::before {
    ${(props) =>
      props.mode === "isPc"
        ? css`
            font-size: 20px;
          `
        : css`
            font-size: 15px;
          `}
    content:'Tag :';
    margin-right: 0.5rem;
    font-weight: bold;
  }
`;

const ProjectTag = styled.p`
  ${(props) =>
    props.mode === "isPc"
      ? css`
          font-size: 20px;
        `
      : css`
          font-size: 15px;
        `}
  background:#e9ecef;
  border-radius: 0.5rem;
  padding: 0 0.5rem 0 0.5rem;
  white-space: nowrap;
  display: inline-block;
  margin: 0.5rem;
  font-weight: bold;
`;

export default ProjectPresenter;

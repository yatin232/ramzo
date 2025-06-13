import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import graphicDesign from "../../assets/img/projects/graphic_design.jpg";
import digim from "../../assets/img/projects/digital_marketing.jpg";
import portfolio from "../../assets/img/projects/web_design_development.jpg";
import socm from "../../assets/img/projects/social_media.jpg";
import seo from "../../assets/img/projects/seo.jpg";

const projectData = [

  {
    img: graphicDesign,
    title: "Brand Identity Design",
    text: "Crafted a unique logo, brand color palette, and social media kit for a startup.",
  },
  {
    img: digim,
    title: "Digital Marketing Campaign",
    text: "Managed a successful SEO and Google Ads campaign to drive traffic and conversions.",
  },
  {
    img:portfolio,
    title: "Business Website",
    text: "Built a sleek and responsive business website for a small to medium business.",
  },
  {
    img: socm,
    title: "Social Media Branding",
    text: "Created engaging content templates and scheduled posts for Instagram and LinkedIn.",
  },
  {
    img:seo,
    title: "SEO Optimization",
    text: "Optimized multiple pages for higher search engine rankings using advanced SEO techniques.",
  },
];

export default function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Wrapper id="projects">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Our Latest Projects Using AI</h1>
            <p className="font13">
              Discover the real-world projects our agency has worked on—each crafted with precision, design, and growth in mind.
            </p>
          </HeaderInfo>
          <StyledSlider {...settings}>
            {projectData.map((project, index) => (
              <ProjectCard key={index}>
                <CardImage src={project.img} alt={project.title} />
                <CardOverlay>
                  <h3>{project.title}</h3>
                  <p>{project.text}</p>
                </CardOverlay>
              </ProjectCard>
            ))}
          </StyledSlider>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 60px 0;
`;

const HeaderInfo = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const StyledSlider = styled(Slider)`
  .slick-slide {
    padding: 0 10px;
  }
`;

const ProjectCard = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const CardOverlay = styled.div`
  position: absolute;
  bottom: 0;
  background: rgba(0, 0, 0, 0.75);
  color: #fff;
  width: 100%;
  padding: 20px;
  opacity: 0;
  transition: opacity 0.3s ease;
  ${ProjectCard}:hover & {
    opacity: 1;
  }
  h3 {
    margin: 0 0 10px;
    font-size: 20px;
  }
  p {
    font-size: 14px;
    margin: 0;
  }
`;

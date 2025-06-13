import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { FaLaptopCode, FaPaintBrush, FaBullhorn, FaUsers, FaShareAlt, FaMapMarkedAlt, FaSearch } from "react-icons/fa";

const services = [
  { icon: <FaLaptopCode />, title: "Web Design & Development" },
  { icon: <FaPaintBrush />, title: "Graphic Design" },
  { icon: <FaBullhorn />, title: "Digital Marketing" },
  { icon: <FaUsers />, title: "Influencer Marketing" },
  { icon: <FaShareAlt />, title: "Social Media" },
  { icon: <FaMapMarkedAlt />, title: "Google My Business" },
  { icon: <FaSearch />, title: "SEO" },
];

export default function Services() {
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
    <Wrapper id="services">
      <div className="whiteBg" style={{ padding: "60px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Our Services</h1>
            <p className="font13">
              Discover how our digital services can empower your brand in the modern world.
            </p>
          </HeaderInfo>
          <SliderWrapper>
            <Slider {...settings}>
              {services.map((service, index) => (
                <ServiceCard key={index}>
                  <Icon>{service.icon}</Icon>
                  <h3>{service.title}</h3>
                  <p>
                    Learn more about <strong>{service.title}</strong> and how it can benefit your business.
                  </p>
                </ServiceCard>
              ))}
            </Slider>
          </SliderWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;

const HeaderInfo = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const SliderWrapper = styled.div`
  .slick-slide {
    padding: 0 12px;
  }
`;

const ServiceCard = styled.div`
  background: #F8F8FF;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 24px;
  text-align: center;
  transition: all 0.3s ease;
  height: 100%;

  &:hover {
    transform: translateY(-10px) scale(1.03);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.15);
  }

  h3 {
    margin: 12px 0;
    font-size: 20px;
    color: #1a1a1a;
  }

  p {
    font-size: 14px;
    color: #555;
  }
`;

const Icon = styled.div`
  font-size: 36px;
  color: #007bff;
  margin-bottom: 12px;
`;
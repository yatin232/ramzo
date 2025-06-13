import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

import Sidebar from "../Nav/Sidebar";
import Backdrop from "../Elements/Backdrop";

import LogoIcon from "../../assets/svg/Logo";
import BurgerIcon from "../../assets/svg/BurgerIcon";

export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);

  useEffect(() => {
    const handleScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper style={{ height: y > 100 ? "60px" : "80px" }}>
  <NavInner className="container">
    <LeftGroup>
      <LogoWrapper to="home" smooth={true}>
        <LogoIcon />
        <h1 className="font20 extraBold" style={{ marginLeft: "10px" }}>RAMZO</h1>
      </LogoWrapper>
    </LeftGroup>

    <CenterGroup>
      <NavLinks>
        {["home", "services", "projects", "pricing", "contact"].map((link) => (
          <li key={link}>
            <Link
              activeClass="active"
              to={link}
              spy={true}
              smooth={true}
              offset={-80}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </Link>
          </li>
        ))}
      </NavLinks>
    </CenterGroup>

    <RightGroup>
      <WhatsAppLink
        href="https://wa.me/918586947991"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
        />
      </WhatsAppLink>

      <GetStartedLink href="/" className="get-started">Get Started</GetStartedLink>

      <Burger onClick={() => toggleSidebar(!sidebarOpen)}>
        <BurgerIcon />
      </Burger>
    </RightGroup>
  </NavInner>
</Wrapper>


    </>
  );
}
const Wrapper = styled.nav`
  width: 100%;
  background-color: white;
  position: fixed;
  top: 0;
  z-index: 999;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  transition: height 0.3s ease;
`;

const NavInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: inherit;
  padding: 0 20px;
`;

const LeftGroup = styled.div`
  display: flex;
  align-items: center;
`;

const CenterGroup = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const LogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;

  li a {
    text-decoration: none;
    font-weight: 600;
    font-size: 15px;
    color: #333;
    padding: 10px;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
      color: #007bff;
    }
  }
`;

const WhatsAppLink = styled.a`
  display: flex;
  align-items: center;

  img {
    width: 26px;
    height: 26px;
  }
`;

const GetStartedLink = styled.a`
  background-color: #f1f1f1;
  padding: 8px 15px;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    background-color: #e2e2e2;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Burger = styled.button`
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;


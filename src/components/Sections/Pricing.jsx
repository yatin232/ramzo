import React from "react";
import styled from "styled-components";
import PricingTable from "../Elements/PricingTable";

export default function Pricing() {
  return (
    <Wrapper id="pricing">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Choose Your Plan</h1>
            <p className="font16">
              Affordable web design and development plans for Indian startups, freelancers, and businesses. <br />
              Pay monthly and grow your digital presence.
            </p>
          </HeaderInfo>
          <TablesWrapper>
            <TableBox>
              <PricingTable
                icon="roller"
                price="₹1,999"
                title="Business"
                text="Ideal for personal portfolios, static websites, or basic business landing Page."
                offers={[
                  { name: "1-Page Website", cheked: true },
                  { name: "Basic SEO Setup", cheked: true },
                  { name: "Mobile Responsive", cheked: true },
                  { name: "Free Hosting", cheked: false },
                  { name: "Support (Whatsapp Only)", cheked: false },
                ]}action={() => window.location.href = "/"}
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="monitor"
                price="₹3,999"
                title="Business Pro"
                text="Perfect for businesses or service providers with dynamic content."
                offers={[
                  { name: "Up to 5 Pages", cheked: true },
                  { name: "Contact Form", cheked: true },
                  { name: "Free Domain (1 Year)*", cheked: true },
                  { name: "SEO Optimization", cheked: true },
                  { name: "Support (Whatsapp & Email)", cheked: false },
                ]}
                action={() => window.location.href = "/"}

              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="browser"
                price="₹6,999"
                title="Business Premium^"
                text="Best for e-commerce, booking systems, and high-end sites."
                offers={[
                  { name: "Unlimited Pages*", cheked: true },
                  { name: "Admin Dashboard", cheked: true },
                  { name: "Payment Gateway", cheked: true },
                  { name: "Blog Integration", cheked: true },
                  { name: "Priority Support", cheked: true },
                ]}
                action={() => window.location.href = "/"}

              />
            </TableBox>
          </TablesWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 80px 0;
  background: #FFFAF0;
`;

const HeaderInfo = styled.div`
  margin-bottom: 60px;
  text-align: center;

  h1 {
    font-size: 40px;
    font-weight: 800;
    color: #222;
  }

  p {
    font-size: 16px;
    color: #666;
    line-height: 1.6;
  }
`;

const TablesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 860px) {
    flex-direction: column;
    align-items: center;
  }
`;

const TableBox = styled.div`
  width: 31%;
  background: white;
  border-radius: 12px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 860px) {
    width: 100%;
    max-width: 400px;
  }
`;

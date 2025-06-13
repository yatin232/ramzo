import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import FullButton from "../Buttons/FullButton";
import ContactAnimation from "../ContactAnimation";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", contact: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_zgs2k3o";
    const userId = "xO-xfpwLFqeHMjpMp";
    const template1 = "template_j7uj18v";
    const template2 = "template_28e2veq";

    Promise.all([
      emailjs.send(serviceId, template1, formData, userId),
      emailjs.send(serviceId, template2, formData, userId),
    ])
      .then(() => {
        setSubmitted(true);
        setFormData({ name: "", email: "", contact: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Failed to send enquiry. Please try again.");
      });
  };

  return (
    <Wrapper id="contact">
      <div className="lightBg">
        <p>*terms & conditions apply;
          ^Coming soon..
        </p>
        <div className="container">
          <MainContactSection>
            <FlexContainer>
              <FormContainer>
                <HeaderInfo>
                  <h1 className="font40 extraBold">Let's get in touch</h1>
                  <p className="font13">
                    Fill out the enquiry form, and we'll get back to you shortly.
                  </p>
                </HeaderInfo>

                {submitted ? (
                  <p style={{ fontSize: "1.2rem", color: "green" }}>
                    ✅ Thank you! Your enquiry has been sent.
                  </p>
                ) : (
                  <Form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                    <input
                      type="tel"
                      pattern="\d{10}"
                      maxLength={10}
                      inputMode="numeric"
                      placeholder="Contact Number"
                      value={formData.contact}
                      onChange={(e) => {
                        const input = e.target.value;
                        if (/^\d{0,10}$/.test(input)) {
                          setFormData({ ...formData, contact: input });
                        } else {
                          alert("Please enter only 10 digits (numbers only).");
                        }
                      }}
                      required
                    />
                    <textarea
                      placeholder="Your Message"
                      rows="4"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                    <FullButton type="submit" title="submit" value="Submit" className="pointer animate radius8">
                      submit
                    </FullButton>
                    <MapWrapper>
                    <iframe
  title="Google Map"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.6309682403507!2d77.44052402636461!3d28.610845685063573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce8ba9a610f87%3A0x4ff67ae7d59da086!2sSupertech%20Ecovillage%202!5e0!3m2!1sen!2sin!4v1749660191801!5m2!1sen!2sin"
  width="100%"
  height="500"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

                    </MapWrapper>
                  </Form>
                )}
              </FormContainer>

              <ImageContainer>
                <ContactAnimation />
              </ImageContainer>
            </FlexContainer>
          </MainContactSection>

          <InfoCards className="row">
            <InfoCard className="col-md-4 col-sm-12">
              <h4>📞 Call Us</h4>
              <p>+91 8586947991</p>
            </InfoCard>
            <InfoCard className="col-md-4 col-sm-12">
              <h4>📍 Address</h4>
              <p> SuperTech EcoVillage 2 , Greater Noida, Uttar Pradesh</p>
            </InfoCard>
            <InfoCard className="col-md-4 col-sm-12">
              <h4>📧 Email</h4>
              <p>ramzowebbusiness@gmail.com</p>
            </InfoCard>
          </InfoCards>

          <SocialSlider>
            <h3>Follow us on</h3>
            <SliderContainer>
            <SocialCard href="/" target="_blank"><FaFacebookF size={24} /></SocialCard> 
              <SocialCard href="/" target="_blank"><FaInstagram size={24} /></SocialCard>
              <SocialCard href="/" target="_blank"><FaLinkedinIn size={24} /></SocialCard>
              <SocialCard href="/" target="_blank"><FaTwitter size={24} /></SocialCard>
              <SocialCard href="/" target="_blank"><FaYoutube size={24} /></SocialCard>
            </SliderContainer>
          </SocialSlider>
        </div>
      </div>
    </Wrapper>
  );
}


const Wrapper = styled.section`width: 100%;`;
const MainContactSection = styled.div`padding: 50px 0;`;
const FlexContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
  @media (max-width: 768px) {
    gap: 1.5rem;
    padding: 0 20px;
  }
`;
const FormContainer = styled.div`
  flex: 1;
  max-width: 500px;
  width: 100%;
  @media (max-width: 1024px) {
    max-width: 600px;
  }
`;
const ImageContainer = styled.div`
  flex: 1;
  max-width: 500px;
  width: 100%;
  height: auto; 
  display: flex;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: 1024px) {
    max-width: 600px;
  }
  @media (max-width: 768px) {
    order: -1;
    max-width: 100%;
  }
`;
const HeaderInfo = styled.div`
  padding-bottom: 30px;
  h1 {
    margin-bottom: 15px;
    font-size: 2.5rem;
    font-weight: 800;
    color: #333;
  }
  p {
    font-size: 1.1rem;
    color: #666;
    line-height: 1.6;
  }
  @media (max-width: 768px) {
    text-align: center;
    h1 { font-size: 2rem; }
    p { font-size: 1rem; }
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    border-bottom: 2px solid #e0e0e0;
    height: 45px;
    padding: 10px 0;
    font-size: 16px;
    transition: border-color 0.3s ease;
    &:focus {
      border-bottom-color: #7620ff;
    }
    &::placeholder {
      color: #999;
    }
  }
  textarea {
    height: 120px;
    resize: vertical;
    padding-top: 15px;
  }
  button {
    align-self: flex-start;
    margin-top: 10px;
  }
`;
const MapWrapper = styled.div`
  margin: 50px 0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
`;
const InfoCards = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 0;
  flex-wrap: wrap;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
const InfoCard = styled.div`
  background: #f9f9f9;
  padding: 25px;
  border-left: 4px solid #7620ff;
  border-radius: 12px;
  flex: 1;
  min-width: 250px;
  max-width: 300px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  }
  h4 {
    margin-bottom: 10px;
    color: #333;
    font-size: 1.1rem;
  }
  p {
    color: #666;
    margin: 0;
    font-size: 0.95rem;
  }
`;
const SocialSlider = styled.div`
  margin-top: 50px;
  text-align: center;
  h3 {
    margin-bottom: 25px;
    color: #333;
    font-size: 1.5rem;
  }
`;
const SliderContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;
const SocialCard = styled.a`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #7620ff, #580cd2);
  color: white;
  text-decoration: none;
  border-radius: 50%;
  transition: all 0.3s ease;
  font-size: 1.5rem;
  box-shadow: 0 5px 15px rgba(118, 32, 255, 0.3);
  &:hover {
    background: linear-gradient(135deg, #580cd2, #7620ff);
    transform: translateY(-3px) scale(1.1);
    box-shadow: 0 8px 25px rgba(118, 32, 255, 0.4);
  }
`;

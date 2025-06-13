import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";


import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Services from "../components/Sections/Services";
import Projects from "../components/Sections/Projects";
import Pricing from "../components/Sections/Pricing";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer"
import emailjs from "emailjs-com";

export default function Landing() {
  const [showForm, setShowForm] = useState(true);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    setShowForm(true); 
  }, []);

  
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
        alert("Thank you! Your enquiry has been sent.");
        setShowForm(false);
        setFormData({ name: "", email: "", contact: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Failed to send enquiry. Please try again.");
      });
  };
  
  

  return (
    <>
      <TopNavbar />
      <Header />
      <Services />
      <Projects />
      <Pricing />
      <Contact />
      <Footer />

      <a
  href="https://wa.me/918586947991"
  className="whatsapp_float"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaWhatsapp size={30} />
</a>


 {/* Enquiry Form Modal */}
 {showForm && (
        <div className="modalOverlay">
          <div className="modalContent">
            <button className="closeBtn" onClick={() => setShowForm(false)}>×</button>
            <h2>Enquiry Now</h2>
            <form onSubmit={handleSubmit}>
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
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}

      {/* Styles */}
      <style jsx>{`
        .whatsapp_float {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background-color: #25d366;
          color: white;
          border-radius: 50%;
          padding: 10px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
          z-index: 1000;
          transition: transform 0.3s ease;
        }
        .whatsapp_float:hover {
          transform: scale(1.1);
        }

        .modalOverlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 999;
        }

        .modalContent {
          background: white;
          padding: 30px;
          border-radius: 12px;
          width: 90%;
          max-width: 400px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
          position: relative;
          animation: slideIn 0.3s ease-out;
        }

        .modalContent h2 {
          margin-bottom: 20px;
          font-size: 24px;
          text-align: center;
        }

        .modalContent input,
        .modalContent textarea {
          width: 100%;
          padding: 10px;
          margin: 10px 0;
          border: 1px solid #ccc;
          border-radius: 8px;
          font-size: 16px;
        }

        .modalContent button {
          width: 100%;
          padding: 12px;
          background-color: #007bff;
          border: none;
          color: white;
          font-size: 16px;
          margin-top: 10px;
          border-radius: 8px;
          cursor: pointer;
        }

        .modalContent .closeBtn {
          position: absolute;
          top: 10px;
          right: -110px;
          background: transparent;
          color: #333;
          font-size: 28px;
          font-weight: bold;
          border: none;
          cursor: pointer;
          line-height: 1;
        }
        .modalContent .closeBtn:hover {
          color: red;
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}


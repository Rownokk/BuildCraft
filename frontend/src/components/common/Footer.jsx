import React, { useState, useEffect } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaChevronUp } from 'react-icons/fa';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show/hide button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-dark text-light py-5 position-relative">
      <div className="container">
        <div className="row">
          {/* Company Overview */}
          <div className="col-md-3 mb-4">
            <h3 className="fw-bold text-uppercase">BuildCraft</h3>
            <p className="text-secondary">
              Delivering excellence in construction with innovative solutions and 
              a commitment to quality. We stand by our work even after completion.
            </p>
          </div>

          {/* Services Section */}
          <div className="col-md-3 mb-4">
            <h3 className="fw-bold mb-3 text-uppercase">Our Services</h3>
            <ul className="list-unstyled">
              {['Specialty Construction', 'Project Management', 'Renovation Services', 'Consulting Services'].map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-light text-decoration-none text-secondary d-block py-1">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="col-md-3 mb-4">
            <h3 className="fw-bold mb-3 text-uppercase">Quick Links</h3>
            <ul className="list-unstyled">
              {[
                { name: 'About Us', link: '/about' },
                { name: 'Services', link: '/services' },
                { name: 'Projects', link: '/projects' },
                { name: 'Blog', link: '/blogs' },
                { name: 'Contact Us', link: '/contact' },
              ].map((item, index) => (
                <li key={index}>
                  <a href={item.link} className="text-light text-decoration-none text-secondary d-block py-1">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="col-md-3 mb-4">
            <h3 className="fw-bold mb-3 text-uppercase">Contact Us</h3>
            <ul className="list-unstyled">
              <li className="mb-2">
                <FaPhoneAlt className="me-2 text-primary" />
                <a href="tel:+188800000000" className="text-light text-decoration-none">
                  (888) 000-00000
                </a>
              </li>
              <li className="mb-2">
                <FaEnvelope className="me-2 text-primary" />
                <a href="mailto:buildcraft@example.com" className="text-light text-decoration-none">
                  buildcraft@example.com
                </a>
              </li>
            </ul>
            <p className="mb-0 text-secondary">
              <FaMapMarkerAlt className="me-2 text-primary" />
              20-8X Riverdell, Yonkers, NY 226017 <br />
              ZIP: 0522400XXXX
            </p>
          </div>
        </div>

        {/* Divider */}
        <hr className="bg-secondary" />

        {/* Footer Bottom Section */}
        <div className="text-center pt-3 text-secondary">
          &copy; 2025 BuildCraft. All Rights Reserved.
        </div>

        {/* Scroll to Top Button */}
        {isVisible && (
          <button
            className="scroll-to-top"
            onClick={scrollToTop}
          >
            <FaChevronUp />
          </button>
        )}
      </div>

      {/* Scroll to Top Button CSS */}
      <style>
        {`
          .scroll-to-top {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 50px;
            height: 50px;
            background: linear-gradient(45deg, #ff416c, #ff4b2b);
            color: white;
            border: none;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            cursor: pointer;
            box-shadow: 0px 4px 10px rgba(255, 75, 43, 0.4);
            transition: all 0.3s ease-in-out;
            opacity: 0.9;
          }

          .scroll-to-top:hover {
            transform: scale(1.1);
            box-shadow: 0px 6px 15px rgba(255, 75, 43, 0.6);
            opacity: 1;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;

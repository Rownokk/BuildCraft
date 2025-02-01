import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaUser, FaRegEnvelope, FaPhone, FaPen } from 'react-icons/fa';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Hero from '../common/Hero';

const ContactUs = () => {
  return (
    <>
      <Header />
      <main>
        <Hero
          preHeading="Quality. Integrity. Value."
          heading="Contact Us"
          text="We excel at transforming visions into reality through outstanding craftsmanship & precision."
        />

        <section className="section-9 py-5 bg-light">
          <div className="container">
            <div className="section-header text-center mb-5">
              <h2 className="fw-bold text-uppercase">Get in Touch</h2>
              <p className="text-muted">
                Our dedicated experts are here to help you. Fill out the form below, and we’ll be in touch shortly.
              </p>
            </div>

            <div className="row">
              {/* Contact Details Section */}
              <div className="col-md-4">
                <div className="card shadow-lg border-0 mb-4">
                  <div className="card-body text-center">
                    <h3 className="fw-bold mb-3">Contact Details</h3>
                    <p><FaPhoneAlt className="me-2 text-primary" /> <a href="tel:8880000000" className="text-dark" aria-label="Call us at 888-000-0000">(888) 000-0000</a></p>
                    <p><FaPhoneAlt className="me-2 text-primary" /> <a href="tel:22212312345" className="text-dark" aria-label="Call us at 222-123-12345">(222) 123-12345</a></p>
                    <p><FaEnvelope className="me-2 text-primary" /> <a href="mailto:example@example.com" className="text-dark" aria-label="Email us at example@example.com">example@example.com</a></p>
                    <p><FaEnvelope className="me-2 text-primary" /> <a href="mailto:info@example.com" className="text-dark" aria-label="Email us at info@example.com">info@example.com</a></p>
                    <p><FaMapMarkerAlt className="me-2 text-primary" /> 20-8x Riverdell, Yonkers, New York, 226017</p>
                  </div>
                </div>
              </div>

              {/* Contact Form Section */}
              <div className="col-md-8">
                <div className="card shadow-lg border-0">
                  <div className="card-body p-5">
                    <h3 className="fw-bold mb-4 text-center">Send Us a Message</h3>
                    <form>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <label htmlFor="name" className="form-label fw-bold"><FaUser className="me-2" />Name</label>
                          <input type="text" id="name" className="form-control form-control-lg" placeholder="Enter your name" required />
                        </div>
                        <div className="col-md-6 mb-4">
                          <label htmlFor="email" className="form-label fw-bold"><FaRegEnvelope className="me-2" />Email</label>
                          <input type="email" id="email" className="form-control form-control-lg" placeholder="Enter your email" required />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <label htmlFor="phone" className="form-label fw-bold"><FaPhone className="me-2" />Phone</label>
                          <input type="tel" id="phone" className="form-control form-control-lg" placeholder="Your phone number" required />
                        </div>
                        <div className="col-md-6 mb-4">
                          <label htmlFor="subject" className="form-label fw-bold"><FaPen className="me-2" />Subject</label>
                          <input type="text" id="subject" className="form-control form-control-lg" placeholder="Subject of your message" required />
                        </div>
                      </div>
                      <div className="mb-4">
                        <label htmlFor="message" className="form-label fw-bold"><FaPen className="me-2" />Message</label>
                        <textarea id="message" rows="5" className="form-control form-control-lg" placeholder="Write your message here..." required></textarea>
                      </div>
                      <div className="text-center">
                        <button  type="submit" className="btn btn-primary large mt-3">Submit</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactUs;

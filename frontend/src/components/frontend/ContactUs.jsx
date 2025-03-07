import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaUser, FaRegEnvelope, FaPhone, FaPen } from 'react-icons/fa';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Hero from '../common/Hero';
import { useForm } from 'react-hook-form';
import { apiUrl } from '../common/http';
import { toast } from 'react-toastify';
const ContactUs = () => {

  const {
          register,
          handleSubmit,
          watch,
          reset,
          formState: { errors },
        } = useForm();

  const onSubmit =async (data)=> {
    
    const res =await fetch(apiUrl+'contact-now',{
      method : 'POST',
      headers : {
          'content-type' : 'application/json'
      },
      body : JSON.stringify(data)
     });

     const result = await res.json();
     if(result.status == true){
         toast.success(result.message);
         reset();
     }else {
      toast.error(result.message);
     }
       
  }

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
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <label htmlFor="name" className="form-label fw-bold"><FaUser className="me-2" />Name</label>
                          <input type="text" id="name" 
                          {
                            ...register('name',{
                              required: "This name field is required"
                            })
                          }
                          className={`form-control form-control-lg ${errors.name && `is-invalid`}`} placeholder="Enter your name" />
                           {
                            errors.name && <p className='invalid-feedback'>{errors.name?.message}</p>
                          }
                        </div>
                        <div className="col-md-6 mb-4">
                          <label htmlFor="email" className="form-label fw-bold"><FaRegEnvelope className="me-2" />Email</label>
                          <input type="email" id="email" 
                            {
                              ...register('email', {
                                  required: "The email field is required",


                                  pattern: {
                                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                      message: 'Please enter a valid email address'
                                  }

                              })
                              }

                          className={`form-control form-control-lg ${errors.email && `is-invalid`}`} placeholder="Enter your email" />
                          {
                            errors.email && <p className='invalid-feedback'>{errors.email?.message}</p>
                          }
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <label htmlFor="phone" className="form-label fw-bold"><FaPhone className="me-2" />Phone</label>
                          <input type="tel" id="phone" 
                           {
                            ...register('phone')
                          }
                          className="form-control form-control-lg" placeholder="Your phone number"  />
                        </div>
                        <div className="col-md-6 mb-4">
                          <label htmlFor="subject" className="form-label fw-bold"><FaPen className="me-2" />Subject</label>
                          <input type="text" id="subject" 
                           {
                            ...register('subject')
                          }
                          className="form-control form-control-lg" placeholder="Subject of your message"/>
                        </div>
                      </div>
                      <div className="mb-4">
                        <label htmlFor="message" className="form-label fw-bold"><FaPen className="me-2" />Message</label>
                        <textarea 
                         {
                          ...register('message')
                        }
                        className="form-control form-control-lg" placeholder="Write your message here..."></textarea>
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

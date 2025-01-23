import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import { default as AboutNew } from '../common/About';
import MemberImg1 from '../../assets/images/Mowmita.jpg';
import MemberImg2 from '../../assets/images/jamila.jpg';
import MemberImg3 from '../../assets/images/authoi.jpg';
import Hero from '../common/Hero';

const About = () => {
  return (
    <>
      <Header />
      <main>
        <Hero 
          preHeading="Quality. Integrity. Value" 
          Heading="About Us"
          text="We excel at transforming visions into reality through outstanding craftsmanship & Precision."
        />
        <AboutNew />
        
        {/* Our Team Section */}
        <section className='section-8 bg-light py-5'>
          <div className='container'>
            <div className='section-header text-center'>
              <span>Team</span>
              <h2>Our Team</h2>
              <p>
                We offer a diverse array of construction services, spanning residential, commercial, and industrial projects.
              </p>
            </div>
            <div className='row pt-3'>
              {/* Team Member 1 */}
              <div className='col-md-6 col-lg-3 mb-3'>
                <div className='card shadow border-0'>
                  <div className='card-img-top'>
                    <img src={MemberImg1} alt='Team Member' className='w-100' />
                  </div>
                  <div className='card-body p-4'>
                    <div className='card-title'>Rownok Jahan Mowmita</div>
                    <div className='card-sub-title pb-0 mb-2'>Web Developer</div>
                    <a href='#'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              {/* Team Member 2 */}
              <div className='col-md-6 col-lg-3 mb-3'>
                <div className='card shadow border-0'>
                  <div className='card-img-top'>
                    <img src={MemberImg2} alt='Team Member' className='w-100' />
                  </div>
                  <div className='card-body p-4'>
                    <div className='card-title'>Jamila</div>
                    <div className='card-sub-title pb-0 mb-2'>Web Developer</div>
                    <a href='#'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              {/* Team Member 3 */}
              <div className='col-md-6 col-lg-3 mb-3'>
                <div className='card shadow border-0'>
                  <div className='card-img-top'>
                    <img src={MemberImg3} alt='Team Member' className='w-100' />
                  </div>
                  <div className='card-body p-4'>
                    <div className='card-title'>Authoi Chowdhury</div>
                    <div className='card-sub-title pb-0 mb-2'>Web Developer</div>
                    <a href='#'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513"/>
                      </svg>
                    </a>
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

export default About;





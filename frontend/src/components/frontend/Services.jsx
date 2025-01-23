import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Hero from '../common/Hero';
import ServiceImg from '../../assets/images/construction1.jpg';



const Services = () => {
  return (
    <>
      <Header />
      <Hero 
        preHeading="Quality. Integrity. Value" 
        Heading="Services"
        text="We excel at transforming visions into reality <br/> through outstanding craftsmanship & Precision."
      />
      <section className='section-3 bg-light py-5'>
        <div className='container-fluid py-5'>
          <div className='section-header text-center'>
            <span>Our Services</span>
            <h2>Our Construction Services</h2>
            <p>
              We build homes that reflect your style and needs, combining modern designs with durable construction techniques.
            </p>
          </div>
          <div className='row'>

            {/* Service Card 1 */}
            <div className='col-md-6 col-lg-3 mb-4'>
              <div className='item shadow border-0'>
                <div className='service-image'>
                  <img src={ServiceImg} alt="Service" className='w-100' />
                </div>
                <div className='service-body p-4'>
                  <div className='service-title'>
                    <h3>Speciality Construction</h3>
                    <div className='service-contain'>
                      <p>
                        We build homes that reflect your style and needs, combining modern designs with durable construction techniques.
                        From custom homes to renovations and remodels, we bring your dream home to reality.
                      </p>
                    </div>
                    <a href='#' className='btn btn-primary'>Read More</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className='col-md-6 col-lg-3 mb-4'>
              <div className='item shadow border-0'>
                <div className='service-image'>
                  <img src={ServiceImg} alt="Service" className='w-100' />
                </div>
                <div className='service-body p-4'>
                  <div className='service-title'>
                    <h3>Residential Construction</h3>
                    <div className='service-contain'>
                      <p>
                        Our residential projects prioritize comfort, energy efficiency, and timeless design to create lasting homes.
                      </p>
                    </div>
                    <a href='#' className='btn btn-primary small'>Read More</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className='col-md-6 col-lg-3 mb-4'>
              <div className='item shadow border-0'>
                <div className='service-image'>
                  <img src={ServiceImg} alt="Service" className='w-100' />
                </div>
                <div className='service-body p-4'>
                  <div className='service-title'>
                    <h3>Commercial Projects</h3>
                    <div className='service-contain'>
                      <p>
                        We develop commercial spaces with modern aesthetics, high functionality, and long-term sustainability in mind.
                      </p>
                    </div>
                    <a href='#' className='btn btn-primary small'>Read More</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Card 4 */}
            <div className='col-md-6 col-lg-3 mb-4'>
              <div className='item shadow border-0'>
                <div className='service-image'>
                  <img src={ServiceImg} alt="Service" className='w-100' />
                </div>
                <div className='service-body p-4'>
                  <div className='service-title'>
                    <h3>Industrial Solutions</h3>
                    <div className='service-contain'>
                      <p>
                        Our industrial construction services ensure robust, safe, and compliant facilities for your business operations.
                      </p>
                    </div>
                    <a href='#' className='btn btn-primary small'>Read More</a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Services;


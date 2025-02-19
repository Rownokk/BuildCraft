import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Hero from '../common/Hero';
import ServiceImg from '../../assets/images/construction1.jpg';

import ConstImg1 from '../../assets/images/construction3.jpg';
import ConstImg2 from '../../assets/images/construction4 (2).jpg';
import ConstImg3 from '../../assets/images/construction4.jpg';
import ConstImg4 from '../../assets/images/construction11.jpg'
import ConstImg5 from'../../assets/images/construction9.jpg';
import ConstImg6 from'../../assets/images/construction7.jpg';
import ConstImg7 from'../../assets/images/construction8.jpg';
import ConstImg8 from'../../assets/images/construction122.jpg';
import ConstImg9 from'../../assets/images/construction1212.jpg';
import ConstImg10 from'../../assets/images/construction12121.jpg';


const Services = () => {
  return (
    <>
      <Header />
      <Hero 
        preHeading="Quality. Integrity. Value" 
        heading="Services"
        text="We excel at transforming visions into reality <br/> through outstanding craftsmanship & Precision."
      />
      <section className='section-3 bg-light py-5'>
        <div className='container py-5'>
          <div className='section-header text-center'>
            <span>Our Services</span>
            <h2>Our Construction Services</h2>
            <p>
              We build homes that reflect your style and needs, combining modern designs with durable construction techniques.
            </p>
          </div>
          <div className='row'>

            {/* Service Card 1 */}
            <div className='col-md-4 col-lg-4 '>
              <div className='item shadow border-0'>
                <div className='service-image'>
                  <img src={ConstImg10 } alt="Service" className='w-100' />
                </div>
                <div className='service-body p-4'>
                  <div className='service-title'>
                    <h3>Speciality Construction</h3>
                    <div className='service-contain'>
                      <p>
                        We specialize in crafting unique structures that suit your specific needs and preferences.
                      </p>
                    </div>
                    <a href='#' className='btn btn-primary'>Read More</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className='col-md-4 col-lg-4 '>
              <div className='item shadow border-0'>
                <div className='service-image'>
                  <img src={ConstImg3} alt="Service" className='w-100' />
                </div>
                <div className='service-body p-4'>
                  <div className='service-title'>
                    <h3>Civil Construction</h3>
                    <div className='service-contain'>
                      <p>
                        We build homes that prioritize comfort, sustainability, and modern aesthetics.
                      </p>
                    </div>
                    <a href='#' className='btn btn-primary small'>Read More</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className='col-md-4 col-lg-4 '>
              <div className='item shadow border-0'>
                <div className='service-image'>
                  <img src={ConstImg4} alt="Service" className='w-100' />
                </div>
                <div className='service-body p-4'>
                  <div className='service-title'>
                    <h3>Commercial Projects</h3>
                    <div className='service-contain'>
                      <p>
                        Our commercial projects are designed for efficiency, growth, and long-term sustainability.
                      </p>
                    </div>
                    <a href='#' className='btn btn-primary small'>Read More</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Card 4 */}
            <div className='col-md-4 col-lg-4 '>
              <div className='item shadow border-0'>
                <div className='service-image'>
                  <img src={ConstImg9} alt="Service" className='w-100' />
                </div>
                <div className='service-body p-4'>
                  <div className='service-title'>
                    <h3>Industrial Solutions</h3>
                    <div className='service-contain'>
                      <p>
                        We provide tailored industrial solutions for various business needs and growth.
                      </p>
                    </div>
                    <a href='#' className='btn btn-primary small'>Read More</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Card 5 */}
            <div className='col-md-4 col-lg-4 '>
              <div className='item shadow border-0'>
                <div className='service-image'>
                  <img src={ConstImg2} alt="Service" className='w-100' />
                </div>
                <div className='service-body p-4'>
                  <div className='service-title'>
                    <h3>Renovations & Remodeling</h3>
                    <div className='service-contain'>
                      <p>
                        Transform your existing spaces with our expert renovation and remodeling services.
                      </p>
                    </div>
                    <a href='#' className='btn btn-primary small'>Read More</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Card 6 */}
            <div className='col-md-4 col-lg-4 '>
              <div className='item shadow border-0'>
                <div className='service-image'>
                  <img src={ConstImg1} alt="Service" className='w-100' />
                </div>
                <div className='service-body p-4'>
                  <div className='service-title'>
                    <h3>Project Management</h3>
                    <div className='service-contain'>
                      <p>
                        From planning to execution, we ensure successful project management at every stage.
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

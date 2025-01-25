import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Hero from '../common/Hero'
import ConstructionImg from '../../assets/images/construction2.jpg';
import ConstImg1 from '../../assets/images/construction3.jpg';
import ConstImg2 from '../../assets/images/construction4 (2).jpg';
import ConstImg3 from '../../assets/images/construction4.jpg';
import ConstImg4 from '../../assets/images/construction11.jpg'
import ConstImg5 from'../../assets/images/construction9.jpg';
import ConstImg6 from'../../assets/images/construction7.jpg';
import ConstImg7 from'../../assets/images/construction8.jpg';
import ConstImg8 from'../../assets/images/construction122.jpg';
import ConstImg9 from'../../assets/images/construction1212.jpg';
import ConstImg10 from'../../assets/images/engineer-4925140_1280.jpg';

const Projects = () => {
    return (
        <>
            <Header />

            <main>
                <Hero
                  heading="Our Projects"
                    preHeading="Quality. Integrity. Value"
                  
                    text="We excel at transforming visions into reality <br/> through outstanding craftsmanship & Precision."
                />
            </main>
      
         <section className='section-3 bg-light py-5'>
                       <div className='container py-5'>
                          <div className='section-header text-center'>
                             <span>our projects</span>
                             <h2>Discover our diverse range of projects</h2>
                             <p>We build homes that reflect your style and needs, combining modern designs with durable construction techniques. </p>
                          </div>
                          <div className='row'>
        
                             <div className='col-md-4 col-lg-4'>
                                <div className='item'>
                                   <div className='service-image'>
        
                                      <img src={ConstImg9} alt="" className='w-100' />
                                   </div>
                                   <div className='service-body'>
                                      <div className='service-title'>
                                         <h3>Bashundhara Smart City</h3>
                                         <div className='service-contain'>
                                            <p>
                                            A visionary residential project in Bashundhara, featuring eco-friendly buildings, smart home technology, and world-class amenities for a futuristic and sustainable living experience.
                                            </p>
                                         </div>
                                         <a href='#' className='btn btn-primary small'>Read More</a>
                                      </div>
        
                                   </div>
                                </div>
        
                             </div>
                             <div className='col-md-4 col-lg-4'>
                                <div className='item'>
                                   <div className='service-image'>
        
                                      <img src={ConstImg10} alt="" className='w-100' />
                                   </div>
                                   <div className='service-body'>
                                      <div className='service-title'>
                                         <h3>    Banani Heights</h3>
                                         <div className='service-contain'>
                                            <p>
                                            A premium residential and commercial project in Banani, designed with modern architecture, luxurious apartments, and state-of-the-art office spaces, ensuring comfort and convenience in the heart of the city.
                                            </p>
                                         </div>
                                         <a href='#' className='btn btn-primary small'>Read More</a>
                                      </div>
        
                                   </div>
                                </div>
        
                             </div>
                             <div className='col-md-4 col-lg-4'>
                                <div className='item'>
                                   <div className='service-image'>
        
                                      <img src={ConstImg7} alt="" className='w-100' />
                                   </div>
                                   <div className='service-body'>
                                      <div className='service-title'>
                                         <h3>Purbachal Business Hub</h3>
                                         <div className='service-contain'>
                                            <p>
                                            A large-scale commercial development in Purbachal, offering high-rise office buildings, shopping complexes, and business centers to create a thriving economic zone.
                                            </p>
                                         </div>
                                         <a href='#' className='btn btn-primary small'>Read More</a>
                                      </div>
        
                                   </div>
                                </div>
        
                             </div>
                             <div className='col-md-4 col-lg-4'>
                                <div className='item'>
                                   <div className='service-image'>
        
                                      <img src={ConstImg5} alt="" className='w-100' />
                                   </div>
                                   <div className='service-body'>
                                      <div className='service-title'>
                                         <h3>Uttara Grand Residences</h3>
                                         <div className='service-contain'>
                                            <p>
                                            A high-end residential project in Uttara, providing elegant apartments, lush green surroundings, and modern community facilities for an enhanced urban lifestyle.
                                            </p>
                                         </div>
                                         <a href='#' className='btn btn-primary small'>Read More</a>
                                      </div>
        
                                   </div>
                                </div>
        
                             </div>
                             <div className='col-md-4 col-lg-4'>
                                <div className='item'>
                                   <div className='service-image'>
        
                                      <img src={ConstImg4} alt="" className='w-100' />
                                   </div>
                                   <div className='service-body'>
                                      <div className='service-title'>
                                         <h3>Baridhara Luxury Villas</h3>
                                         <div className='service-contain'>
                                            <p>
                                            An exclusive residential project in Baridhara, offering elite villa-style homes with private gardens, premium security, and luxurious living standards for high-profile residents.
                                            </p>
                                         </div>
                                         <a href='#' className='btn btn-primary small'>Read More</a>
                                      </div>
        
                                   </div>
                                </div>
        
                             </div>
                             <div className='col-md-4 col-lg-4'>
                                <div className='item'>
                                   <div className='service-image'>
        
                                      <img src={ConstImg3} alt="" className='w-100' />
                                   </div>
                                   <div className='service-body'>
                                      <div className='service-title'>
                                         <h3>Dhaka Skyline Towers</h3>
                                         <div className='service-contain'>
                                            <p>
                                            A prestigious mixed-use development in the heart of Dhaka, featuring luxury apartments, upscale retail spaces, and modern office towers. Designed to redefine the city skyline, this project combines innovative architecture with advanced infrastructure, offering an unparalleled living and working experience.
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
            <Footer /></>
    )
}

export default Projects
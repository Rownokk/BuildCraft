import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Hero from '../common/Hero'
import ConstructionImg from '../../assets/images/construction2.jpg';

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
        
                                      <img src={ConstructionImg} alt="" className='w-100' />
                                   </div>
                                   <div className='service-body'>
                                      <div className='service-title'>
                                         <h3>Kolkata Project</h3>
                                         <div className='service-contain'>
                                            <p>
                                               We build homes that reflect your style and needs, combining modern designs with durable construction techniques.
                                               From custom homes to renovations and remodels, we bring your dream home to reality.
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
        
                                      <img src={ConstructionImg} alt="" className='w-100' />
                                   </div>
                                   <div className='service-body'>
                                      <div className='service-title'>
                                         <h3>   Kolkata Project</h3>
                                         <div className='service-contain'>
                                            <p>
                                               We build homes that reflect your style and needs, combining modern designs with durable construction techniques.
                                               From custom homes to renovations and remodels, we bring your dream home to reality.
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
        
                                      <img src={ConstructionImg} alt="" className='w-100' />
                                   </div>
                                   <div className='service-body'>
                                      <div className='service-title'>
                                         <h3>Kolkata Project</h3>
                                         <div className='service-contain'>
                                            <p>
                                               We build homes that reflect your style and needs, combining modern designs with durable construction techniques.
                                               From custom homes to renovations and remodels, we bring your dream home to reality.
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
        
                                      <img src={ConstructionImg} alt="" className='w-100' />
                                   </div>
                                   <div className='service-body'>
                                      <div className='service-title'>
                                         <h3>Kolkata Project</h3>
                                         <div className='service-contain'>
                                            <p>
                                               We build homes that reflect your style and needs, combining modern designs with durable construction techniques.
                                               From custom homes to renovations and remodels, we bring your dream home to reality.
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
        
                                      <img src={ConstructionImg} alt="" className='w-100' />
                                   </div>
                                   <div className='service-body'>
                                      <div className='service-title'>
                                         <h3>Kolkata Project</h3>
                                         <div className='service-contain'>
                                            <p>
                                               We build homes that reflect your style and needs, combining modern designs with durable construction techniques.
                                               From custom homes to renovations and remodels, we bring your dream home to reality.
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
        
                                      <img src={ConstructionImg} alt="" className='w-100' />
                                   </div>
                                   <div className='service-body'>
                                      <div className='service-title'>
                                         <h3>Kolkata Project</h3>
                                         <div className='service-contain'>
                                            <p>
                                               We build homes that reflect your style and needs, combining modern designs with durable construction techniques.
                                               From custom homes to renovations and remodels, we bring your dream home to reality.
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
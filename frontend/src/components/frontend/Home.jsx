import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AboutImg from '../../assets/images/about-us.jpg';
import Header from '../common/Header';
import Footer from '../common/Footer';
import ServiceImg from '../../assets/images/construction1.jpg';
import ConstructionImg from '../../assets/images/construction2.jpg';

import Icon1 from '../../assets/images/icon-1.svg';
import Icon2 from '../../assets/images/icon-2.svg';
import Icon3 from '../../assets/images/icon-3.svg';



const Home = () => {
   return (

      <>
         <Header />
         <main>
            {/* Hero Section */}
            <section className='section-1'>
               <div className='hero d-flex align-items-center'>
                  <div className='container-fluid'>
                     <div className='text-center'>
                        <span>Welcome to Build Craft</span>
                        <h1>Crafting dreams with<br />Precision & Excellence.</h1>
                        <p>We excel at transforming visions into reality through outstanding craftmanship & Precision</p>
                        <div className='mt-4'>
                           <a className='btn btn-primary'>Contact Now</a>
                           <a className='btn btn-secondary ms-2'>View Projects</a>
                        </div>

                     </div>

                  </div>
               </div>
            </section>
            {/* About Us Section */}
            <section className='section-2 py-5'>
               <div className='container py-5'>
                  <div className='row pt-4'>
                     <div className='col-md-6'>
                        <img src={AboutImg} className='w-100' />
                     </div>
                     <div className='col-md-6'>
                        <span>About Us</span>
                        <h2>Crafting structures that last a lifetime</h2>
                        <p>BuildCraft is an innovative solution designed to streamline
                           construction project management, offering intuitive tools for
                           planning, tracking, and collaboration.</p>
                        <p>BuildCraft empowers construction teams with smart project management
                           features, enabling better coordination, resource optimization, and
                           real-time progress tracking to achieve project goals efficiently.

                        </p>
                     </div>
                  </div>
               </div>
            </section>
            {/*OUR SERVICES*/}
            <section className='section-3 bg-light py-5'>
               <div className='container-fluid py-5'>
                  <div className='section-header text-center'>
                     <span>our services</span>
                     <h2>our construction services</h2>
                     <p>We build homes that reflect your style and needs, combining modern designs with durable construction techniques. </p>
                  </div>
                  <div className='row'>
                     
                     <div className='col-md-3 col-lg-3'>
                        <div className='item'> 
                           <div className='service-image'>

<img src={ServiceImg} alt=""className='w-100'/>
                           </div>
                           <div className='service-body'> 
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
                     <div className='col-md-3 col-lg-3'>
                        <div className='item'> 
                           <div className='service-image'>

<img src={ServiceImg} alt=""className='w-100'/>
                           </div>
                           <div className='service-body'> 
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
                     <div className='col-md-3 col-lg-3'>
                        <div className='item'> 
                           <div className='service-image'>

<img src={ServiceImg} alt=""className='w-100'/>
                           </div>
                           <div className='service-body'> 
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
                     <div className='col-md-3 col-lg-3'>
                        <div className='item'> 
                           <div className='service-image'>

<img src={ServiceImg} alt=""className='w-100'/>
                           </div>
                           <div className='service-body'> 
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
                  </div>
               </div>
        {/*OUR PROJECTS*/}
            </section>
            {/*why choose us*/}
            <section className='section-4 py-5'>
<div className='container py-5'>
<div className='section-header text-center'>
                     <span>Why Choose Us</span>
                     <h2>Discover our wide variety of projects</h2>
                     <p>Created in close partnership with our clients and collaborators, this approach merges industry expertise, <br/>
                     decades of experience , innovation, and flexibility to consistently deliver excellence. </p>
                  </div>


<div className='row pt-4'>
   <div className='col-md-4'>
      <div className='card shadow border-0 p-4'>
         <div className='card-icon'>
            <img src={Icon1} alt="" />

         </div>
<div className='card-title mt-3'> 
   <h3>
      Cutting_Edge Solutions
   </h3>

</div>
      

   <p>
      Smallactions create big impacts.It all begings and ends with each employee committing to safer work practices daily , ensuring they return home safely. 
   </p>

   </div>
   </div>
   <div className='col-md-4'>
      <div className='card shadow border-0 p-4'>
         <div className='card-icon'>
            <img src={Icon2} alt="" />

         </div>
<div className='card-title mt-3'> 
   <h3>
      Cutting_Edge Solutions
   </h3>

</div>
      

   <p>
      Smallactions create big impacts.It all begings and ends with each employee committing to safer work practices daily , ensuring they return home safely. 
   </p>

   </div>
   </div>
   <div className='col-md-4'>
      <div className='card shadow border-0 p-4'>
         <div className='card-icon'>
            <img src={Icon3} alt="" />

         </div>
<div className='card-title mt-3'> 
   <h3>
      Cutting_Edge Solutions
   </h3>

</div>
      

   <p>
      Smallactions create big impacts.It all begings and ends with each employee committing to safer work practices daily , ensuring they return home safely. 
   </p>

   </div>
   </div>
</div>
</div>
            </section>
            <section className='section-3 bg-light py-5'>
               <div className='container-fluid py-5'>
                  <div className='section-header text-center'>
                     <span>our projects</span>
                     <h2>Discover our diverse range of projects</h2>
                     <p>We build homes that reflect your style and needs, combining modern designs with durable construction techniques. </p>
                  </div>
                  <div className='row'>
                     
                     <div className='col-md-3 col-lg-3'>
                        <div className='item'> 
                           <div className='service-image'>

<img src={ConstructionImg} alt=""className='w-100'/>
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
<a href='#' className='btn btn-primary'>Read More</a>
                           </div>

                           </div>
                        </div>

                     </div>
                     <div className='col-md-3 col-lg-3'>
                        <div className='item'> 
                           <div className='service-image'>

<img src={ConstructionImg} alt=""className='w-100'/>
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
<a href='#' className='btn btn-primary'>Read More</a>
                           </div>

                           </div>
                        </div>

                     </div>
                     <div className='col-md-3 col-lg-3'>
                        <div className='item'> 
                           <div className='service-image'>

<img src={ConstructionImg} alt=""className='w-100'/>
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
<a href='#' className='btn btn-primary'>Read More</a>
                           </div>

                           </div>
                        </div>

                     </div>
                     <div className='col-md-3 col-lg-3'>
                        <div className='item'> 
                           <div className='service-image'>

<img src={ConstructionImg} alt=""className='w-100'/>
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
<a href='#' className='btn btn-primary'>Read More</a>
                           </div>

                           </div>
                        </div>

                     </div>
                  </div>
               </div>

            </section>
         </main>
         <Footer />
      </>

   )
}

export default Home

import React, { useEffect, useState } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import { default as AboutNew } from '../common/About';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import ConstructionImg from '../../assets/images/construction2.jpg';

import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Icon1 from '../../assets/images/icon-1.svg';
import Icon2 from '../../assets/images/icon-2.svg';
import Icon3 from '../../assets/images/icon-3.svg';
import AvatarImg from '../../assets/images/author-2.jpg';
import 'swiper/css';
import 'swiper/css/pagination';
import BlogImg from '../../assets/images/construction3.jpg';
import About from '../common/About';
import ServiceImg2 from '../../assets/images/engineer-4925140_1280.jpg';
import ConstImg1 from '../../assets/images/construction3.jpg';
import ConstImg2 from '../../assets/images/construction4 (2).jpg';
import ConstImg3 from '../../assets/images/construction4.jpg';
import ConstImg4 from '../../assets/images/construction11.jpg'
import ConstImg5 from'../../assets/images/construction9.jpg';
import ConstImg6 from'../../assets/images/construction7.jpg';
import ConstImg7 from'../../assets/images/construction8.jpg';
import ConstImg8 from'../../assets/images/download.jpg';
import ConstImg9 from '../../assets/images/download (1).jpg';
import { apiUrl, token } from '../common/http';
import { set } from 'react-hook-form';
import LatestServices from '../common/LatestServices';
import LatestProjects from '../common/LatestProjects';



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
                           <a className='btn btn-primary large'>Contact Now</a>
                           <a className='btn btn-secondary ms-2 large'>View Projects</a>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            {/* About Us Section */}
            <About />

            {/*OUR SERVICES*/}
           <LatestServices/>
              
         
            {/*why choose us*/}
            <section className='section-4 py-5'>
               <div className='container py-5'>
                  <div className='section-header text-center'>
                     <span>Why Choose Us</span>
                     <h2>Discover our wide variety of projects</h2>
                     <p>Created in close partnership with our clients and collaborators, this approach merges industry expertise, <br />
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
                              Knowledge and Expertise
                              </h3>

                           </div>


                           <p>
                           With a strong foundation in construction principles, we bring years of experience and technical proficiency to every project for planning to execution.
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
                              Superior Craftsmanship
                              </h3>

                           </div>


                           <p>
                           We are committed to excellence, delivering structures with precision and durability. Our attention to detail, use of high-quality materials, and skilled workmanship.





                           </p>

                        </div>
                     </div>
                  </div>
               </div>
            </section>
         <LatestProjects/>

            <section className='section-5 py-5'>
               <div className='container'>
                  <div className='section-header text-center'>
                     <span>Testimonials</span>
                     <h2>What people are saying about us</h2>
                     <p>we offer a diverse array of constructioon services, spanning residential, commercial, and industrial projects. </p>
                  </div>
                  <Swiper
                     modules={[Pagination]}
                     spaceBetween={50}
                     slidesPerView={3}
                     pagination={{ clickable: true }}

                  >
                     <SwiperSlide>
                        <div className='card shadow border-0'>
                           <div className='card-body p-5'>
                              <div className='rating'>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                 </svg>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                 </svg>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                 </svg>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                 </svg>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                 </svg>
                              </div>
                              <div className='content pt-4 pb-2'>
                                 <p>    "Exceptional service and top-notch craftsmanship. They took care of everything, ensuring a hassle-free experience. Highly recommend for any construction project!"
                                 </p>
                              </div>
                              <hr />
                              <div className='d-flex meta'>
                                 <div>
                                    <img src={AvatarImg} alt="" width={50} />
                                 </div>
                                 <div className='ps-3'>
                                    <div className='name'>
                                       John Doe
                                    </div>
                                    <div>Project Coordinator</div>
                                 </div>
                              </div>
                           </div>

                        </div>
                     </SwiperSlide>
                     <SwiperSlide>
                        <div className='card shadow border-0'>
                           <div className='card-body p-5'>
                              <div className='rating'>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                 </svg>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                 </svg>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                 </svg>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                 </svg>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                 </svg>
                              </div>
                              <div className='content pt-4 pb-2'>
                                 <p>   "Reliable, efficient, and highly skilled! The construction of our commercial building was handled with precision, meeting all deadlines without compromising on quality."
                                 </p>
                              </div>
                              <hr />
                              <div className='d-flex meta'>
                                 <div>
                                    <img src={ConstImg8} alt="" width={50} />
                                 </div>
                                 <div className='ps-3'>
                                    <div className='name'>
                                       David L.
                                    </div>
                                    <div>Manager</div>
                                 </div>
                              </div>
                           </div>

                        </div>
                     </SwiperSlide>

                     <SwiperSlide>
                        <div className='card shadow border-0'>
                           <div className='card-body p-5'>
                              <div className='rating'>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                 </svg>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                 </svg>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                 </svg>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                 </svg>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                 </svg>
                              </div>
                              <div className='content pt-4 pb-2'>
                                 <p>    "The team exceeded my expectations with their attention to detail and professionalism. My home renovation was completed flawlessly, and the quality of work is outstanding!"
                                 </p>
                              </div>
                              <hr />
                              <div className='d-flex meta'>
                                 <div>
                                    <img src={ConstImg9} alt="" width={50} />
                                 </div>
                                 <div className='ps-3'>
                                    <div className='name'>
                                      Anika Haque
                                    </div>
                                    <div>CEO</div>
                                 </div>
                              </div>
                           </div>

                        </div>
                     </SwiperSlide>

                     <SwiperSlide>Slide 3</SwiperSlide>
                     <SwiperSlide>Slide 4</SwiperSlide>

                  </Swiper>
               </div>
            </section>
            <section className='section-6 bg-light py-5'>
               <div className='container'>
                  <div className='section-header text-center'>
                     <span>Blog & News</span>
                     <h2>Articles & Blog posts</h2>
                     <p>we speacialize in a wide range of construction services,including residential, commercial, and industrial projects. </p>
                  </div>
                  <div className='row pt-3'>
                     <div className='col-md-4'>
                        <div className='card shadow border-0'>
                           <div className='card-img-top'>
                              <img src={ConstImg6} alt="" className='w-100' />
                           </div>
                           <div className='card-body p-4'>

                              <div className='mb-3'>
                                 <a href='#' className='title'>Building the Future</a>
                              </div>
                              <a href='#' className='btn btn-primary small'>Read More</a>
                           </div>

                        </div>

                     </div>     <div className='col-md-4'>
                        <div className='card shadow border-0'>
                           <div className='card-img-top'>
                              <img src={ConstImg5} alt="" className='w-100' />
                           </div>
                           <div className='card-body p-4'>

                              <div className='mb-3'>
                                 <a href='#' className='title'>From Blueprint to Reality</a>
                              </div>
                              <a href='#' className='btn btn-primary small'>Read More</a>
                           </div>

                        </div>

                     </div>
                     <div className='col-md-4'>
                        <div className='card shadow border-0'>
                           <div className='card-img-top'>
                              <img src={ConstImg7} alt="" className='w-100' />
                           </div>
                           <div className='card-body p-4'>

                              <div className='mb-3'>
                                 <a href='#' className='title'>Sustainable Structures</a>
                              </div>
                              <a href='#' className='btn btn-primary small'>Read More</a>
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

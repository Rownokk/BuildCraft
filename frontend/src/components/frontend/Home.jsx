import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AboutImg from '../../assets/images/about-us.jpg';
import Header from '../common/Header';
import Footer from '../common/Footer';
import ServiceImg from '../../assets/images/construction1.jpg';
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

                              <img src={ServiceImg} alt="" className='w-100' />
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

                              <img src={ServiceImg} alt="" className='w-100' />
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
                                 <a href='#' className='btn btn-primary small'>Read More</a>
                              </div>

                           </div>
                        </div>

                     </div>
                     <div className='col-md-3 col-lg-3'>
                        <div className='item'>
                           <div className='service-image'>

                              <img src={ServiceImg} alt="" className='w-100' />
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
                                 <a href='#' className='btn btn-primary small'>Read More</a>
                              </div>

                           </div>
                        </div>

                     </div>
                     <div className='col-md-3 col-lg-3'>
                        <div className='item'>
                           <div className='service-image'>

                              <img src={ServiceImg} alt="" className='w-100' />
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
                                 <a href='#' className='btn btn-primary small'>Read More</a>
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
                     <div className='col-md-3 col-lg-3'>
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
                     <div className='col-md-3 col-lg-3'>
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
                     <div className='col-md-3 col-lg-3'>
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
                                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                 </svg>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                 </svg>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                 </svg>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                 </svg>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                 </svg>
                              </div>
                              <div className='content pt-4 pb-2'>
                                 <p>    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
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
                                    <div>CEO</div>
                                 </div>
                              </div>
                           </div>

                        </div>
                     </SwiperSlide>
                     <SwiperSlide>
                        <div className='card shadow border-0'>
                           <div className='card-body p-5'>
                              <div className='rating'>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                 </svg>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                 </svg>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                 </svg>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                 </svg>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                 </svg>
                              </div>
                              <div className='content pt-4 pb-2'>
                                 <p>    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
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
                                    <div>CEO</div>
                                 </div>
                              </div>
                           </div>

                        </div>
                     </SwiperSlide>

                     <SwiperSlide>
                        <div className='card shadow border-0'>
                           <div className='card-body p-5'>
                              <div className='rating'>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                 </svg>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                 </svg>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                 </svg>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                 </svg>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                 </svg>
                              </div>
                              <div className='content pt-4 pb-2'>
                                 <p>    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
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
                              <img src={BlogImg} alt="" className='w-100' />
                           </div>
                           <div className='card-body p-4'>
                             
                              <div className='mb-3'>
                            <a href='#' className='title'>Dummy blog title</a>
                              </div>
                              <a href='#' className='btn btn-primary small'>Read More</a>
                           </div>

                        </div>

                     </div>     <div className='col-md-4'>
                        <div className='card shadow border-0'>
                           <div className='card-img-top'>
                              <img src={BlogImg} alt="" className='w-100' />
                           </div>
                           <div className='card-body p-4'>
                             
                              <div className='mb-3'>
                            <a href='#' className='title'>Dummy blog title</a>
                              </div>
                              <a href='#' className='btn btn-primary small'>Read More</a>
                           </div>

                        </div>

                     </div>
                     <div className='col-md-4'>
                        <div className='card shadow border-0'>
                           <div className='card-img-top'>
                              <img src={BlogImg} alt="" className='w-100' />
                           </div>
                           <div className='card-body p-4'>
                             
                              <div className='mb-3'>
                            <a href='#' className='title'>Dummy blog title</a>
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

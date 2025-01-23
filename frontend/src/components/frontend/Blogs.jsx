import React from 'react'
import Hero from '../common/Hero'
import Header from '../common/Header'
import Footer from '../common/Footer'
import BlogImg from '../../assets/images/construction3.jpg';
const Blogs = () => {
  return (
  <>
  <Header/>
 <main>
 <Hero 
       
          heading="Blogs"
          preHeading="Quality. Integrity. Value" 
          text="We excel at transforming visions into reality <br/> through outstanding craftsmanship & Precision."
        />
 </main>
            <section className='section-6 bg-light py-5'>
                <div className='container'>
                   <div className='section-header text-center'>
                      <span>Blog & News</span>
                      <h2>Articles & Blog posts</h2>
                      <p>we speacialize in a wide range of construction services,including residential, commercial, and industrial projects. </p>
                   </div>
                   <div className='row g-4 pt-3'>
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

  <Footer/>
  </>
  )
}

export default Blogs
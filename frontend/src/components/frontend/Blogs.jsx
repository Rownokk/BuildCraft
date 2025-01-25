import React from 'react'
import Hero from '../common/Hero'
import Header from '../common/Header'
import Footer from '../common/Footer'
import BlogImg from '../../assets/images/construction3.jpg';
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
                               <img src={ConstImg9} alt="" className='w-100' />
                            </div>
                            <div className='card-body p-4'>
                              
                               <div className='mb-3'>
                             <a href='#' className='title'>Sustainable Construction:" The Future of Eco-Friendly Buildings in Bangladesh"</a>
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
                             <a href='#' className='title'>"Innovative Building Materials Transforming the Construction Industry"</a>
                               </div>
                               <a href='#' className='btn btn-primary small'>Read More</a>
                            </div>
 
                         
 </div>
                      </div>
                      <div className='col-md-4'>
                         <div className='card shadow border-0'>
                            <div className='card-img-top'>
                               <img src={ConstImg6} alt="" className='w-100' />
                            </div>
                            <div className='card-body p-4'>
                              
                               <div className='mb-3'>
                             <a href='#' className='title'>The Rise of Smart Cities: "How Modern Construction is Shaping Bangladesh"</a>
                               </div>
                               <a href='#' className='btn btn-primary small'>Read More</a>
                            </div>
 
                         </div>
 
                      </div>
 
                      <div className='col-md-4'>
                         <div className='card shadow border-0'>
                            <div className='card-img-top'>
                               <img src={ConstImg2} alt="" className='w-100' />
                            </div>
                            <div className='card-body p-4'>
                              
                               <div className='mb-3'>
                             <a href='#' className='title'>"The Role of Technology in Revolutionizing the Construction Sector"</a>
                               </div>
                               <a href='#' className='btn btn-primary small'>Read More</a>
                            </div>
 
                         </div>
 
                      </div>
 
                      <div className='col-md-4'>
                         <div className='card shadow border-0'>
                            <div className='card-img-top'>
                               <img src={ConstImg1} alt="" className='w-100' />
                            </div>
                            <div className='card-body p-4'>
                              
                               <div className='mb-3'>
                             <a href='#' className='title'>"Top Trends in Residential Construction for 2025"
                             </a>
                               </div>
                               <a href='#' className='btn btn-primary small'>Read More</a>
                            </div>
 
                         </div>
 
                      </div>
 
 <div className='col-md-4'>
                         <div className='card shadow border-0'>
                            <div className='card-img-top'>
                               <img src={ConstImg4} alt="" className='w-100' />
                            </div>
                            <div className='card-body p-4'>
                              
                               <div className='mb-3'>
                             <a href='#' className='title'>"How Infrastructure Projects Are Driving Economic Growth in Bangladesh"</a>
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
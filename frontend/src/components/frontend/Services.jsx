import React, { useEffect, useState } from 'react';
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
import { apiUrl, fileUrl } from '../common/http';


const Services = () => {
   const[services,setServices] =useState([]);
      const fetchAllServices = async () =>{
         const res = await fetch(apiUrl+ 'get-services', {
            method: 'GET',
           
          });
      
          const result = await res.json();
          console.log(result)
          setServices(result.data)
      
      }
      useEffect(() =>{
         fetchAllServices()
      },[]);
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
  {

                services && services.map(service =>{
                   return (
                    <div className="col-md-4 col-lg-4" key={service.id || `service-${index}`}>
                        <div className='item'>
                           <div className='service-image'>
       
                              <img src={`${fileUrl}uploads/services/small/${service.image}`} alt="" className='w-100' />
                           </div>
                           <div className='service-body'>
                              <div className='service-title'>
                                 <h3>{service.title}</h3>
                                 <div className='service-content'>
                                    <p>
                                     {services.short_desc}
                                    </p>
                                 </div>
                                 <a href='#' className='btn btn-primary'>Read More</a>
                              </div>
       
                           </div>
                        </div>
       
                     </div>
                    )
                })

            }
           </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Services;
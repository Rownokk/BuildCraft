import React, { useEffect, useState } from 'react'
import ServiceImg from '../../assets/images/construction1.jpg';
import { apiUrl } from './http';

const LatestServices =() =>{
    const[services,setServices] =useState([]);
    const fetchLatestServices = async () =>{
       const res = await fetch(apiUrl+ 'get-latest-services?limit=4', {
          method: 'GET',
         
        });
    
        const result = await res.json();
        console.log(result)
        setServices(result.data)
    
    }
    useEffect(() =>{
       fetchLatestServices()
    },[]);
    return(
       

        <section className='section-3 bg-light py-5'>
        <div className='container-fluid py-5'>
           <div className='section-header text-center'>
              <span>our services</span>
              <h2>our construction services</h2>
              <p>We build homes that reflect your style and needs, combining modern designs with durable construction techniques. </p>
           </div>
           <div className='row pt-4'>
            {

                services && services.map(service =>{
                   return (
                        <div className='col-md-3 col-lg-3'>
                        <div className='item'>
                           <div className='service-image'>
       
                              <img src={ServiceImg} alt="" className='w-100' />
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
    )
}
export default LatestServices
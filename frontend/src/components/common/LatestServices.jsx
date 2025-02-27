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

             
              <div className='col-md-3 col-lg-3'>
                 <div className='item'>
                    <div className='service-image'>

                       <img src={ServiceImg} alt="" className='w-100' />
                    </div>
                    <div className='service-body'>
                       <div className='service-title'>
                          <h3>Civil Construction</h3>
                          <div className='service-contain'>
                             <p>
                             Handling large-scale infrastructure projects like roads, bridges, and public facilities, ensuring safety, sustainability, and compliance with engineering standards.
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
                          <h3>Residential Construction</h3>
                          <div className='service-contain'>
                             <p>
                                Focused on building and renovating homes, ensuring comfort, durability, and modern design with efficient project management and resource planning.
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
                          <h3>Corporate Construction</h3>
                          <div className='service-contain'>
                             <p>
                             Developing office spaces, commercial buildings, and business hubs with innovative designs, optimized layouts, and advanced infrastructure to enhance productivity.
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
    )
}
export default LatestServices
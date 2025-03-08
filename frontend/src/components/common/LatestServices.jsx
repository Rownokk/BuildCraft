import React, { useEffect, useState } from 'react'
import ServiceImg from '../../assets/images/construction1.jpg';
import { apiUrl, fileUrl } from './http';
import { Link } from 'react-router-dom';

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
   services && services.map((service, index) => {
      return (
           <div key={service.id || index} className='col-md-3 col-lg-3'>
               <div className='item'>
                   <div className='service-image'>
                       <img src={`${fileUrl}uploads/services/small/${service.image}`} alt="" className='w-100' />
                   </div>
                   <div className='service-body'>
                       <div className='service-title'>
                           <h3>{service.title}</h3>
                           <div className='service-content'>
                               <p>
                                {service.short_desc}
                               </p>
                           </div>
                           <Link to={`/service/${service.id}`} className='btn btn-primary'>Read More</Link>
                       </div>
                   </div>
               </div>
           </div>
       );
   })
}


             
           </div>
        </div> 
        </section>
    )
}
export default LatestServices
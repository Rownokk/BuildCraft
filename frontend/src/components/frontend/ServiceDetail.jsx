import React, { useEffect, useState } from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Hero from '../common/Hero';
import { useParams } from 'react-router-dom';
import { apiUrl } from '../common/http';

const ServiceDetail = () => {

    const params = useParams();
    const [service,setService] = useState([]);

    const fetchService = async () => {
        const res =await fetch(`${apiUrl}get-service/${params.id}`,{
           method: 'GET'
        });

        const result =await res.json();
        setService(result.data);
        console.log(result);
    }
  
    useEffect(() => {
       fetchService();
    },[])

  return (
    <>
        <Header/>
        <main>
           
        <Hero 
          preHeading="Quality. Integrity. Value" 
          heading={`${service.title}`}
          text=" "
        />
         <section className='section-10'>


        <div className='container py-5'>
         <div className='row'>
           <div className='col-md-3'>
            <div className='card shadow border-0 sidebar'>
                  <div className='card-body px-4 py-4'>
                  <h3 className='mt-2 mb-3'>Our Services</h3>
                  </div>
            </div>

           </div>
           <div className='col-md-9'>

           </div>
         </div>
        </div>
        </section>
        </main>
        

      <Footer/>
    
    </>

  )
}

export default ServiceDetail

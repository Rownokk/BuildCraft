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
        </main>
        

      <Footer/>
    
    </>

  )
}

export default ServiceDetail

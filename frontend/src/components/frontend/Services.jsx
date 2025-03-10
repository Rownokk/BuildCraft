import React, { useEffect, useState } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Hero from '../common/Hero';
import { apiUrl, fileUrl } from '../common/http';
import { Link } from 'react-router-dom';

const Services = () => {
  const [services, setServices] = useState([]);

  const fetchAllServices = async () => {
    const res = await fetch(apiUrl + 'get-services', {
      method: 'GET',
    });

    const result = await res.json();
    console.log(result);
    setServices(result.data);
  };

  useEffect(() => {
    fetchAllServices();
  }, []);

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
              services && services.map((service, index) => {
                return (
                  <div className="col-md-4 col-lg-4" key={service.id || index}>
                    <div className='item'>
                      <div className='service-image'>
                        <img 
                          src={`${fileUrl}uploads/services/small/${service.image}`} 
                          alt={service.title} 
                          className='w-100' 
                        />
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

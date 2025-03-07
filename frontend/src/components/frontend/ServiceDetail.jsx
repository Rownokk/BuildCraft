import React, { useEffect, useState } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Hero from '../common/Hero';
import { useParams } from 'react-router-dom';
import { apiUrl, fileUrl } from '../common/http';
import { Link } from 'react-router-dom';

const ServiceDetail = () => {
    const params = useParams();
    const [service, setService] = useState({});
    const [services, setServices] = useState([]);

    useEffect(() => {
        const fetchServices = async () => {
            const res = await fetch(`${apiUrl}get-services`);
            const result = await res.json();
            setServices(result.data);
        };

        const fetchService = async () => {
            const res = await fetch(`${apiUrl}get-service/${params.id}`);
            const result = await res.json();
            setService(result.data);
        };

        fetchServices();
        fetchService();
    }, [params.id]);

    return (
        <>
            <Header />
            <main>
                <Hero 
                    preHeading="Expert Solutions for Your Business" 
                    heading={service.title || "Loading..."}
                    text="Delivering precision, durability, and excellence in every project."
                />
                <section className='py-5 bg-light'>
                    <div className='container'>
                        <div className='row'>
                            {/* Sidebar */}
                            <aside className='col-md-3'>
                                <div className='card shadow border-0 sidebar'>
                                    <div className='card-body'>
                                        <h4 className='mb-3'>Our Services</h4>
                                        <ul className='list-unstyled'>
                                            {services.map(svc => (
                                                <li key={svc.id} className='mb-2'>
                                                    <Link 
                                                        to={`/service/${svc.id}`} 
                                                        className='text-dark text-decoration-none d-block py-2 px-3 rounded bg-white shadow-sm'
                                                    >
                                                        {svc.title}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </aside>
                            
                            {/* Content Area */}
                            <div className='col-md-9'>
                                {service.image && (
                                    <div className='text-center mb-4'>
                                        <img 
                                            className='img-fluid rounded shadow-sm' 
                                            src={`${fileUrl}uploads/services/large/${service.image}`} 
                                            alt={service.title} 
                                            style={{ maxHeight: '400px', objectFit: 'cover' }}
                                        />
                                    </div>
                                )}
                                <h2 className='fw-semibold'>{service.title}</h2>
                                <hr className='my-4' />
                                <div className='content text-muted' dangerouslySetInnerHTML={{ __html: service.content }}></div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default ServiceDetail;

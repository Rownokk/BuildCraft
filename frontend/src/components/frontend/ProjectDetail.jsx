import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../common/Header';
import Footer from '../common/Footer';
import { useState } from 'react';
import { apiUrl } from '../common/http';             
import { fileUrl } from '../common/http';
import Hero from '../common/Hero';
const ProjectDetail = () => {
    const params = useParams();
    const [project, setProject] = useState({});

    
        
        const fetchProject = async () => {
            const res = await fetch(`${apiUrl}get-project/${params.id}`,{
                method:'GET'
            });
            const result = await res.json();
            setProject(result.data);
        };
        useEffect(() => {
            fetchProject();
    }, []);

    return (
        <>
            <Header />
            <main>
                <Hero 
                    preHeading="Expert Solutions for Your Business" 
                    heading={project.title || "Loading..."}
                    text="Delivering precision, durability, and excellence in every project."
                />
                <section className='py-5 bg-light'>
                    <div className='container'>
                        <div className='row'>
                            {/* Sidebar */}
                            <aside className='col-md-4'>
                                <div className='card shadow border-0 sidebar'>
                                    <div className='card-body'>
                                        <h4 className='mb-3'>Insights</h4>
                                        <ul>
                                            {
                                                project.location && <li className='mb-2'>
                                                <span className='text-body-secondary'>Location</span>
                                                <p>{project.location}</p>
                                            </li>
                                            }
                                             {
                                                project.construction_type && <li className='mb-2'>
                                                <span className='text-body-secondary'>Construction Type</span>
                                                <p>{project.construction_type}</p>
                                            </li>
                                            }
                                            {
                                                project.sector && <li className='mb-2'>
                                                <span className='text-body-secondary'>Sector</span>
                                                <p>{project.sector}</p>
                                            </li>
                                            }
                                            
                                        </ul>
                                        {/* <ul className='list-unstyled'>
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
                                        </ul> */}
                                    </div>
                                </div>
                            </aside>
                            
                            {/* Content Area */}
                            <div className='col-md-8'>
                                {project.image && (
                                    <div className='text-center mb-4'>
                                        <img 
                                            className='img-fluid rounded shadow-sm' 
                                            src={`${fileUrl}uploads/projects/large/${project.image}`} 
                                            alt={project.title} 
                                            style={{ maxHeight: '400px', objectFit: 'cover' }}
                                        />
                                    </div>
                                )}
                                <h2 className='fw-semibold'>{project.title}</h2>
                                <hr className='my-4' />
                                <div className='content text-muted' dangerouslySetInnerHTML={{ __html: project.content }}></div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default ProjectDetail

import React, { useState, useEffect } from 'react';
import ConstImg2 from '../../assets/images/construction4 (2).jpg';
import { apiUrl, fileUrl } from './http';

const LatestProjects = () => {
    const [projects, setProjects] = useState([]); 

    const fetchLatestProjects = async () => { 
        const res = await fetch(apiUrl + 'get-latest-projects?limit=4', { 
            method: 'GET'
        }); 

        const result = await res.json(); 
        if (result.status === true) { 
            setProjects(result.data);
        }
    };

    useEffect(() => {
        fetchLatestProjects();  // Fetch the latest projects when the component mounts
    }, []);

    return (
        <section className='section-3 bg-light py-5'>
            <div className='container-fluid py-5'>
                <div className='section-header text-center'>
                    <span>our projects</span>
                    <h2>Discover our diverse range of projects</h2>
                    <p>We build homes that reflect your style and needs, combining modern designs with durable construction techniques. </p>
                </div>
                <div className='row pt-4'>
                    {projects && projects.map(project => (
                        <div key={project.id} className='col-md-3 col-lg-3'>
                            <div className='item'>
                                <div className='service-image'>
                                    <img src={`${fileUrl}uploads/projects/small/${project.image}`} alt="" className='w-100' />
                                </div>
                                <div className='service-body'>
                                    <div className='service-title'>
                                        <h3>{project.title}</h3>
                                        <div className='service-contain'>
                                            <p>{project.short_desc}</p>
                                        </div>
                                        <a href='#' className='btn btn-primary small'>Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LatestProjects;

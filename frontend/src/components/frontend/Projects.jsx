import React, { useEffect, useState } from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Hero from '../common/Hero'
import ConstructionImg from '../../assets/images/construction2.jpg';
import ConstImg1 from '../../assets/images/construction3.jpg';
import ConstImg2 from '../../assets/images/construction4 (2).jpg';
import { apiUrl, fileUrl } from '../common/http';
import { Link } from 'react-router-dom';




const Projects = () => {
    const [projects, setProjects] = useState([]);

    const fetchProjects = async () => {
        const res = await fetch(apiUrl + 'get-projects', {
            method: 'GET'
        });

        const result = await res.json();
        if (result.status === true) {
            setProjects(result.data);
        }
    };

    useEffect(() => {
        fetchProjects(); // Fetch the latest projects when the component mounts
    }, []);

    return (
        <>
            <Header />

            <main>
                <Hero
                    heading="Our Projects"
                    preHeading="Quality. Integrity. Value"
                    text="We excel at transforming visions into reality <br/> through outstanding craftsmanship & Precision."
                />
            </main>

            <section className='section-3 bg-light py-5'>
                <div className='container py-5'>
                    <div className='section-header text-center'>
                        <span>our projects</span>
                        <h2>Discover our diverse range of projects</h2>
                        <p>We build homes that reflect your style and needs, combining modern designs with durable construction techniques.</p>
                    </div>

                    <div className='row'>
                        {projects.map((project) => (
                            <div key={project.id} className='col-md-4 col-lg-4'>
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
                                            <Link to={`/project/${project.id}`} className='btn btn-primary small'>Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default Projects;

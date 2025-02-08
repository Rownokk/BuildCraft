import React from 'react';
import AboutImg from '../../assets/images/about-us.jpg';

const About = () => {
  return (
    <section className='section-2 py-5'>
      <div className='container py-5'>
        <div className='row pt-4'>
          <div className='col-md-6'>
            <img src={AboutImg} alt='About Us' className='w-100' />
          </div>
          <div className='col-md-6'>
            <span>About Us</span>
            <h2>Crafting structures that last a lifetime</h2>
            <p>
            At BuildCraft, we stand as artisans of construction, bringing forth the finest blend 
            of tradition and innovation. Our legacy is built on an unwavering commitment to creating 
            enduring structures that transcend time. Every project we undertake is a testament to our 
            meticulous attention to detail, excellence in execution, and passion for delivering 
            spaces that leave a lasting impact.


            </p>
            <p>
              BuildCraft empowers construction teams with smart project
              management features, enabling better coordination, resource
              optimization, and real-time progress tracking to achieve project
              goals efficiently.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

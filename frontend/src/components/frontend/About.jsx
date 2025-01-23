import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import { default as AboutNew } from '../common/About';
import BlogImg from '../../assets/images/construction3.jpg';
import MemberImg from '../../assets/images/team1.jpg';

const About = () => {
  return (
    <>
      <Header />
      <main>
        <section className='section-7'>
          <div className='hero d-flex align-items-center'>
            <div className='container'>
              <div className='text-left'>
                <span>Welcome to Build Craft</span>
                <h1>About Us</h1>
                <p>
                  We excel at transforming visions into reality<br /> through outstanding craftsmanship & Precision.
                </p>
              </div>
            </div>
          </div>
        </section>
        <AboutNew />
        {/* Our Team */}
        <section className='section-8 bg-light py-5'>
          <div className='container'>
            <div className='section-header text-center'>
              <span>Team</span>
              <h2>Our Team</h2>
              <p>
                We offer a diverse array of construction services, spanning residential, commercial, and industrial projects.
              </p>
            </div>
            <div className='row pt-3'>
              <div className='col-md-4'>
                <div className='card shadow border-0'>
                  <div className='card-img-top'>
                    <img src={MemberImg} alt='Construction project' className='w-100' />
                  </div>
                  <div className='card-body p-4'>
                    <div className='mb-3'>
                      <a href='#' className='title'>Construction Insights</a>
                    </div>
                    <a href='#' className='btn btn-primary small' role='button'>Read More</a>
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='card shadow border-0'>
                  <div className='card-img-top'>
                    <img src={MemberImg} alt='Team Member' className='w-100' />
                  </div>
                  <div className='card-body p-4'>
                    <div className='mb-3'>
                      <a href='#' className='title'>Meet Our Team</a>
                    </div>
                    <a href='#' className='btn btn-primary small' role='button'>Read More</a>
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='card shadow border-0'>
                  <div className='card-img-top'>
                    <img src={MemberImg} alt='Construction project' className='w-100' />
                  </div>
                  <div className='card-body p-4'>
                    <div className='mb-3'>
                      <a href='#' className='title'>Latest Projects</a>
                    </div>
                    <a href='#' className='btn btn-primary small' role='button'>Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;





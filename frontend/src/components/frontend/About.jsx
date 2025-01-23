import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import { default as AboutNew } from '../common/About';

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
                  We excel at transforming visions into reality<br />
                  through outstanding craftsmanship & precision.
                </p>
              </div>
            </div>
          </div>
        </section>
        <AboutNew />
      </main>
      <Footer />
    </>
  );
};

export default About;


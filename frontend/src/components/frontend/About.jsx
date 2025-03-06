import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import { default as AboutNew } from '../common/About';
import MemberImg1 from '../../assets/images/Mowmita.jpg';
import MemberImg2 from '../../assets/images/jamila.jpg';
import MemberImg3 from '../../assets/images/authoi.jpg';
import Hero from '../common/Hero';
import Team from '../common/Team';

const About = () => {
  return (
    <>
      <Header />
      <main>
        <Hero 
          preHeading="Quality. Integrity. Value" 
          heading="About Us"
          text="We excel at transforming visions into reality <br/> through outstanding craftsmanship & Precision."
        />
        <AboutNew />
        
        {/* Our Team Section */}
        <Team/>
      </main>
      <Footer />
    </>
  );
};

export default About;

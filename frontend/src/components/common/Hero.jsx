import React from 'react';

const Hero = ({ preHeading, heading, text }) => {
  return (
    <section className='section-7'>
      <div className='hero d-flex align-items-center'>
        <div className='container'>
          <div className='text-left'>
          
            <h1>{heading}</h1> {/* Use lowercase 'heading' here */}
            <span>{preHeading}</span>
            <p dangerouslySetInnerHTML={{ __html: text }}></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;






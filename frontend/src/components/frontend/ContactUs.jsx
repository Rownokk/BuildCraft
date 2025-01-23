import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Hero from '../common/Hero'

const ContactUs = () => {
  return (
    <>
      <Header />
      <main>
        <Hero
          preHeading="Quality. Integrity. Value."
          heading="Contact Us"
          text="We excel at transforming visions into reality <br/> through outstanding craftsmanship & Precision."
        />
        
        <section className='section-9 py-5'>
          <div className='container'>
            <div className='section-header text-center'>
              <span></span>
              <h2>Contact Us</h2>
              <p>
                Our dedicated experts are here to help you with any of your 
                questions. Contact us by<br/> filling out the form 
                below and we will be in touch shortly.
              </p>
            </div>
          
            <div className='row'>
              <div className='col-md-3'>
                <div className='card shadow border-0'>
                  <div className='card-body'>
                    <h3>Call Us</h3>
                    <a href='tel:8880000000'>(888-000-0000)</a><br />
                    <a href='tel:22212312345'>(222-123-12345)</a>
                    
                    <h3>You Can Write Us</h3>
                    <a href="mailto:example@example.com">example@example.com</a><br />
                    <a href="mailto:info@example.com">info@example.com</a>

                    <h3>Address</h3>
                    <div>
                      B-18X, Rajaji Puram <br/>
                      Lucknow, Uttar Pradesh, 226017<br/>
                      0522400XXXX
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-9'>
                <div className='card shadow border-0'>
                  {/* Add form or content here */}
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}

export default ContactUs




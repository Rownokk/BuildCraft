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
          
            <div className='row mt-5'>
              <div className='col-md-3'>
                <div className='card shadow border-0 mb-3'>
                  <div className='card-body'>
                    <h3>Call Us</h3>
                    <a href='tel:8880000000'>(888-000-0000)</a><br />
                    <a href='tel:22212312345'>(222-123-12345)</a>
                    
                    <h3>You Can Write Us</h3>
                    <a href="mailto:example@example.com">example@example.com</a><br />
                    <a href="mailto:info@example.com">info@example.com</a>

                    <h3>Address</h3>
                    <div>
                    20-8x Riverdell <br/>
                   Yonkers,Newyork,226017 <br/>
                    0522400xxxx
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-md-9'>
                <div className='card shadow border-0'>
                  <div className='card-body p-5'>
                    <form action="">
                      <div className='row'> 
                        <div className='col-md-6 mb-4'>
                          <label htmlFor="name" className='form-label'>Name</label>
                          <input type="text" className='form-control form-control-lg' placeholder='Enter Name' />
                        </div>
                        <div className='col-md-6 mb-4'>
                          <label htmlFor="email" className='form-label'>Email</label>
                          <input type="email" className='form-control form-control-lg' placeholder='Enter Email' />
                        </div>
                      </div>
                      <div className='row'> 
                        <div className='col-md-6 mb-4'>
                          <label htmlFor="phone" className='form-label'>Phone</label>
                          <input type="text" className='form-control form-control-lg' placeholder='Phone Number' />
                        </div>
                        <div className='col-md-6 mb-4'>
                          <label htmlFor="subject" className='form-label'>Subject</label>
                          <input type="text" className='form-control form-control-lg' placeholder='Subject' />
                        </div>
                      </div>
                      <div>
                      <label htmlFor="subject" className='form-label'>Message</label>
                      <textarea name="" placeholder="Message" rows={5} id="" className='form-control form-control-lg'></textarea>
                      </div>
                      <button className='btn btn-primary large mt-3'>Submit</button>
                    </form>
                  </div>
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

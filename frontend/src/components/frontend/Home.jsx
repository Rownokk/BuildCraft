import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AboutImg from '../../assets/images/about-us.jpg';
import Header from '../common/Header';
import Footer from '../common/Footer';
const Home = () => {
  return (
    
        <>
       <Header/>
    <main>
         {/* Hero Section */}
     <section className='section-1'>
       <div className='hero d-flex align-items-center'>
          <div className='container-fluid'>
            <div className='text-center'>
               <span>Welcome to Build Craft</span>
               <h1>Crafting dreams with<br/>Precision & Excellence.</h1>
               <p>We excel at transforming visions into reality through outstanding craftmanship & Precision</p>
               <div className='mt-4'>
               <a className='btn btn-primary'>Contact Now</a>
               <a className='btn btn-secondary ms-2'>View Projects</a>
               </div>
               
            </div>

          </div>
       </div>
     </section>
     {/* About Us Section */}
     <section className='section-2 py-5'>
        <div className='container py-5'>
            <div className='row'>
                <div className='col-md-6'>
                 <img src={AboutImg} className='w-100' />
                </div>
                <div className='col-md-6'>
                 <span>About Us</span>
                 <h2>Crafting structures that last a lifetime</h2>
                 <p>BuildCraft is an innovative solution designed to streamline 
                    construction project management, offering intuitive tools for 
                    planning, tracking, and collaboration.</p>
                <p>BuildCraft empowers construction teams with smart project management 
                    features, enabling better coordination, resource optimization, and 
                    real-time progress tracking to achieve project goals efficiently.

                </p>
                </div>
                </div> 
        </div>
     </section>
    </main>
    <Footer/>
        </>
        
  )
}

export default Home

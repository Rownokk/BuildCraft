import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaChevronUp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-dark text-light py-5 position-relative'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3 mb-4'>
            <h3 className='fw-bold text-uppercase'>BuildCraft</h3>
            <p>
              Our post-construction services provide peace of mind, ensuring that we are
              here for you even after the project is completed.
            </p>
          </div>
          <div className='col-md-3 mb-4'>
            <h3 className='fw-bold mb-3 text-uppercase'>Our Services</h3>
            <ul className='list-unstyled'>
              <li><a href='' className='text-light text-decoration-none'>Specialty Construction</a></li>
              <li><a href='' className='text-light text-decoration-none'>Project Management</a></li>
              <li><a href='' className='text-light text-decoration-none'>Renovation Services</a></li>
              <li><a href='' className='text-light text-decoration-none'>Consulting Services</a></li>
            </ul>
          </div>
          <div className='col-md-3 mb-4'>
            <h3 className='fw-bold mb-3 text-uppercase'>Quick Links</h3>
            <ul className='list-unstyled'>
              <li><a href='/about' className='text-light text-decoration-none'>About Us</a></li>
              <li><a href='/services' className='text-light text-decoration-none'>Services</a></li>
              <li><a href='/projects' className='text-light text-decoration-none'>Projects</a></li>
              <li><a href='/blogs' className='text-light text-decoration-none'>Blog</a></li>
              <li><a href='/contact' className='text-light text-decoration-none'>Contact Us</a></li>
            </ul>
          </div>
          <div className='col-md-3 mb-4'>
            <h3 className='fw-bold mb-3 text-uppercase'>Contact Us</h3>
            <ul className='list-unstyled'>
              <li><FaPhoneAlt className='me-2' /><a href='tel:+188800000000' className='text-light text-decoration-none'>(888) 000-00000</a></li>
              <li><FaEnvelope className='me-2' /><a href='mailto:buildcraft@example.com' className='text-light text-decoration-none'>buildcraft@example.com</a></li>
            </ul>
            <p className='mb-0'>
              <FaMapMarkerAlt className='me-2' />
              20-8X Riverdell,<br/> Yonkers, New York, 226017<br />
              ZIP: 0522400XXXX
            </p>
          </div>
        </div>
        <hr className='bg-light' />
        <div className='text-center pt-3'>
          &copy; 2025 BuildCraft. All Rights Reserved.
        </div>
        <div className='position-absolute end-0 bottom-0 p-3'>
          <a href='#' className='btn btn-outline-light rounded-circle'><FaChevronUp /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

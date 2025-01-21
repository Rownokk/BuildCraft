import React from 'react'

const Footer = () => {
  return (
    <footer>
     <div className='container py-5'> 
     <div className='row'>
        <div className='col-md-3'>
       <h3>Build Craft</h3>
       <div className='pe-5'>
       <p>
        Our post-construction services gives you peace of mind knowing that we are 
        still here for you even after.
       </p>
       </div>
       
        </div>
        <div className='col-md-3'>
        <h3 className='mb-3'>Our Services</h3>
        <ul>
            <li>
                <a href="">Speciality Construction</a>
            </li>
            <li>
                <a href="">Speciality Construction</a>
            </li>
            <li>
                <a href="">Speciality Construction</a>
            </li>
            <li>
                <a href="">Speciality Construction</a>
            </li>
        </ul>
        </div>
        <div className='col-md-3'>
        <h3 className='mb-3'>Quick Links</h3>
        <ul>
            <li>
                <a href="">About Us</a>
            </li>
            <li>
                <a href="">Services</a>
            </li>
            <li>
                <a href="">Projects</a>
            </li>
            <li>
                <a href="">Blogs</a>
            </li>
            <li>
                <a href="">Contact Us</a>
            </li>
        </ul>

        </div>
        <div className='col-md-3'>
        <h3 className='mb-3'>Contact Us</h3>
        <ul>
            <li>
                <a href="">(888-000-00000)</a>
            </li>
            <li>
                <a href="">buildcraft@example.com</a>
            </li>
            <p>
                20-8x Riverdell<br/>
                Yonkers,Newyork,226017<br/>
                0522400xxxx

            </p>
        </ul>
        </div>
        <hr />
        <div className='text-center pt-4'>Copyright @ 2025 Build Craft. All Rights Reserved.</div>
     </div>
     </div>
    </footer>
  )
}

export default Footer

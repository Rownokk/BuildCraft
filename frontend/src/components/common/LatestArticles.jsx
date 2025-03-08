import React from 'react'
import BlogImg from '../../assets/images/construction3.jpg';

const LatestArticles = () => {


return (
    <section className='section-6 bg-light py-5'>
    <div className='container'>
       <div className='section-header text-center'>
          <span>Blog & News</span>
          <h2>Articles & Blog posts</h2>
          <p>we speacialize in a wide range of construction services,including residential, commercial, and industrial projects. </p>
       </div>
       <div className='row pt-3'>
          <div className='col-md-4'>
             <div className='card shadow border-0'>
                <div className='card-img-top'>
                   <img src={BlogImg} alt="" className='w-100' />
                </div>
                <div className='card-body p-4'>

                   <div className='mb-3'>
                      <a href='#' className='title'>Building the Future</a>
                   </div>
                   <a href='#' className='btn btn-primary small'>Read More</a>
                </div>

             </div>

          </div>     <div className='col-md-4'>
             <div className='card shadow border-0'>
                <div className='card-img-top'>
                   <img src={BlogImg} alt="" className='w-100' />
                </div>
                <div className='card-body p-4'>

                   <div className='mb-3'>
                      <a href='#' className='title'>From Blueprint to Reality</a>
                   </div>
                   <a href='#' className='btn btn-primary small'>Read More</a>
                </div>

             </div>

          </div>
          <div className='col-md-4'>
             <div className='card shadow border-0'>
                <div className='card-img-top'>
                   <img src={BlogImg} alt="" className='w-100' />
                </div>
                <div className='card-body p-4'>

                   <div className='mb-3'>
                      <a href='#' className='title'>Sustainable Structures</a>
                   </div>
                   <a href='#' className='btn btn-primary small'>Read More</a>
                </div>

             </div>

          </div>


       </div>
    </div>

 </section>


)

}

export default LatestArticles

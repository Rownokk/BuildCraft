import React from 'react';
import Header from '../../common/Header';
import Sidebar from '../../common/Sidebar';
import Footer from '../../common/Footer';
import {apiUrl,token} from '../../common/http';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Show = ({}) => {
  const [services,setServices]=useState([]);


  const fetchServices=async()=>{
      const res=await fetch(apiUrl+'services',{
'method':'GET',
'headers':{
  'Content-type':'application/json',
  'Accept':'application/json',
  'Authorization':`Bearer ${token()}`
}


      });
      const result =await res.json();
      setServices(result.data)
 

  }
  useEffect(()=>
    {
fetchServices();
    }
    ,[]);
  return (
    <>
      <Header />
      <main>
        <div className="container my-5">
          <div className="row">
            {/* Sidebar */}
            <div className="col-md-3">
              <Sidebar />
            </div>

            {/* Dashboard Section */}
            <div className="col-md-9">
              <div className="card shadow border-0">
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between">
                    <h4 className="h5">Services</h4>
                    <Link to="/admin/services/create" className="btn btn-primary">Create</Link>
                  </div>
                  <hr/>
                  <table className='table table-striped'>
                  <thead>
    <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Slug</th>
        <th>Status</th>
        <th>Action</th>
    </tr>
</thead>

<tbody>
  {services && services.map(service => (
    <tr key={`service-${service.id}`}>
      <td>{service.id}</td>
      <td>{service.title}</td>
      <td>{service.slug}</td>
      <td>{service.status === 1 ? 'Active' : 'Blocked'}</td>
      <td>
        <a href="#" className='btn btn-primary btn-sm'>Edit</a>
        <a href="#" className='btn btn-secondary btn-sm ms-2'>Delete</a>
      </td>
    </tr>
  ))}
</tbody>

                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Show;


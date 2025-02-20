import React from 'react';
import Header from '../../common/Header';
import Sidebar from '../../common/Sidebar';
import Footer from '../../common/Footer';

const Show = () => {
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
                    <a href="#" className="btn btn-primary">Create</a>
                  </div>
                  <hr/>
                  <table className='table table-striped'>
                    <thead>
                        <tr>ID </tr>
                        <th>Name</th>
                        <th>Slug</th>
                        <th>Status</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            
                        </tr>
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


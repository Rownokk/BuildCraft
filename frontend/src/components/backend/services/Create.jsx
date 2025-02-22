import React ,{ useState, useRef, useMemo } from 'react'
import Header from '../../common/Header'
import Sidebar from '../../common/Sidebar'
import Footer from '../../common/Footer'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { apiUrl, token } from '../../common/http'
import { toast } from 'react-toastify'
import JoditEditor from 'jodit-react';
            const Create = ({placeholder}) => {
              const editor = useRef(null);
              const [content, setContent] = useState('');

              const config = useMemo(() => ({
                readonly: false, // all options from https://xdsoft.net/jodit/docs/,
                placeholder: placeholder || 'Content'
              }),
              [placeholder]
            );
                const {
                    register,
                    handleSubmit,
                    watch,
                    formState: { errors },
                  } = useForm()
                  const navigate= useNavigate();

                  const onSubmit = async(data) => {
                    const newData ={...data, "content": content}
                        const res=await fetch(apiUrl+'services',{
                    'method':'POST',
                    'headers':{
                      'Content-type':'application/json',
                      'Accept':'application/json',
                      'Authorization':`Bearer ${token()}`
                    },body: JSON.stringify(newData)
              
                });
                const result =await res.json();
                if(result.status == true)
                    {
                      toast.success(result.message);
                      navigate('/admin/services');
                    

                    }else{

            toast.error(result.message);
                    }
                
            }
                
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
                                <h4 className="h5">Services/Create</h4>
                                <Link to="/admin/services" className="btn btn-primary">Back</Link>
                              </div>
                              <hr/>
                            
                    
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-3'>
                    <label  className='form-label'>Name</label>
                    <input
                      placeholder='Title'
                    {...register('title', { required: "The title field is required" })}

                    type="text"   className={`form-control ${errors.title && 'is-invalid'}`}/>
                        {errors.title && <p className='invalid-feedback'>{errors.title?.message}</p>}

                </div>
                <div className='mb-3'>
                    <label  className='form-label'>Slug</label>
                    <input 
                      placeholder='Slug'
                    {...register('slug', { required: "The slug field is required" })}
                    type="text"   className={`form-control ${errors.slug && 'is-invalid'}`}
                                  />
                                  {errors.slug && <p className='invalid-feedback'>{errors.slug?.message}</p>}
                                </div>
                <div className='mb-3'>
                    <label htmlFor=""
                  
                    className='form-label'>Short Description</label>
                <textarea
                          placeholder='Short Description'
                    {...register('short_desc')}
              className='form-control' rows={4}></textarea>

                </div>
                <div className='mb-3'>
                    <label htmlFor=""    className='form-label'
                                  
                              >Content</label>
                              <JoditEditor
                                ref={editor}
                                value={content}
                                config={config}
                                tabIndex={1} // tabIndex of textarea
                                onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                                onChange={newContent => {}}
                              />
                </div>
                <div className='mb-3'>
                    <label  className='form-label'>Status</label>
                    <select className='form-control'
                        {...register('status')}>
                                    <option value="1">Active</option>
                                    <option value="0">Block</option>
                                  </select>

                </div>
                <button  className='btn btn-primary' >
                                  Submit
                                </button>
            </form>



                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </main>
                  <Footer /></>
              )
            }

            export default Create 
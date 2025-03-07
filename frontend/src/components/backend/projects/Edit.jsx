import React, { useMemo, useRef, useState } from 'react';
import Footer from '../../common/Footer';
import Sidebar from '../../common/Sidebar';
import Header from '../../common/Header';
import JoditEditor from 'jodit-react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { apiUrl, fileUrl, token } from '../../common/http';
import { toast } from 'react-toastify';

const Edit = ({ placeholder }) => {
    const editor = useRef(null);
    const [content, setContent] = useState('');
      const [project, setProject] = useState([]);
      const [isDisable, setIsDisable] = useState(false);
      const [imageId, setImageId] = useState(null);
    
      const config = useMemo(
        () => ({
          readonly: false,
          placeholder: placeholder || 'Content',
        }),
        [placeholder]
      );
    const params=useParams();

      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        defaultValues:async()=>{
             const res = await fetch(`${apiUrl}projects/${params.id}`, {
                    method: 'GET',
                    headers: {
                      'Content-type': 'application/json',
                      'Accept': 'application/json',
                      'Authorization': `Bearer ${token()}`
                    }
                  }
                );
                  const result = await res.json();
                 // console.log(result);
                  setProject(result.data);
                  setContent(result.data.content);
                  return{
                    title:result.data.title,
                  slug:result.data.slug,
                   short_desc:result.data.short_desc,
                   status:result.data.status,
                 construction_type:result.data.construction_type,
                 location:result.data.location,
                sector:result.data.sector,
              
                  }
        }
      });
    
      const navigate = useNavigate();
       const onSubmit = async (data) => {
          const newData = { ...data, content: content, imageId: imageId };
          const res = await fetch(apiUrl + 'projects/'+params.id, {
            method: 'PUT',
            headers: {
              'Content-type': 'application/json',
              Accept: 'application/json',
              Authorization: `Bearer ${token()}`,
            },
            body: JSON.stringify(newData),
          });
      
          const result = await res.json();
          if (result.status === true) {
            toast.success(result.message);
            navigate('/admin/projects');
          } else {
            toast.error(result.message);
          }
        };
        const handleFile = async (e) => {
            const formData = new FormData();
            const file = e.target.files[0];
            formData.append('image', file);
          setIsDisable(true);
            await fetch(apiUrl + 'temp-image', {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${token()}`,
              },
              body: formData,
            })
              .then((response) => response.json())
              .then((result) => {
                setIsDisable(false);
                if (result.status === false) {
                  toast.error(result.errors.image[0]);
                } else {
                  setImageId(result.data.id);
                }
              });
          };
        
  return (
   <>
    <Header />
      <main>
        <div className="container my-5">
          <div className="row">
            <div className="col-md-3">
              <Sidebar />
            </div>
            <div className="col-md-9">
              <div className="card shadow border-0">
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between">
                    <h4 className="h5">Projects / Edit</h4>
                    <Link to="/admin/projects" className="btn btn-primary">
                      Back
                    </Link>
                  </div>
                  <hr />
                  <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Name Field */}
                    <div className="mb-3">
                      <label className="form-label">Title</label>
                      <input
                        placeholder="Title"
                        {...register('title', { required: 'The title field is required' })}
                        type="text"
                        className={`form-control ${errors.title && 'is-invalid'}`}
                      />
                      {errors.title && <p className="invalid-feedback">{errors.title?.message}</p>}
                    </div>

                    {/* Slug Field */}
                    <div className="mb-3">
                      <label className="form-label">Slug</label>
                      <input
                        placeholder="Slug"
                        {...register('slug', { required: 'The slug field is required' })}
                        type="text"
                        className={`form-control ${errors.slug && 'is-invalid'}`}
                      />
                      {errors.slug && <p className="invalid-feedback">{errors.slug?.message}</p>}
                    </div>

                    {/* Location & Construction Type Fields */}
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Location</label>
                          <input
                            placeholder="Location"
                            {...register('location')}
                            type="text"
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Construction Type</label>
                          <select {...register('construction_type')} className="form-control">
                            <option value="">Construction Type</option>
                            <option value="Residential construction">Residential construction</option>
                            <option value="Commercial construction">Commercial construction</option>
                            <option value="Industrial construction">Industrial construction</option>
                            <option value="Infrastructure construction">Infrastructure construction</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                   

                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Sector</label>
                          <select {...register('sector')} className="form-control">
                            <option value="">Sector</option>
                            <option value="Health">Health</option>
                            <option value="Education">Education</option>
                            <option value="Corporate">Corporate</option>

                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                      <div className="mb-3">
                      <label className="form-label">Status</label>
                      <select {...register('status')} className="form-control">
                        <option value="1">Active</option>
                        <option value="0">Block</option>
                      </select>
                    </div>
                    </div>
                    </div>


                    {/* Short Description */}
                    <div className="mb-3">
                      <label className="form-label">Short Description</label>
                      <textarea
                        placeholder="Short Description"
                        {...register('short_desc')}
                        className="form-control"
                        rows={4}
                      ></textarea>
                    </div>

                    {/* Content */}
                    <div className="mb-3">
                      <label className="form-label">Content</label>
                      <JoditEditor
                        ref={editor}
                        value={content}
                        config={config}
                        tabIndex={1}
                        onBlur={(newContent) => setContent(newContent)}
                        onChange={() => {}}
                      />
                    </div>

                    {/* Image Upload */}
                    <div className="mb-3">
                      <label className="form-label">Image</label>
                      <br />
                      <input onChange={handleFile} type="file" />
                    </div>
                        <div className='pb-3'>
                                          {project.image && (
                                            <img
                                              src={`${fileUrl}uploads/projects/small/${project.image}`}
                                              alt=''
                                              style={{ width: '150px', height: 'auto' }}
                                            />
                                          )}
                                        </div>

                    {/* Status Field */}
                    <div className="mb-3">
                      <label className="form-label">Status</label>
                      <select {...register('status')} className="form-control">
                        <option value="1">Active</option>
                        <option value="0">Block</option>
                      </select>
                    </div>

                    {/* Submit Button */}
                    <button disabled={isDisable} className="btn btn-primary">
                 Update
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

export default Edit
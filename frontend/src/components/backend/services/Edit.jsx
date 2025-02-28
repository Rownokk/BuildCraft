import React, { useRef, useState, useMemo, useEffect } from 'react';
import Header from '../../common/Header';
import Sidebar from '../../common/Sidebar';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Footer from '../../common/Footer';
import JoditEditor from 'jodit-react';
import { toast } from 'react-toastify';
import { apiUrl, token, fileUrl } from '../../common/http';
import { useForm } from 'react-hook-form';

const Edit = ({ placeholder }) => {
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const [service, setService] = useState(null);  // Track the service data
    const [isDisable, setIsDisable] = useState(false);
    const [imageId, setImageId] = useState(null);
    const params = useParams();
    const navigate = useNavigate();

    const config = useMemo(() => ({
        readonly: false, // all options from https://xdsoft.net/jodit/docs/,
        placeholder: placeholder || ''
    }), [placeholder]);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues: async () => {
            const res = await fetch(apiUrl + 'services/' + params.id, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token()}`
                }
            });
            const result = await res.json();
            setContent(result.data.content);
            setService(result.data);  // Store the service data in state

            return {
                title: result.data.title,
                slug: result.data.slug,
                short_desc: result.data.short_desc,
                status: result.data.status,
            };
        }
    });

    const onSubmit = async (data) => {
        const newData = { ...data, "content": content, "imageId": imageId };
        const res = await fetch(apiUrl + 'services/' + params.id, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token()}`
            },
            body: JSON.stringify(newData)
        });
        const result = await res.json();
        if (result.status === true) {
            toast.success(result.message);
            navigate('/admin/services');
        } else {
            toast.error(result.message);
        }
    };

    const handleFile = async (e) => {
        const formData = new FormData();
        const file = e.target.files[0];
        formData.append("image", file);
        await fetch(apiUrl + 'temp-image', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token()}`
            },
            body: formData
        })
            .then(response => response.json())
            .then(result => {
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
                <div className='container my-5'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <Sidebar />
                        </div>
                        <div className='col-md-9'>
                            <div className='card shadow border-0'>
                                <div className='card-body p-4'>
                                    <div className='d-flex justify-content-between'>
                                        <h4 className='h5'>Services / Edit</h4>
                                        <Link to="/admin/services" className='btn btn-primary'>Back</Link>
                                    </div>
                                    <hr />
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        {/* Name Field */}
                                        <div className='mb-3'>
                                            <label className='form-label'>Name</label>
                                            <input
                                                placeholder='Title'
                                                {...register('title', { required: "The title field is required" })}
                                                type="text"
                                                className={`form-control ${errors.title && 'is-invalid'}`}
                                            />
                                            {errors.title && <p className='invalid-feedback'>{errors.title?.message}</p>}
                                        </div>

                                        {/* Slug Field */}
                                        <div className='mb-3'>
                                            <label className='form-label'>Slug</label>
                                            <input
                                                placeholder='Slug'
                                                {...register('slug', { required: "The slug field is required" })}
                                                type="text"
                                                className={`form-control ${errors.slug && 'is-invalid'}`}
                                            />
                                            {errors.slug && <p className='invalid-feedback'>{errors.slug?.message}</p>}
                                        </div>

                                        {/* Short Description */}
                                        <div className='mb-3'>
                                            <label className='form-label'>Short Description</label>
                                            <textarea
                                                placeholder='Short Description'
                                                {...register('short_desc')}
                                                className='form-control'
                                                rows={4}
                                            ></textarea>
                                        </div>

                                        {/* Content */}
                                        <div className='mb-3'>
                                            <label className='form-label'>Content</label>
                                            <JoditEditor
                                                ref={editor}
                                                value={content}
                                                config={config}
                                                tabIndex={1}
                                                onBlur={newContent => setContent(newContent)}
                                                onChange={newContent => { }}
                                            />
                                        </div>

                                        {/* Image */}
                                        <div className='mb-3'>
                                            <label htmlFor="" className='form-label'>Image</label>
                                            <br />
                                            <input onChange={handleFile} type="file" />
                                        </div>

                                        {/* Display existing image if available */}
                                        <div className='pb-3'>
                                            {service?.image && <img src={fileUrl + 'uploads/services/small/' + service.image} alt="Service Image" />}
                                        </div>

                                        {/* Status Field */}
                                        <div className='mb-3'>
                                            <label className='form-label'>Status</label>
                                            <select {...register('status')} className='form-control'>
                                                <option value="1">Active</option>
                                                <option value="0">Block</option>
                                            </select>
                                        </div>

                                        {/* Submit Button */}
                                        <button disabled={isDisable} className='btn btn-primary'>
                                            Update
                                        </button>
                                    </form>
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

export default Edit;

import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
const Login = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
       // console.log(data)
       const res =await fetch("http://127.0.0.1:8000/api/authenticate",{
        method : 'POST',
        headers : {
            'content-type' : 'application/json'
        },
        body : JSON.stringify(data)
       });

       const result = await res.json();
      if (result.status == false){
        toast.error(result.message)
      }else{
        navigate('/admin/dashboard')
      }
      // console.log(result);
    }
    return (
        <>
            <Header />
            <main>
                <div className='container my-5 d-flex justify-content-center'>
                    <div className='login-form my-5'>
                        <div className='card border-0 shadow'>
                            <div className='card-body p-4'>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <h4 className='mb-3'>Login Here</h4>
                                    <div className='mb-3'>
                                        <label htmlFor="" className='form-label'>Email</label>
                                        <input
                                            {
                                            ...register('email', {
                                                required: "This field is required",


                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message: 'Please enter a valid email address'
                                                }

                                            })
                                            }
                                            type="text" placeholder='Email'
                                            className={`form-control ${errors.email && `is-invalid`}`} />
                                        {
                                            errors.email && <p className='invalid-feedback'>{errors.email?.message}</p>
                                        }
                                    </div>
                                    <div className='mb-3'>
                                        <label htmlFor="" className='form-label'>Password</label>
                                        <input
                                            {
                                            ...register('password', {
                                                required: "This field is required"
                                            })
                                            }
                                            type="password" placeholder='Password'
                                            className={`form-control ${errors.password && `is-invalid`}`} />
                                        {
                                            errors.password && <p className='invalid-feedback'>{errors.password?.message}</p>
                                        }
                                    </div>
                                    <button type='submit' className='btn btn-primary'>Login</button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Login

import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
const Login = () => {
    return (
        <>
            <Header />
            <main>
                <div className='container my-5 d-flex justify-content-center'>
                    <div className='login-form my-5'>
                        <div className='card border-0 shadow'>
                            <div className='card-body p-4'>
                                <form>
                                    <h4 className='mb-3'>Login Here</h4>
                                <div className='mb-3'>
                                    <label htmlFor="" className='form-label'>Email</label>
                                    <input type="text" placeholder='Email' className='form-control' />
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor="" className='form-label'>Password</label>
                                    <input type="password" placeholder='Password' className='form-control' />
                                </div>
                                <button className='btn btn-primary'>Login</button>
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

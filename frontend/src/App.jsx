import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/frontend/Home';
import About from './components/frontend/About';
import Services from './components/frontend/Services'; // Importing the Services component
import './assets/css/style.scss';
import ContactUs from './components/frontend/ContactUs';
import Projects from './components/frontend/Projects';
import Blogs from './components/frontend/Blogs';
import Login from './components/backend/Login';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './components/backend/Dashboard';
import RequireAuth from './components/common/RequireAuth';
import {default as ShowServices} from './components/backend/services/Show';
import {default as ShowMembers} from './components/backend/members/Show';
import { default as CreateService } from "./components/backend/services/Create";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/admin/login' element={<Login/>} />
          <Route path='/admin/dashboard' element={
            <RequireAuth>
            <Dashboard/>
            </RequireAuth>
            
            } />
             <Route path='/admin/services' element={
            <RequireAuth>
            <ShowServices/>
            </RequireAuth>
            
            } />
            <Route path='/admin/members' element={
            <RequireAuth>
            <ShowMembers/>
            </RequireAuth>
            
            } />
                     <Route path='/admin/services/create' element={
            <RequireAuth>
            <CreateService/>
            </RequireAuth>
            
            } />
        </Routes>
      </BrowserRouter>
      <ToastContainer 
         position='top-center'
      />

    </>
  );
}

export default App;


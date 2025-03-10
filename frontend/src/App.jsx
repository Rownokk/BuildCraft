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
import {default as CreateMember} from './components/backend/members/Create';
import {default as EditMember} from './components/backend/members/Edit';

import { default as CreateService } from "./components/backend/services/Create";
import { default as EditService } from "./components/backend/services/Edit";
import ServiceDetail from './components/frontend/ServiceDetail';
import {default as ShowProjects} from './components/backend/projects/Show';
import { default as EditProject } from "./components/backend/projects/Edit";
import { default as CreateProject} from "./components/backend/projects/Create";
import ProjectDetail from './components/frontend/ProjectDetail';

import {default as ShowArticles} from './components/backend/articles/Show';
import {default as CreateArticle} from './components/backend/articles/Create';
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
          <Route path='/service/:id' element={<ServiceDetail />} />
          <Route path='/project/:id' element={<ProjectDetail />} />

          <Route path='/projects' element={<Projects />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/admin/login' element={<Login/>} />
          <Route path='/admin/contact' element={<ContactUs/>} />

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

            <Route path='/admin/members/create' element={
            <RequireAuth>
            <CreateMember/>
            </RequireAuth>
            
            } />

           <Route path='/admin/members/edit/:id' element={
            <RequireAuth>
            <EditMember/>
            </RequireAuth>
            
            } />
            
            <Route path='/admin/services/create' element={
            <RequireAuth>
            <CreateService/>
            </RequireAuth>
            
            } />
             <Route path='/admin/services/edit/:id' element={
            <RequireAuth>
            <EditService/>
            </RequireAuth>
   } />


<Route path='/admin/projects' element={
            <RequireAuth>
            <ShowProjects/>
            </RequireAuth>
   } />
   
<Route path='/admin/projects/create' element={
            <RequireAuth>
            <CreateProject/>
            </RequireAuth>
   } />
   <Route path='/admin/projects/edit/:id' element={
            <RequireAuth>
            <EditProject/>
            </RequireAuth>
   } />
      <Route path='/admin/articles' element={
            <RequireAuth>
            <ShowArticles/>
            </RequireAuth>
   } />
       <Route path='/admin/articles/create' element={
            <RequireAuth>
            <CreateArticle/>
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


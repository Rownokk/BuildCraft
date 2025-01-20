# **BuildCraft 🏗️**

## **Project Overview** 🌟
BuildCraft is an innovative project management system tailored for construction firms and contractors. Developed using **ReactJS for the frontend** and **PHP with Laravel for the backend**, this platform offers a secure, scalable, and user-friendly interface for managing projects, schedules, resources, and teams. BuildCraft ensures seamless communication and efficient management across all levels of construction project workflows.

---

## **Title** 📌
**BuildCraft: Revolutionizing Construction Project Management with ReactJS & Laravel**

---

## **Objective** 🎯
The primary objective of BuildCraft is to provide an integrated platform that:
- Facilitates efficient management of construction projects, resources, schedules, and tasks.
- Provides secure, role-based access for users (contractors, project managers, clients).
- Enhances communication between stakeholders for smooth project execution.
- Allows administrators to monitor project progress and generate reports.
- Ensures a seamless user experience through an intuitive UI and responsive design.

---

## **Table of Contents** 📚
1. 👩‍💻 [Team Members](#team-members)  
2. 🎯 [Target Audience](#target-audience)  
3. 🛠️ [Tech Stack](#tech-stack)  
4. 🎨 [UI Design](#ui-design)  
5. ✨ [Project Features](#project-features)  
   - [User Section](#user-section) 👥  
   - [Admin Section](#admin-section) 🛡️  
   - [Project Manager Section](#project-manager-section) 🏗️  
   - [Client Section](#client-section) 🏢  
6. 🌐 [API Endpoints](#api-endpoints)  
7. 🏁 [Milestones](#milestones)  

---

## **Team Members** 👩🏻‍💻 <a id="team-members"></a>
<table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Email</th>
      <th>GitHub</th>
      <th> Role</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>20220104151</td>
      <td>Rownok Jahan Mowmita</td>
      <td>mowmita878@gmail.com</td>
      <td>Rownokk</td>
      <td>Lead Developer (Frontend + Backend)</td>
    </tr>
    <tr>
      <td>20220104143</td>
      <td>Umme Jamila</td>
      <td>jamila.cse.20220104143@aust.edu</td>
      <td>jamila143</td>
      <td>Frontend + Backend</td>
    </tr>
    <tr>
      <td>20220104149</td>
      <td>Authoi Chowdhury</td>
      <td>authoichy016@gmail.com</td>
      <td>AuthoiChy</td>
      <td>Frontend Developer</td>
    </tr>
  </tbody>
</table>

---

## **Target Audience** 🎯 <a id="target-audience"></a>
1. **Construction Companies**: Streamline project operations and resource allocation.  
2. **Project Managers**: Monitor project progress, assign tasks, and manage schedules.  
3. **Clients**: Track project progress, view reports, and provide feedback.

---

## **Tech Stack** 🛠️ <a id="tech-stack"></a>
<table>
  <thead>
    <tr>
      <th>Category</th>
      <th>Technology</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Frontend</td>
      <td>ReactJS</td>
    </tr>
    <tr>
      <td>Backend</td>
      <td>Laravel (PHP)</td>
    </tr>
    <tr>
      <td>Database</td>
      <td>phpMyAdmin</td>
    </tr>
      <tr>
      <td>Rendering Method</td>
      <td>CSR (Client-Side Rendering)</td>
    </tr>
    <tr>
      <td>Version Control</td>
      <td>Git</td>
    </tr>
    <tr>
      <td>Repository</td>
      <td>GitHub</td>
    </tr>
  </tbody>
</table>

---

## **UI Design** 🎨 <a id="ui-design"></a>
**Canva Design**: [BuildCraft UI Design](https://www.canva.com/design/DAGbNmKSkSg/41E6xieTh_pG6wRGAugLdA/edit?utm_content=DAGbNmKSkSg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)  

---

## **Project Features** ✨ <a id="project-features"></a>

### **User Section** 👥 <a id="user-section"></a>
- 🔐 Secure multi-role login (Admin, Project Manager, Client).  
- 📊 Role-based access control for data and actions.  
- 🛠️ CRUD operations for project-related data (e.g., schedules, resources, tasks).  
- 🔍 Search and filter functionality for records.  

### **Admin Section** 🛡️ <a id="admin-section"></a>
- 👥 Manage user roles and permissions.  
- ✅ Approve or reject new project requests.  
- 📑 Generate reports for project progress and resource usage.  
- 🔒 Multi-admin authentication and password recovery.  

### **Project Manager Section** 🏗️ <a id="project-manager-section"></a>
- ✅ Assign and monitor tasks for team members.  
- 📅 Manage project schedules and milestones.  
- 📢 Communicate with clients and contractors.  

### **Client Section** 🏢 <a id="client-section"></a>
- 📖 View project updates, timelines, and reports.  
- 💬 Provide feedback and request changes.  
- 📝 Track invoices and payments.  

---

## **API Endpoints** 🌐 <a id="api-endpoints"></a>

### **Authentication** 🔒
- **POST** `/api/auth/register` - Register users with roles (Admin, Project Manager, Client).  
- **POST** `/api/auth/login` - Login for all roles.  
- **POST** `/api/auth/logout` - Logout securely.  
- **POST** `/api/auth/forgot-password` - Password recovery via email.  
- **POST** `/api/auth/reset-password` - Reset password using a token.  

### **Admin APIs** 🛠️
- **GET** `/api/admin/projects` - Retrieve a list of all projects.  
- **POST** `/api/admin/projects/approve` - Approve or reject project requests.  
- **DELETE** `/api/admin/projects/{id}` - Remove a project.  

### **Project Manager APIs** 📊
- **GET** `/api/manager/tasks` - Retrieve assigned tasks.  
- **POST** `/api/manager/tasks` - Create or update tasks.  
- **GET** `/api/manager/resources` - Manage resource allocation.  

### **Client APIs** 📚
- **GET** `/api/clients/projects` - View project details.  
- **POST** `/api/clients/feedback` - Submit feedback and queries.  
- **GET** `/api/clients/invoices` - View invoices and payment status.  

---

## **Milestones** 🏁 <a id="milestones"></a>
<table>
  <thead>
    <tr>
      <th>🎯 Milestone</th>
      <th>📜 Features</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Checkpoint 1</td>
      <td>
        <ul>
          <li>Frontend and backend setup.</li>
          <li>User authentication system.</li>
          <li>Database design for project and user data.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Checkpoint 2</td>
      <td>
        <ul>
          <li>Project and task management features.</li>
          <li>Progress tracking dashboards.</li>
        </ul>
      </td>
    </tr>
     <tr>
      <td>Checkpoint 3</td>
      <td>
        <ul>
          <li>Testing, debugging, and final delivery.</li>
          <li>Communication module between clients and managers.</li>
        </ul>
      </td>
    </tr>
  
  </tbody>
</table>

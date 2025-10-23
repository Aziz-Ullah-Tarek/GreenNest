import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './routers/Root.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Plants from './pages/Plants.jsx';
import Profile from './pages/Profile.jsx';
import PlantDeatils from './pages/PlantDeatils.jsx';
import NotFound from './pages/NotFound.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import PrivateRoute from './routers/PrivateRoute.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
    {
      index:true,
      path:"/",
      Component:Home
    },
    {
      path:"/plants",
      Component:Plants
    },
    {
      path:"/plant/:id",
      Component:PlantDeatils
    },
    {
      path:"/profile",
      element: <PrivateRoute><Profile /></PrivateRoute>
    },
    {
      path:"/login",
      Component:Login
    },
    {
      path:"/register",
      Component:Register
    },
    {
      path:"/*",
      Component:NotFound
    }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </AuthProvider>
  </StrictMode>,
)
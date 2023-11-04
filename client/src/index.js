import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./views/Home/Home"
import Signup from './views/Signup/Signup';
import Login from './views/Login/Login';
import Order from './views/Orders/Orders';
import Buy from './views/Buy/Buy';


const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
      path: "/",
      element:<Home/>
  },
 
  {
      path: "/Login",
      element: < Login/>
  },
  {
    path: "/signup",
    element: < Signup/>
},
{
  path:"/orders",
  element: <Order/>
},
{
  path:"/Buy/:_id",
  element: <Buy/>
}


  
])




root.render(

  <RouterProvider router={router} />);





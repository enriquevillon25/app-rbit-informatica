import React from "react";
import "./App.css";
import { HomePage } from "./pages/Home/HomePage";
import {RouterProvider, createBrowserRouter } from "react-router-dom";
import './index.scss';
import { ServicesUsPage } from "./pages/ServicesUs/ServicesUs";
import { AboutUsPage } from "./pages/AboutUs/AboutUs";
import { ContactUsPage } from "./pages/ContactUs/ContactUsPage";


const router = createBrowserRouter([
  {
    path:'/',
    element: <HomePage/>,
    errorElement: <HomePage/>
  },
  {
    path:'/services',
    element: <ServicesUsPage/>
  },
  {
    path:'/about',
    element: <AboutUsPage/>
  },
  {
    path:'/contact',
    element: <ContactUsPage/>
  },
])


function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;

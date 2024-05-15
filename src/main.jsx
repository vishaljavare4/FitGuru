import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Hero from './components/Hero.jsx'
import Exercises from './components/Exercises.jsx'


const render = createBrowserRouter([
  {
    path : "/",
    element : <App />,
    children : [
      {
        path : "/",
        element : <Hero />,
      },
      {
      path : "/exercises",
      element : <Exercises />,
      children:[
        {
          path : "/exercises/:id",
          element : <Exercises />
        }
      ]
      }]  
      // errorElement : <h1 className='text-red-500 text-2xl font-semibold'>Page not found</h1>
  }
],
)


ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={render} />
)
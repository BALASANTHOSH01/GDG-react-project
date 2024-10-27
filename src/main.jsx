import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom";

import Home from './pages/Home/Home'; // home

import Contact from './pages/Contact/Contact'; // contact


const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/contact",
    element:<Contact/>
  }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)



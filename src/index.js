import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Home from "./views/Home/Home"
import ProductView from './views/ProductView/ProductView';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/blog/:id",
    element: <ProductView />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
  <RouterProvider router={router} />
</>
);

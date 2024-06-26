import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Home from "./views/Home/Home"
import BlogView from "./views/BlogView/BlogView"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/blog/:id",
    element: <BlogView />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
  <RouterProvider router={router} />
</>
);

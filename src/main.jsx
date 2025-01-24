// basic react imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// react router imports
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// pages included on the website
import Home from './pages/Home.jsx';
import Testing from './pages/Testing.jsx';

// initialize the router
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        // the element that will be shown at the root directory
        index: true,
        element: <Home />
      }, // for each page after root, use 'path:' instead of 'index:'
      {
        path: '/testing',
        element: <Testing />
      },
    ]
  }
]);

// renders the current html document with the appropriate ReactDOM element by using the RouterProvider react-router-dom element
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);
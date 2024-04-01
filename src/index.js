import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/login',
    element: <div>LOGIN ...</div>
  },
  {
    path: '/',
    element: <App />
  },
  {
    path: '/article',
    element: <div>ARTICLE ...</div>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);


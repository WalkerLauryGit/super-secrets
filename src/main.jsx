import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Form from './components/form';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Root from './routes/root';
import Open from './routes/open';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'send/',
        element: <Form />,
      },
      {
        path: 'open/',
        element: <Open />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

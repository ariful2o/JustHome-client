import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Root from './Root';
import Error404 from './pages/Error404';
import Home from './pages/Home';
import AuthProvider from './authProvider/AuthProvider';
import Features from './pages/Features';
import About from './pages/About';
import Programs from './pages/Programs';
import NewsEvents from './pages/NewsEvents';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error404 />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/features',
        element: <Features/>,
      },
      {
        path: '/about',
        element: <About/>,
      },
      {
        path: '/programs',
        element: <Programs/>,
      },
      {
        path: '/newsEvents',
        element: <NewsEvents/>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)

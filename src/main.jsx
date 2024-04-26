import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './authProvider/AuthProvider';
import NewsDetails from './components/NewsDetails';
import './index.css';
import About from './pages/About';
import Apartment from './pages/Apartment';
import Error404 from './pages/Error404';
import Home from './pages/Home';
import Login from './pages/Login';
import NewsEvents from './pages/NewsEvents';
import Profile from './pages/Profile';
import Programs from './pages/Programs';
import Register from './pages/Register';
import RentalDetails from './pages/RentalDetails';
import Scholarships from './pages/Scholarships';
import UpdateProfile from './pages/UpdateProfile';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Root from './Root';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error404 />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader:()=>fetch('./booking.json'),
      },
      {
        path: '/apartments/:id',
        // element: <PrivateRoute><Apartment /></PrivateRoute>,
        element: <Apartment />,
        loader:()=>fetch('./booking.json'),
      },
      
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/programs',
        element: <Programs />,
        loader: () => fetch('./news.json')
      },
      {
        path: '/programs/:id',
        element: <RentalDetails />,
        loader: () => fetch('./news.json')
      },
      {
        path: '/newsEvents',
        element: <NewsEvents />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/newsEvents/:id',
        // element: <PrivateRoute><NewsDetails /></PrivateRoute>,
        element: <NewsDetails />,
        loader: () => fetch('./booking.json'),
      },
      {
        path: '/scholarships',
        element: <Scholarships />
      },
      {
        path: '/profile',
        element: <PrivateRoute> <Profile /></PrivateRoute>,
      },
      {
        path: '/updateprofile',
        element: <PrivateRoute><UpdateProfile /></PrivateRoute>,
      },
   
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)

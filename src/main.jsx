import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './authProvider/AuthProvider';
import './index.css';
import Error404 from './pages/Error404';
import Home from './pages/Home/Home';
import Root from './Root';
import Profile from './pages/profile/Profile';
import UpdateProfile from './pages/profile/UpdateProfile';
import Login from './pages/Authentication/Login';
import Register from './pages/Authentication/Register';
import Residential from './pages/Residential/Residential';
import About from './pages/About/About';
import ResidentialDetails from './pages/ResidentialDetails/ResidentialDetails';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import News from './pages/news/News';
import NewsDetails from './pages/news/newsDetails/NewsDetails';

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
        path: '/profile',
        element: <PrivateRoute><Profile /></PrivateRoute>
      },
      {
        path: '/updateprofile',
        element: <PrivateRoute><UpdateProfile /></PrivateRoute>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/residential',
        element: <Residential></Residential>,
        loader: () => fetch('booking.json')
      },
      {
        path: '/residential/:id',
        element: <ResidentialDetails />,
        // element: <PrivateRoute><ResidentialDetails /></PrivateRoute>,
        loader: () => fetch('booking.json')
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/news',
        element: <News></News>,
        loader: () => fetch('news.json')
      },
      {
        path: '/news/:id',
        element: <NewsDetails></NewsDetails>,
        loader: () => fetch('news.json')
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
